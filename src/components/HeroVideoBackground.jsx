import React, { useEffect, useRef } from 'react';

const HeroVideoBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // AI Neural Network Nodes
    const aiNodes = [];
    const nodeCount = 30;
    
    class AINode {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 3 + 2;
        this.pulsePhase = Math.random() * Math.PI * 2;
        this.color = ['#FF6F00', '#00BCD4', '#4CAF50', '#9C27B0'][Math.floor(Math.random() * 4)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        // Keep within bounds
        this.x = Math.max(0, Math.min(canvas.width, this.x));
        this.y = Math.max(0, Math.min(canvas.height, this.y));

        this.pulsePhase += 0.05;
      }

      draw() {
        const pulse = Math.sin(this.pulsePhase) * 0.5 + 0.5;
        const size = this.radius + pulse * 2;

        // Glow effect
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color;
        
        // Outer glow
        ctx.fillStyle = this.color + '20';
        ctx.beginPath();
        ctx.arc(this.x, this.y, size * 2, 0, Math.PI * 2);
        ctx.fill();

        // Core node
        ctx.fillStyle = this.color + 'CC';
        ctx.beginPath();
        ctx.arc(this.x, this.y, size, 0, Math.PI * 2);
        ctx.fill();

        ctx.shadowBlur = 0;
      }
    }

    // Binary Code Rain (Matrix style)
    const binaryColumns = [];
    const columnCount = Math.floor(canvas.width / 20);
    
    class BinaryColumn {
      constructor(x) {
        this.x = x;
        this.characters = [];
        this.speed = Math.random() * 2 + 1;
        this.initialize();
      }

      initialize() {
        const charCount = Math.floor(Math.random() * 15) + 5;
        for (let i = 0; i < charCount; i++) {
          this.characters.push({
            char: Math.random() > 0.5 ? '1' : '0',
            y: Math.random() * canvas.height - charCount * 20,
            opacity: Math.random()
          });
        }
      }

      update() {
        this.characters.forEach(char => {
          char.y += this.speed;
          if (char.y > canvas.height) {
            char.y = -20;
            char.char = Math.random() > 0.5 ? '1' : '0';
            char.opacity = Math.random();
          }
        });
      }

      draw() {
        ctx.font = '14px monospace';
        this.characters.forEach((char, index) => {
          const isHead = index === this.characters.length - 1;
          if (isHead) {
            ctx.fillStyle = `rgba(255, 111, 0, ${char.opacity * 0.8})`;
            ctx.shadowBlur = 5;
            ctx.shadowColor = '#FF6F00';
          } else {
            ctx.fillStyle = `rgba(255, 111, 0, ${char.opacity * 0.3})`;
            ctx.shadowBlur = 0;
          }
          ctx.fillText(char.char, this.x, char.y);
        });
        ctx.shadowBlur = 0;
      }
    }

    // Circuit Lines
    const circuits = [];
    class Circuit {
      constructor() {
        this.points = [];
        const pointCount = Math.floor(Math.random() * 3) + 2;
        for (let i = 0; i < pointCount; i++) {
          this.points.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height
          });
        }
        this.color = ['#FF6F00', '#00BCD4', '#4CAF50'][Math.floor(Math.random() * 3)];
        this.opacity = Math.random() * 0.15 + 0.05;
      }

      draw() {
        if (this.points.length < 2) return;
        
        ctx.strokeStyle = this.color + Math.floor(this.opacity * 255).toString(16).padStart(2, '0');
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(this.points[0].x, this.points[0].y);
        
        for (let i = 1; i < this.points.length; i++) {
          ctx.lineTo(this.points[i].x, this.points[i].y);
        }
        ctx.stroke();

        // Draw junction points
        this.points.forEach(point => {
          ctx.fillStyle = this.color + '80';
          ctx.beginPath();
          ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
          ctx.fill();
        });
      }
    }

    // Initialize all elements
    for (let i = 0; i < nodeCount; i++) {
      aiNodes.push(new AINode());
    }

    for (let i = 0; i < columnCount; i++) {
      if (Math.random() > 0.7) { // Sparse binary rain
        binaryColumns.push(new BinaryColumn(i * 20 + 10));
      }
    }

    for (let i = 0; i < 15; i++) {
      circuits.push(new Circuit());
    }

    // AI Brain Wave Effect
    let waveOffset = 0;

    const animate = () => {
      // Semi-transparent clear for trail effect
      ctx.fillStyle = 'rgba(255, 250, 245, 0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw circuits (background layer)
      circuits.forEach(circuit => circuit.draw());

      // Draw binary rain
      binaryColumns.forEach(column => {
        column.update();
        column.draw();
      });

      // Draw and connect AI nodes
      aiNodes.forEach((node, i) => {
        node.update();
        node.draw();

        // Draw connections between nearby nodes
        for (let j = i + 1; j < aiNodes.length; j++) {
          const otherNode = aiNodes[j];
          const dx = node.x - otherNode.x;
          const dy = node.y - otherNode.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const opacity = (1 - distance / 150) * 0.3;
            ctx.strokeStyle = `rgba(255, 111, 0, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            ctx.stroke();

            // Data packet traveling along connection
            if (Math.random() > 0.99) {
              const t = Math.random();
              const px = node.x + (otherNode.x - node.x) * t;
              const py = node.y + (otherNode.y - node.y) * t;
              
              ctx.fillStyle = '#00BCD4';
              ctx.shadowBlur = 10;
              ctx.shadowColor = '#00BCD4';
              ctx.beginPath();
              ctx.arc(px, py, 2, 0, Math.PI * 2);
              ctx.fill();
              ctx.shadowBlur = 0;
            }
          }
        }
      });

      // AI Brain Wave visualization at bottom
      waveOffset += 0.02;
      ctx.strokeStyle = 'rgba(255, 111, 0, 0.2)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let x = 0; x < canvas.width; x += 5) {
        const y = canvas.height - 100 + Math.sin(x * 0.01 + waveOffset) * 20 + Math.sin(x * 0.02 + waveOffset * 2) * 10;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ opacity: 0.5 }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-50/40 to-white"></div>
    </div>
  );
};

export default HeroVideoBackground;