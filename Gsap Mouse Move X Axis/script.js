window.addEventListener("mousemove", function(details){
    const colors  = ['red', 'green', 'blue', 'orange']
    const random_colors = colors[Math.floor(Math.random() * 4)];
    var rect = document.getElementById('rect');
    var xval = gsap.utils.mapRange(
        0,
        window.innerWidth,
        100 + rect.getBoundingClientRect().width / 2,
        window.innerWidth - (100 + rect.getBoundingClientRect().width/2),
        details.clientX
    )
    gsap.to('#rect',{
        left: xval ,
        ease: Power3
    })
    gsap.to("#rect", {
        backgroundColor: random_colors,
        duration: 1,
        repeat: -1,
        yoyo: true, 
        ease: 'none'
    })
})