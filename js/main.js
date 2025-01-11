let sceneEl = null,
    targetImage = null,
    arSystem = null;

const ANIMATION_DELAY_CONSTANT = 1000
const TIMELINE_DETAILS = {
    currentAnimationSeq: 1,
    isAnimationPlaying: false,
    isStopAnimation: false
}
const TIMEOUTS = []
let AR_READY = false

// AR Elements
const baseBlurLayer = document.querySelector('#baseBlurLayer');
const baseFace = document.querySelector('#baseFace');
const dirt = document.querySelector('#dirt');
const smoke = document.querySelector('#smoke');
const pimples = document.querySelector('#pimples');
const emojiSprite_1 = document.querySelector('#emojiSprite_1');
const emojiSprite_2 = document.querySelector('#emojiSprite_2');
const emojiSprite_3 = document.querySelector('#emojiSprite_3');
const capsuleGroup = document.querySelector('#capsuleGroup');
const capsuleGroup1 = document.querySelector('#capsuleGroup1');
const brush = document.querySelector('#brush');
const blush = document.querySelector('#blush');
const eyebrow = document.querySelector('#eyebrow');
const lips = document.querySelector('#lips');
const eyeliner = document.querySelector('#eyeliner');
const lipstick = document.querySelector('#lipstick');
const capsule = document.querySelector('#capsule');
const capsuleParticles = document.querySelector('#capsuleParticles');
const capsuleParticles2 = document.querySelector('#capsuleParticles2');
const faceLotion = document.querySelector('#faceLotion');
const faceMask = document.querySelector('#faceMask');
const facePeel = document.querySelector('#facePeel');
const faceMaskBrush = document.querySelector('#faceMaskBrush');
const laser = document.querySelector('#laser');

// Audio Elements
const audioElement = document.querySelector('#audioElement');
const audioSource = document.querySelector('#audioSource');

// DOM Elements
const mainScreen = document.querySelector('#mainScreen');
const backBtn = document.querySelector('#backBtn');
const testimonialContainer = document.querySelector('#testimonial-container');
const treatmentsBtn = document.querySelector('#treatmentsBtn');
const testimonialsBtn = document.querySelector('#testimonialsBtn');
const infoTextBottom = document.querySelector('#infoText');
const infoTextParaBottom = document.querySelector('#infoText p');

const ALL_ELEMENTS = [
    baseBlurLayer,
    baseFace,
    dirt,
    smoke,
    pimples,
    emojiSprite_1,
    emojiSprite_2,
    emojiSprite_3,
    capsuleGroup,
    capsuleGroup1,
    brush,
    blush,
    eyebrow,
    lips,
    eyeliner,
    lipstick,
    capsule,
    capsuleParticles,
    capsuleParticles2,
    faceLotion,
    faceMask,
    facePeel,
    faceMaskBrush,
    laser
]


