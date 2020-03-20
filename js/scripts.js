Splitting({
    target:"nav h1",
    by:"chars"
    })
    
    console.log("ok");
    
    gsap.timeline()
    
    lightGallery( document.querySelector('.gallery'),{
        mode:'lg-fade',
        backDropDuration: 10
        }  );
        gsap.timeline()
        .from(".me",{
            y:-10000, duration:2
        })
        .from("#right",{
            x:10000,duration:2
        })
        .from("#left",{
            x:-10000,duration:2,
        })
        .to("#form",{
            opacity:0
        })
        .to(".word span:nth-child(even)",{
            opacity:1, duration:1})
        .to(".word span:nth-child(odd)",{
          opacity:1,duration:1});
          
    
        