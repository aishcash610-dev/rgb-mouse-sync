import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import * as THREE from "three";

function RGBMouseModel() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
  });

  const bodyMaterial = useMemo(
    () => new THREE.MeshStandardMaterial({ color: "#111118", roughness: 0.15, metalness: 0.9 }),
    []
  );

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <group ref={groupRef} scale={2.2} rotation={[0.3, 0, 0]}>
        {/* Mouse body - main shell */}
        <mesh material={bodyMaterial} castShadow>
          <capsuleGeometry args={[0.45, 0.8, 16, 32]} />
          <mesh position={[0, -0.15, 0]} scale={[1, 0.5, 1]}>
            <sphereGeometry args={[0.55, 32, 16]} />
            <meshStandardMaterial color="#0d0d14" roughness={0.1} metalness={0.95} />
          </mesh>
        </mesh>

        {/* RGB Strip - side left */}
        <RGBStrip position={[-0.42, -0.05, 0]} rotation={[0, 0, Math.PI * 0.15]} />
        {/* RGB Strip - side right */}
        <RGBStrip position={[0.42, -0.05, 0]} rotation={[0, 0, -Math.PI * 0.15]} />

        {/* Scroll wheel */}
        <mesh position={[0, 0.25, -0.25]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.06, 0.06, 0.12, 16]} />
          <meshStandardMaterial color="#222" roughness={0.3} metalness={0.8} />
        </mesh>

        {/* Scroll wheel glow */}
        <ScrollWheelGlow />

        {/* Bottom RGB ring */}
        <BottomGlow />

        {/* Button divider line */}
        <mesh position={[0, 0.3, -0.1]} rotation={[0.3, 0, 0]}>
          <boxGeometry args={[0.01, 0.01, 0.5]} />
          <meshStandardMaterial color="#333" roughness={0.5} />
        </mesh>
      </group>
    </Float>
  );
}

function RGBStrip({ position, rotation }: { position: [number, number, number]; rotation: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const mat = meshRef.current.material as THREE.MeshStandardMaterial;
    const t = state.clock.elapsedTime;
    const r = Math.sin(t * 2) * 0.5 + 0.5;
    const g = Math.sin(t * 2 + 2) * 0.5 + 0.5;
    const b = Math.sin(t * 2 + 4) * 0.5 + 0.5;
    mat.emissive.setRGB(r * 2, g * 2, b * 2);
    mat.emissiveIntensity = 2.5;
  });

  return (
    <mesh ref={meshRef} position={position} rotation={rotation}>
      <boxGeometry args={[0.02, 0.06, 0.7]} />
      <meshStandardMaterial color="#000" emissive="#00ffaa" emissiveIntensity={2} toneMapped={false} />
    </mesh>
  );
}

function ScrollWheelGlow() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const mat = meshRef.current.material as THREE.MeshStandardMaterial;
    const t = state.clock.elapsedTime;
    mat.emissive.setHSL((t * 0.1) % 1, 1, 0.5);
    mat.emissiveIntensity = 3;
  });

  return (
    <mesh ref={meshRef} position={[0, 0.26, -0.25]} rotation={[Math.PI / 2, 0, 0]}>
      <cylinderGeometry args={[0.065, 0.065, 0.02, 16]} />
      <meshStandardMaterial color="#000" emissive="#00ff88" emissiveIntensity={3} toneMapped={false} />
    </mesh>
  );
}

function BottomGlow() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const mat = meshRef.current.material as THREE.MeshStandardMaterial;
    const t = state.clock.elapsedTime;
    const hue = (t * 0.08) % 1;
    mat.emissive.setHSL(hue, 1, 0.5);
    mat.emissiveIntensity = 4;
  });

  return (
    <mesh ref={meshRef} position={[0, -0.35, 0]} rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[0.4, 0.02, 8, 64]} />
      <meshStandardMaterial color="#000" emissive="#aa00ff" emissiveIntensity={4} toneMapped={false} />
    </mesh>
  );
}

function Particles() {
  const count = 200;
  const meshRef = useRef<THREE.InstancedMesh>(null);

  const positions = useMemo(() => {
    const pos = [];
    for (let i = 0; i < count; i++) {
      pos.push({
        x: (Math.random() - 0.5) * 10,
        y: (Math.random() - 0.5) * 10,
        z: (Math.random() - 0.5) * 10,
        speed: Math.random() * 0.5 + 0.2,
      });
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const dummy = new THREE.Object3D();
    positions.forEach((p, i) => {
      const t = state.clock.elapsedTime * p.speed;
      dummy.position.set(
        p.x + Math.sin(t + i) * 0.3,
        p.y + Math.cos(t + i * 0.5) * 0.3,
        p.z
      );
      dummy.scale.setScalar(0.01 + Math.sin(t * 2 + i) * 0.005);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial color="#00ffaa" transparent opacity={0.4} toneMapped={false} />
    </instancedMesh>
  );
}

const MouseScene = () => {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.2 }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.15} />
        <pointLight position={[5, 5, 5]} intensity={0.5} color="#00ffaa" />
        <pointLight position={[-5, -3, 3]} intensity={0.3} color="#aa44ff" />
        <pointLight position={[0, 3, -5]} intensity={0.3} color="#0088ff" />
        <spotLight position={[0, 5, 0]} angle={0.5} penumbra={1} intensity={0.8} color="#ffffff" />
        <Particles />
        <RGBMouseModel />
        <Environment preset="night" />
      </Canvas>
    </div>
  );
};

export default MouseScene;
