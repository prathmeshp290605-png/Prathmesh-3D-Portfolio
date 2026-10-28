import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Scene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050a0e, 0.045);

    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
    camera.position.set(0, 0.4, 7.5);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const geometry = new THREE.IcosahedronGeometry(1.55, 1);
    const material = new THREE.MeshStandardMaterial({
      color: 0x062b35, metalness: 0.72, roughness: 0.24,
      wireframe: true, emissive: 0x00e5ff, emissiveIntensity: 0.5
    });
    const core = new THREE.Mesh(geometry, material);
    group.add(core);

    const inner = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.82, 2),
      new THREE.MeshStandardMaterial({
        color: 0x0a1820, metalness: 0.85, roughness: 0.2,
        emissive: 0x00ff9d, emissiveIntensity: 0.42,
        transparent: true, opacity: 0.72
      })
    );
    group.add(inner);

    const ringMaterial = new THREE.MeshBasicMaterial({ color: 0x00ffb3, wireframe: true, transparent: true, opacity: 0.62 });
    const ring1 = new THREE.Mesh(new THREE.TorusGeometry(2.08, 0.012, 8, 120), ringMaterial);
    ring1.rotation.x = 1.1; ring1.rotation.y = 0.4; group.add(ring1);
    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(2.35, 0.008, 8, 120), new THREE.MeshBasicMaterial({ color: 0x00cfff, wireframe: true, transparent: true, opacity: 0.42 }));
    ring2.rotation.x = 0.2; ring2.rotation.y = 1.12; group.add(ring2);

    const particlesGeometry = new THREE.BufferGeometry();
    const count = 900;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 18;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 11;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particles = new THREE.Points(particlesGeometry, new THREE.PointsMaterial({ color: 0x4fffd0, size: 0.018, transparent: true, opacity: 0.72 }));
    scene.add(particles);

    scene.add(new THREE.AmbientLight(0x6feeff, 1.3));
    const light1 = new THREE.PointLight(0x00ffb3, 18, 18); light1.position.set(3, 2, 4); scene.add(light1);
    const light2 = new THREE.PointLight(0x008cff, 14, 18); light2.position.set(-3, -2, 3); scene.add(light2);

    let frame = 0;
    let pointerX = 0, pointerY = 0;
    const onPointer = (e) => {
      const rect = mount.getBoundingClientRect();
      pointerX = ((e.clientX - rect.left) / rect.width - 0.5) * 0.5;
      pointerY = ((e.clientY - rect.top) / rect.height - 0.5) * 0.3;
    };
    mount.addEventListener('pointermove', onPointer);

    const resize = () => {
      const w = mount.clientWidth || 1, h = mount.clientHeight || 1;
      camera.aspect = w / h; camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    const observer = new ResizeObserver(resize);
    observer.observe(mount);

    const animate = () => {
      frame += 0.006;
      group.rotation.y = frame * 0.5 + pointerX;
      group.rotation.x = Math.sin(frame * 0.7) * 0.12 + pointerY;
      core.rotation.z = frame * 0.16;
      inner.rotation.y = -frame * 0.65;
      ring1.rotation.z += 0.0015;
      ring2.rotation.x += 0.001;
      particles.rotation.y = frame * 0.025;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      observer.disconnect();
      mount.removeEventListener('pointermove', onPointer);
      renderer.dispose();
      geometry.dispose(); material.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div className="scene-canvas" ref={mountRef} aria-label="Animated 3D neon geometric object" />;
}