function startAnimationCommonCauses() {

    if (TIMELINE_DETAILS.isAnimationPlaying)
        return

    if (TIMELINE_DETAILS.isStopAnimation)
        return

    audioSource.setAttribute('src', './assets/audio/young-lady/common-causes/femaleVO_YoungLady_CommonCauses_CombinedVO_v2.mp3')
    audioElement.load()
    mainScreen.classList.add('hide')
    backBtn.classList.add('show')
    TIMELINE_DETAILS.isAnimationPlaying = true
    TIMELINE_DETAILS.currentAnimationSeq = 1
    baseBlurLayer.setAttribute('animation', 'property: material.opacity; to: .85; dur: 600')
    baseFace.setAttribute('animation', 'property: material.opacity; to: 1; dur: 500')
    baseFace.setAttribute('animation__1', 'property: scale; to: 1 1 1; dur: 1000')
    TIMEOUTS.push(setTimeout(() => {
        audioElement.play()
    }, 1000))
    // Animating dirt
    TIMEOUTS.push(setTimeout(() => {
        if (TIMELINE_DETAILS.isStopAnimation)
            return
        // audioSource.setAttribute('src', './assets/audio/young-lady/common-causes/femaleVO_YoungLady_CommonCauses_Part2(Dirt)_v1.mp3')
        // audioElement.load()
        // audioElement.play()
        smoke.setAttribute('animation', 'property: material.opacity; to: 1; dur: 100')
        dirt.setAttribute('animation', 'property: material.opacity; to: 1; dur: 500;delay:1000;')
        infoTextParaBottom.innerHTML = 'Getting Acne or Have Acne Scars?'
        infoTextBottom.classList.add('show')

        let animation = { progress: 0 };

        const tween = gsap.timeline(
            {
                onUpdate: function () {
                    smoke.setAttribute('sprite-sheet', 'progress', animation.progress);
                },
            }
        );
        tween
            .to(animation,
                {
                    delay: 0.5,
                    progress: 1,
                    duration: (3 * ANIMATION_DELAY_CONSTANT) / 1000
                },
                "<"
            )

        // Start Animating Pimples
        pimples.setAttribute('animation', `property: material.opacity; to: 1; dur: ${2.5 * ANIMATION_DELAY_CONSTANT}`)

    }, 3.6 * ANIMATION_DELAY_CONSTANT))

    // Remove Dirt & Animating Emojis
    TIMEOUTS.push(setTimeout(() => {
        if (TIMELINE_DETAILS.isStopAnimation)
            return
        // audioSource.setAttribute('src', './assets/audio/young-lady/common-causes/femaleVO_YoungLady_CommonCauses_Part3(Hormones)_v1.mp3')
        // audioElement.load()
        // audioElement.play()
        smoke.setAttribute('animation', 'property: material.opacity; to: 0; dur: 1000')
        dirt.setAttribute('animation', 'property: material.opacity; to: 0; dur: 1000;delay:0;')


        emojiSprite_1.setAttribute('animation', `property: material.opacity; to: 1; dur: ${.25 * ANIMATION_DELAY_CONSTANT}`)

        let animationEmoji_1 = { progress: 0 };

        const tweenEmoji_1 = gsap.timeline(
            {
                onUpdate: function () {
                    emojiSprite_1.setAttribute('sprite-sheet', 'progress', animationEmoji_1.progress);
                },
            }
        );
        tweenEmoji_1
            .to(animationEmoji_1,
                {
                    progress: 1,
                    duration: (2 * ANIMATION_DELAY_CONSTANT) / 1000
                },
                "<"
            )

        emojiSprite_2.setAttribute('animation', `property: material.opacity; to: 1; dur: ${.25 * ANIMATION_DELAY_CONSTANT}; delay:.85;`)

        let animationEmoji_2 = { progress: 0 };

        const tweenEmoji_2 = gsap.timeline(
            {
                onUpdate: function () {
                    emojiSprite_2.setAttribute('sprite-sheet', 'progress', animationEmoji_2.progress);
                },
            }
        );
        tweenEmoji_2
            .to(animationEmoji_2,
                {
                    delay: .75,
                    progress: 1,
                    duration: (2 * ANIMATION_DELAY_CONSTANT) / 1000
                },
                "<"
            )

        emojiSprite_3.setAttribute('animation', `property: material.opacity; to: 1; dur: ${.25 * ANIMATION_DELAY_CONSTANT}; delay:1.6;`)

        let animationEmoji_3 = { progress: 0 };

        const tweenEmoji_3 = gsap.timeline(
            {
                onUpdate: function () {
                    emojiSprite_3.setAttribute('sprite-sheet', 'progress', animationEmoji_3.progress);
                },
            }
        );
        tweenEmoji_3
            .to(animationEmoji_3,
                {
                    delay: 1.5,
                    progress: 1,
                    duration: (2 * ANIMATION_DELAY_CONSTANT) / 1000
                },
                "<"
            )

        TIMEOUTS.push(setTimeout(() => {
            emojiSprite_1.setAttribute('animation__1', `property: material.opacity; to: 0; dur: ${.5 * ANIMATION_DELAY_CONSTANT}`)
            emojiSprite_2.setAttribute('animation__1', `property: material.opacity; to: 0; dur: ${.5 * ANIMATION_DELAY_CONSTANT}`)
            emojiSprite_3.setAttribute('animation__1', `property: material.opacity; to: 0; dur: ${.5 * ANIMATION_DELAY_CONSTANT}`)
        }, 2300))

    }, 7 * ANIMATION_DELAY_CONSTANT))

    // Removing Emojis, Start Animating Pimple & Start Animation Cosmetics
    TIMEOUTS.push(setTimeout(() => {
        if (TIMELINE_DETAILS.isStopAnimation)
            return
        // audioSource.setAttribute('src', './assets/audio/young-lady/common-causes/femaleVO_YoungLady_CommonCauses_Part4(Cosmetics)_v1.mp3')
        // audioElement.load()
        // audioElement.play()

        // Remove emojis
        // emojiSprite_1.setAttribute('animation', `property: material.opacity; to: 0; dur: ${.25 * ANIMATION_DELAY_CONSTANT}`)

        // emojiSprite_2.setAttribute('animation', `property: material.opacity; to: 0; dur: ${.25 * ANIMATION_DELAY_CONSTANT}`)

        // emojiSprite_3.setAttribute('animation', `property: material.opacity; to: 0; dur: ${.25 * ANIMATION_DELAY_CONSTANT}`)

        // Start Animating Cosmetics
        brush.setAttribute('animation', `property: material.opacity; to: 1; delay: 300; dur: ${.25 * ANIMATION_DELAY_CONSTANT}`)
        brush.setAttribute('animation__1', `property: position; to: -0.2 -0.06 0.2; loop:true; dir: alternate; dur: ${1.7 * ANIMATION_DELAY_CONSTANT};delay:50;`)

        blush.setAttribute('animation', `property: material.opacity; to: 1; delay: 300; dur: ${1 * ANIMATION_DELAY_CONSTANT};delay:1000;`)

        lipstick.setAttribute('animation', `property: material.opacity; to: 1; delay: 300; dur: ${.25 * ANIMATION_DELAY_CONSTANT}`)
        lipstick.setAttribute('animation__1', `property: position; to: -0.1 -.2 0.25; loop:true; dir: alternate; dur: ${2 * ANIMATION_DELAY_CONSTANT};delay:350;`)

        lips.setAttribute('animation', `property: material.opacity; to: 1; delay: 300; dur: ${1 * ANIMATION_DELAY_CONSTANT};delay:1250;`)

        eyeliner.setAttribute('animation', `property: material.opacity; to: 1; delay: 300; dur: ${.25 * ANIMATION_DELAY_CONSTANT}`)
        eyeliner.setAttribute('animation__1', `property: position; to: 0.37 .325 0.225; loop:true; dir: alternate; dur: ${1 * ANIMATION_DELAY_CONSTANT};delay:0;`)

        eyebrow.setAttribute('animation', `property: material.opacity; to: 1; delay: 300; dur: ${1 * ANIMATION_DELAY_CONSTANT};delay:1250;`)

    }, 10.2 * ANIMATION_DELAY_CONSTANT))

    // Start Animating Medicines
    TIMEOUTS.push(setTimeout(() => {
        // audioSource.setAttribute('src', './assets/audio/young-lady/common-causes/femaleVO_YoungLady_CommonCauses_Part5(Medications)_v1.mp3')
        // audioElement.load()
        // audioElement.play()

        // Remove Cosmetics
        brush.setAttribute('animation', `property: material.opacity; to: 0; dur: ${.5 * ANIMATION_DELAY_CONSTANT}`)
        blush.setAttribute('animation', `property: material.opacity; to: 0; dur: ${.5 * ANIMATION_DELAY_CONSTANT}`)
        brush.removeAttribute('animation__1')

        lipstick.setAttribute('animation', `property: material.opacity; to: 0; dur: ${.5 * ANIMATION_DELAY_CONSTANT}`)
        lips.setAttribute('animation', `property: material.opacity; to: 0; dur: ${.5 * ANIMATION_DELAY_CONSTANT}`)
        lipstick.removeAttribute('animation__1')

        eyeliner.setAttribute('animation', `property: material.opacity; to: 0; dur: ${.5 * ANIMATION_DELAY_CONSTANT}`)
        eyebrow.setAttribute('animation', `property: material.opacity; to: 0; dur: ${.5 * ANIMATION_DELAY_CONSTANT}`)
        eyeliner.removeAttribute('animation__1')

        TIMEOUTS.push(setTimeout(() => {
            
            // Start Animating Medicines
            capsuleGroup.setAttribute('position', '0 .2 1')
            capsuleGroup.setAttribute('animation', `property: material.opacity; to: 1; delay:800; dur: ${.3 * ANIMATION_DELAY_CONSTANT}`)
            capsuleGroup.setAttribute('animation__1', `property: position; to: 0 -.1 1; delay:1200; dur: ${.75 * ANIMATION_DELAY_CONSTANT}`)
            // capsuleGroup.setAttribute('animation__1', `property: scale; to: 0.4 0.4 1;delay:300; dur: ${1.5 * ANIMATION_DELAY_CONSTANT}`)
    
            let animationCapsuleGroup = { progress: 0 };
    
            const tweenCapsuleGroup = gsap.timeline(
                {
                    onUpdate: function () {
                        capsuleGroup.setAttribute('sprite-sheet', 'progress', animationCapsuleGroup.progress);
                    },
                }
            );
            tweenCapsuleGroup
                .to(animationCapsuleGroup,
                    {
                        delay: 1.25,
                        progress: 1,
                        duration: (1.5 * ANIMATION_DELAY_CONSTANT) / 1000
                    },
                    "<"
                )
            capsuleGroup1.setAttribute('animation', `property: material.opacity; to: 1;delay:2000; dur: ${.1 * ANIMATION_DELAY_CONSTANT}`)
            capsuleGroup.setAttribute('animation__2', `property: material.opacity; to: 0;delay:2000; dur: ${.1 * ANIMATION_DELAY_CONSTANT}`)
            // capsuleGroup.setAttribute('animation__1', `property: scale; to: 0.4 0.4 1;delay:300; dur: ${1.5 * ANIMATION_DELAY_CONSTANT}`)
    
            let animationCapsuleGroup1 = { progress: 0 };
    
            const tweenCapsuleGroup1 = gsap.timeline(
                {
                    onUpdate: function () {
                        capsuleGroup1.setAttribute('sprite-sheet', 'progress', animationCapsuleGroup1.progress);
                    },
                }
            );
            tweenCapsuleGroup1
                .to(animationCapsuleGroup1,
                    {
                        delay: 2.05,
                        progress: 1,
                        duration: (1.25 * ANIMATION_DELAY_CONSTANT) / 1000
                    },
                    "<"
                )
        }, 1200))

    }, 15.7 * ANIMATION_DELAY_CONSTANT))

    TIMEOUTS.push(setTimeout(() => {
        // audioSource.setAttribute('src', './assets/audio/young-lady/common-causes/femaleVO_YoungLady_CommonCauses_Part6_v1.mp3')
        // audioElement.load()
        // audioElement.play()
        // Remove Medicines
        capsuleGroup.setAttribute('animation', `property: material.opacity; to: 0; dur: ${.75 * ANIMATION_DELAY_CONSTANT}`)
        capsuleGroup1.setAttribute('animation', `property: material.opacity; to: 0; dur: ${.75 * ANIMATION_DELAY_CONSTANT}`)
        capsuleGroup.removeAttribute('animation__1')
        capsuleGroup.removeAttribute('animation__2')

        treatmentsBtn.classList.add('show-single')
        TIMELINE_DETAILS.isAnimationPlaying = false
        TIMELINE_DETAILS.currentAnimationSeq = 1
    }, 22.8 * ANIMATION_DELAY_CONSTANT))
}

