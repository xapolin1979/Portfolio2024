gsap.registerPlugin(ScrollTrigger);

gsap.to(".textTitle1", {
    x: -600,
    duration: 1,
    scrollTrigger: {
      trigger: ".textTitle1",
      start: "top",
      end: "bottom -20%",
      toggleActions: "play pause play reverse",
    }
  });

  gsap.to("#guionEnd", {
    x: 600,
    duration: 1,
    scrollTrigger: {
      trigger: ".textTitle1",
      start: "top",
      end: "bottom -20%",
      toggleActions: "play pause play reverse",
    }
  });
  gsap.to(".textTitle3", {
    color:'rgb(119, 119, 119)',
    duration: 1,
    scrollTrigger: {
      trigger: ".textTitle3",
      start: "top 15%",
      end: "bottom -30%",
      toggleActions: "play pause play reverse",
    }
  });
  gsap.to("#scrollDown", {
    y: 20,
    duration: 0.6,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true
  });

  gsap.to(".img1Seccion3  ", {
    x:-1000,
      duration: 1.5,
      scrollTrigger: {
        trigger: "#seccion3",
        start: "top",
        end: "bottom",
        toggleActions: "play pause play reverse",
      }
    });
    gsap.to(".textoSeccion3  ", {
      x:1000,
        duration: 1.5,
        scrollTrigger: {
          trigger: "#seccion3",
          start: "top",
          end: "bottom",
          toggleActions: "play pause play reverse",
        }
      });
  
      gsap.fromTo(
        ".skills",
        {
          opacity: 0, // Inicialmente invisible
          y: 100, // Posición desplazada hacia abajo
        },
        {
          opacity: 1, // Visible
          y: 0, // Posición original
          duration: 1,
          scrollTrigger: {
            trigger: "#Seccion4",
            start: "top center",
            end: "bottom",
            toggleActions: "play pause play reverse",
          }
        }
      );
      
      const container = document.querySelector('.scroll_logos');
      const images = gsap.utils.toArray('.scroll_logos img');
      
      // Duplicar las imágenes para permitir un desplazamiento infinito
      const clone = container.innerHTML;
      container.innerHTML += clone;
      
      gsap.to(container, {
        x: `-=${container.scrollWidth / 2}`, // Desplaza la mitad del contenedor (la primera copia)
        duration: 20, // Ajusta la duración del ciclo
        ease: "none", // Movimiento constante
        repeat: -1, // Repetición infinita
        modifiers: {
          xPercent: gsap.utils.wrap(-100 * images.length, 0) // Conecta el final con el inicio
        }

      });