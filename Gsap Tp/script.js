// Stagger

// gsap.to("h1", {
//     x: 600, 
//     color: 'red',
//     delay: 1,
//     duration: 1,
//     stagger: 1
// })

// Timeline

var tl = gsap.timeline();

tl.to("h1", {
    x: 100,
})

tl.to("h2", {
    x: 100,
})

tl.to("h3",{
    x: 100
})