function startAnimationTreatments() {

    if (TIMELINE_DETAILS.isAnimationPlaying)
        return

    mainScreen.classList.add('hide')
    backBtn.classList.add('show')
    TIMELINE_DETAILS.isAnimationPlaying = true
    TIMELINE_DETAILS.currentAnimationSeq = 2
    audioSource.setAttribute('src', './assets/audio/young-lady/treatments/femaleVO_YoungLady_Treatment_Overview_v2.mp3')
    audioElement.load()
    audioElement.play()
    baseBlurLayer.setAttribute('animation', 'property: material.opacity; to: .85; dur: 600')
    baseFace.setAttribute('animation', 'property: material.opacity; to: 1; dur: 500')
    baseFace.setAttribute('animation__1', 'property: scale; to: 1 1 1; dur: 1000')
    pimples.setAttribute('animation', 'property: material.opacity; to: 1; dur: 2000;delay:2500;')

    treatmentsBtn.classList.remove('show-single')
    // Start Animating Capsule & Lotion
    TIMEOUTS.push(setTimeout(() => {
        if (TIMELINE_DETAILS.isStopAnimation)
            return

        audioSource.setAttribute('src', './assets/audio/young-lady/treatments/femaleVO_YoungLady_Treatment_Topical_Antibiotics_v1.mp3')
        audioElement.load()
        audioElement.play()
        infoTextParaBottom.innerHTML = 'Topical and antibiotics'
        infoTextBottom.classList.add('show')

        TIMEOUTS.push(setTimeout(() => {

            faceLotion.setAttribute('animation', 'property: material.opacity; to: 1; dur: 100')
            // faceLotion.setAttribute('animation__1', 'property: scale; to: 1 1 1; dur: 500')

            let animationLotion = { progress: 0 };

            const tweenLotion = gsap.timeline(
                {
                    onUpdate: function () {
                        faceLotion.setAttribute('sprite-sheet', 'progress', animationLotion.progress);
                    },
                }
            );
            tweenLotion
                .to(animationLotion,
                    {
                        progress: 1,
                        duration: (2 * ANIMATION_DELAY_CONSTANT) / 1000
                    },
                    "<"
                )

            let animation = { progress: 0 };

            const tween = gsap.timeline(
                {
                    onUpdate: function () {
                        capsule.setAttribute('sprite-sheet', 'progress', animation.progress);
                    },
                }
            );
            tween
                .fromTo(animation,
                    {
                        progress: 0
                    },
                    {
                        delay: 4.25,
                        progress: 1,
                        duration: (2 * ANIMATION_DELAY_CONSTANT) / 1000
                    },
                    "<"
                ).pause()

            let animation2 = { progress: 0 };

            const tween2 = gsap.timeline(
                {
                    onUpdate: function () {
                        capsuleParticles.setAttribute('sprite-sheet', 'progress', animation2.progress);
                    },
                }
            );
            tween2
                .to(animation2,
                    {
                        delay: 4.7,
                        repeat: 2,
                        repeatDelay: 0,
                        progress: 1,
                        duration: (1.5 * ANIMATION_DELAY_CONSTANT) / 1000
                    },
                    "<"
                ).pause()

            let animation3 = { progress: 0 };
            const tween3 = gsap.timeline(
                {
                    onUpdate: function () {
                        capsuleParticles2.setAttribute('sprite-sheet', 'progress', animation3.progress);
                    },
                }
            );
            tween3
                .to(animation3,
                    {
                        delay: 5.25,
                        repeat: 2,
                        repeatDelay: 0,
                        progress: 1,
                        duration: (1.5 * ANIMATION_DELAY_CONSTANT) / 1000
                    },
                    "<"
                ).pause()

            capsule.setAttribute('position', '0 0.3 .2')
            capsule.setAttribute('animation', 'property: material.opacity; to: 1; dur: 250; delay:4000;')
            capsule.setAttribute('animation__1', 'property: position; to: 0 0.7 .2; dur: 500; delay: 4000;')
            tween.play()
            capsuleParticles.setAttribute('animation', 'property: material.opacity; to: 1; dur: 250; delay:5250;')
            capsuleParticles2.setAttribute('animation', 'property: material.opacity; to: 1; dur: 250; delay:5500;')
            tween2.play()
            tween3.play()

            TIMEOUTS.push(setTimeout(() => {
                faceLotion.setAttribute('animation__1', 'property: material.opacity; to: 0; dur: 1000;')
            }, 6000))

            TIMEOUTS.push(setTimeout(() => {
                capsuleParticles.setAttribute('animation__1', 'property: material.opacity; to: 0; dur: 1000;')
                capsuleParticles2.setAttribute('animation__1', 'property: material.opacity; to: 0; dur: 1000;')
            }, 7500))

            TIMEOUTS.push(setTimeout(() => {

                let animationRev = { progress: 0 };

                const tweenRev = gsap.timeline(
                    {
                        onUpdate: function () {
                            capsule.setAttribute('sprite-sheet', 'progress', animationRev.progress);
                            console.log(animationRev.progress);

                        },
                    }
                );
                tweenRev
                    .fromTo(animationRev,
                        {
                            progress: 1
                        },
                        {
                            progress: 0,
                            duration: (1 * ANIMATION_DELAY_CONSTANT) / 1000
                        },
                        "<"
                    ).pause()

                tweenRev.play()
                capsule.setAttribute('animation__3', 'property: material.opacity; to: 0; dur: 1000;')
                capsule.setAttribute('animation__4', 'property: position; to: 0 1 .2; dur: 1000;')
            }, 8000))
        }, 1600))

    }, 9 * ANIMATION_DELAY_CONSTANT))

    // Remove Capsule, Lotion & Start Animating Face Mask
    TIMEOUTS.push(setTimeout(() => {
        if (TIMELINE_DETAILS.isStopAnimation)
            return

        audioSource.setAttribute('src', './assets/audio/young-lady/treatments/femaleVO_YoungLady_Treatment_ChemicalPeels_v1.mp3')
        audioElement.load()
        audioElement.play()
        infoTextParaBottom.innerHTML = 'Chemical peels'

        TIMEOUTS.push(setTimeout(() => {
            faceMaskBrush.setAttribute('position', '-0.05 0.4 0.01')
            faceMaskBrush.setAttribute('animation', 'property: material.opacity; to: 1; dur: 250')
            faceMaskBrush.setAttribute('animation__1', 'property: position; to: 0.5 0.4 0.011; dur: 1000; delay:250;')
            faceMaskBrush.setAttribute('animation__2', 'property: position; from: 0.5 0.4 0.011; to: -0.1 0.115 0.011; dur: 250; delay:1200;')
            facePeel.setAttribute('animation', 'property: material.opacity; to: .75; dur: 1000; delay: 500;')
            faceMaskBrush.setAttribute('animation__3', 'property: position; from: -0.1 0.115 0.011; to: 0.6 0.115 0.011; dur: 1000; delay:1500;')
            faceMaskBrush.setAttribute('animation__4', 'property: material.opacity; to: 0; dur: 250; delay: 2500')
            faceMask.setAttribute('animation', 'property: material.opacity; to: .75; dur: 1000; delay: 2200;')
        }, 1000))

    }, 21.5 * ANIMATION_DELAY_CONSTANT))

    // Remove Face Mask & Start Animating Laser
    TIMEOUTS.push(setTimeout(() => {
        if (TIMELINE_DETAILS.isStopAnimation)
            return

        audioSource.setAttribute('src', './assets/audio/young-lady/treatments/femaleVO_YoungLady_Treatment_Laser_v1.mp3')
        audioElement.load()
        audioElement.play()
        pimples.setAttribute('animation', 'property: material.opacity; to: 0; dur: 4000')

        faceMaskBrush.removeAttribute('animation')
        faceMaskBrush.removeAttribute('animation__1')
        faceMaskBrush.removeAttribute('animation__2')
        faceMaskBrush.removeAttribute('animation__3')
        faceMaskBrush.removeAttribute('animation__4')
        facePeel.setAttribute('animation', 'property: material.opacity; to: 0; dur: 500; delay:0;')
        faceMask.setAttribute('animation', 'property: material.opacity; to: 0; dur: 500; delay:0;')

        laser.setAttribute('animation', 'property: material.opacity; to: 1; dur: 500')
        infoTextParaBottom.innerHTML = 'Laser resurfacing & Microdermabrasion'

        let animation = { progress: 0 };

        const tween = gsap.timeline(
            {
                repeat: -1,
                onUpdate: function () {
                    laser.setAttribute('sprite-sheet', 'progress', animation.progress);
                },
            }
        );
        tween
            .to(animation,
                {
                    progress: 1,
                    duration: (1.5 * ANIMATION_DELAY_CONSTANT) / 1000
                },
                "<"
            )

        laser.setAttribute('animation__1', 'property: position; to: .23 0.33 0.1; dur: 1000;easing: easeInQuad;')
        laser.setAttribute('animation__2', 'property: position;from: .23 0.33 0.1; to: 0.25 0 0.1;delay:2000; dur: 1000;easing: easeInQuad;')
        laser.setAttribute('animation__3', 'property: position;from: 0.25 0 0.1; to: 0 -0.03 0.1;delay:4000; dur: 1000;easing: easeInQuad;')

        TIMEOUTS.push(setTimeout(() => {
            laser.setAttribute('animation__4', 'property: material.opacity; to: 0; dur: 1000;delay:0')
        }, 5700))

    }, 30.5 * ANIMATION_DELAY_CONSTANT))

    // Remove Laser & Add Next Button
    TIMEOUTS.push(setTimeout(() => {
        if (TIMELINE_DETAILS.isStopAnimation)
            return

        laser.removeAttribute('animation')
        laser.removeAttribute('animation__1')
        laser.removeAttribute('animation__2')
        laser.removeAttribute('animation__3')
        laser.removeAttribute('animation__4')
        testimonialsBtn.classList.add('show-single')
        TIMELINE_DETAILS.isAnimationPlaying = false
        TIMELINE_DETAILS.currentAnimationSeq = 1

    }, 40.5 * ANIMATION_DELAY_CONSTANT))
}

function showTestimonials() {
    if (TIMELINE_DETAILS.isAnimationPlaying)
        return

    audioElement.pause();
    audioElement.currentTime = 0;
    mainScreen.classList.add('hide')
    backBtn.classList.add('show')
    TIMELINE_DETAILS.isAnimationPlaying = false
    TIMELINE_DETAILS.currentAnimationSeq = 3

    testimonialContainer.classList.add('show')
}

function showBeforeAfterImages() {
    if (TIMELINE_DETAILS.isAnimationPlaying)
        return

    TIMELINE_DETAILS.currentAnimationSeq = 3
    TIMELINE_DETAILS.isAnimationPlaying = false

    document.querySelector('#info-container').classList.remove('show')
    document.querySelector('#testimonial-image-container').classList.add('show')
}

function startAnimation() {
    AR_READY = true
    console.log('start animation');
    if (testimonialContainer.classList.contains('show'))
        testimonialContainer.classList.remove('show')

    switch (TIMELINE_DETAILS.currentAnimationSeq) {
        case 1:
            startAnimationCommonCauses()
            break;
        case 2:
            startAnimationTreatments()
            break;
        case 3:
            showTestimonials()
            break;

        default:
            break;
    }
}

function goBack() {
    resetAnimation()
    arSystem.pause();
    TIMELINE_DETAILS.isStopAnimation = true
    infoTextBottom.classList.remove('show')
    mainScreen.classList.remove('hide')
    backBtn.classList.remove('show')
    testimonialContainer.classList.remove('show')
    document.querySelector('#mainScreen .btn-container').classList.add('show')
}

function resetAnimation() {
    // TIMELINE_DETAILS.currentAnimationSeq = 1
    TIMELINE_DETAILS.isAnimationPlaying = false
    for (var i = 0; i < TIMEOUTS.length; i++) {
        clearTimeout(TIMEOUTS[i]);
    }

    audioElement.pause();
    audioElement.currentTime = 0;
    treatmentsBtn.classList.remove('show-single')
    testimonialsBtn.classList.remove('show-single')

    ALL_ELEMENTS.forEach(element => {

        if (element.getAttribute('animation'))
            element.removeAttribute('animation')

        if (element.getAttribute('animation__1'))
            element.removeAttribute('animation__1')

        if (element.getAttribute('animation__2'))
            element.removeAttribute('animation__2')

        if (element.getAttribute('animation__3'))
            element.removeAttribute('animation__3')

        if (element.getAttribute('animation__4'))
            element.removeAttribute('animation__4')

        if (element.getAttribute('animation__5'))
            element.removeAttribute('animation__5')

        if (element.classList.contains('show'))
            element.classList.remove('show')

        if (element.classList.contains('show-single'))
            element.classList.remove('show-single')

        if (element.getAttribute('material'))
            element.setAttribute('material', 'opacity', 0);

        if (element.getAttribute('sprite-sheet'))
            element.setAttribute('sprite-sheet', 'progress', 0);
    });
}

sceneEl = document.querySelector('a-scene');
targetImage = document.querySelector('#targetImage');

sceneEl.addEventListener("arReady", (event) => {
    console.log("MindAR is ready")
});
sceneEl.addEventListener('loaded', function () {
    arSystem = sceneEl.systems["mindar-image-system"];
    document.querySelector('#mainScreen .btn-container').classList.add('show')
});


function init() {
    // if (sceneEl)
    mainScreen.classList.add('hide')
    backBtn.classList.add('show')
    document.querySelector('#mainScreen .btn-container').classList.remove('show')
    TIMELINE_DETAILS.isStopAnimation = false

    if (TIMELINE_DETAILS.currentAnimationSeq == 3 || TIMELINE_DETAILS.currentAnimationSeq == '3') {
        TIMELINE_DETAILS.isStopAnimation = false
        showTestimonials()
    } else {
        if (!AR_READY) {
            arSystem.start(); // start AR 
        } else {
            arSystem.unpause()
        }
        targetImage.addEventListener("targetLost", resetAnimation);
        targetImage.addEventListener("targetFound", startAnimation);
        // arError event triggered when something went wrong. Mostly browser compatbility issue
        sceneEl.addEventListener("arError", (event) => {
            console.log("MindAR failed to start")
        });
    }

}

function goToAnimation(animationSeq) {

    TIMELINE_DETAILS.currentAnimationSeq = Number(animationSeq)
    console.log(animationSeq, TIMELINE_DETAILS.currentAnimationSeq);
    init()
}

document.addEventListener('visibilitychange', function () {
    console.log(document.hidden);
    
    if(document.hidden)
        resetAnimation()
}, false);

window.resetAnimation = resetAnimation
window.startAnimationCommonCauses = startAnimationCommonCauses
window.startAnimationTreatments = startAnimationTreatments
window.showTestimonials = showTestimonials
window.showBeforeAfterImages = showBeforeAfterImages
window.goToAnimation = goToAnimation

