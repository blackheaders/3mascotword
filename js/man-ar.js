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
let baseFaceWithHair = document.querySelector('#baseFaceWithHair');
const baseFace = document.querySelector('#baseFace');
const dna = document.querySelector('#dna');
const notepad = document.querySelector('#notepad');
const medicineStrip = document.querySelector('#medicineStrip');
const stress = document.querySelector('#stress');
const capsuleGroup = document.querySelector('#capsuleGroup');
const fastFood = document.querySelector('#fastFood');
const burger = document.querySelector('#burger');
const pizza = document.querySelector('#pizza');
const syringe = document.querySelector('#syringe');
const medicineBottle = document.querySelector('#medicineBottle');
const hairTransplant = document.querySelector('#hairTransplant');
const patchLine = document.querySelector('#patchLine');
const patch = document.querySelector('#patch');
const grafting = document.querySelector('#grafting');
const plucking = document.querySelector('#plucking');
const singleHair = document.querySelector('#singleHair');
const hairGrowth = document.querySelector('#hairGrowth');

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
    dna,
    notepad,
    medicineStrip,
    stress,
    capsuleGroup,
    fastFood,
    burger,
    pizza,
    syringe,
    medicineBottle,
    hairTransplant,
    patchLine,
    patch,
    grafting,
    plucking,
    singleHair,
    hairGrowth,
    treatmentsBtn,
    testimonialsBtn,
    infoTextBottom
]

function startAnimationCommonCauses() {

    if (TIMELINE_DETAILS.isAnimationPlaying)
        return


    if (TIMELINE_DETAILS.isStopAnimation)
        return

    audioSource.setAttribute('src', './assets/audio/man/common-causes/maleVO_Man_CommonCauses_Part1_v1.mp3')
    audioElement.load()
    mainScreen.classList.add('hide')
    backBtn.classList.add('show')
    TIMELINE_DETAILS.isAnimationPlaying = true
    TIMELINE_DETAILS.currentAnimationSeq = 1
    audioElement.play()
    baseBlurLayer.setAttribute('animation', 'property: material.opacity; to: .85; dur: 600')
    baseFaceWithHair.setAttribute('animation', 'property: material.opacity; to: 1; dur: 500')
    baseFaceWithHair.setAttribute('animation__1', 'property: scale; to: 1 1 1; dur: 1000')
    baseFace.setAttribute('animation', 'property: material.opacity; to: 1; dur: 500')
    baseFace.setAttribute('animation__1', 'property: scale; to: 1 1 1; dur: 1000')

    // Animating Dna
    TIMEOUTS.push(setTimeout(() => {
        if (TIMELINE_DETAILS.isStopAnimation)
            return

        audioSource.setAttribute('src', './assets/audio/man/common-causes/maleVO_Man_CommonCauses_Part2(heredity)_v1.mp3')
        audioElement.load()
        audioElement.play()

        testVar = dna
        dna.setAttribute('animation', 'property: material.opacity; to: .75; dur: 500')
        infoTextParaBottom.innerHTML = 'Heredity & Genetics'
        infoTextBottom.classList.add('show')

        let animation = { progress: 0 };

        const tween = gsap.timeline(
            {
                repeat: 5,
                onUpdate: function () {
                    dna.setAttribute('sprite-sheet', 'progress', animation.progress);
                },
                onComplete: function () {
                    console.log(testVar, dna);

                }
            }
        );
        tween
            .to(animation,
                {
                    progress: 1,
                    duration: (1 * ANIMATION_DELAY_CONSTANT) / 1000,
                    ease: 'none'
                }
            )

        // tween.start();

    }, 5 * ANIMATION_DELAY_CONSTANT))

    // Remove DNA & Animating Emojis
    TIMEOUTS.push(setTimeout(() => {
        if (TIMELINE_DETAILS.isStopAnimation)
            return

        audioSource.setAttribute('src', './assets/audio/man/common-causes/maleVO_Man_CommonCauses_Part3(Medical)_v1.mp3')
        audioElement.load()
        audioElement.play()
        infoTextParaBottom.innerHTML = 'Medical Conditions'
        dna.setAttribute('animation', 'property: material.opacity; to: 0; dur: 300')

        // Start Animating Notepad & Medicine strip
        notepad.setAttribute('animation', `property: material.opacity; to: 1; delay:500; dur: ${1.25 * ANIMATION_DELAY_CONSTANT}`)
        medicineStrip.setAttribute('animation', `property: material.opacity; to: 1; delay:750; dur: ${1.25 * ANIMATION_DELAY_CONSTANT}`)


    }, 7.7 * ANIMATION_DELAY_CONSTANT))

    // Removing Notepad & Medicine strip, Start Animating stress
    TIMEOUTS.push(setTimeout(() => {

        if (TIMELINE_DETAILS.isStopAnimation)
            return

        infoTextParaBottom.innerHTML = 'Stress'

        // Animate removal of hair
        baseFaceWithHair.setAttribute('animation', 'property: material.opacity; to: 0; dur: 5000')

        notepad.setAttribute('animation', 'property: material.opacity; to: 0; dur: 500')
        medicineStrip.setAttribute('animation', 'property: material.opacity; to: 0; dur: 500')
        TIMEOUTS.push(setTimeout(() => {

            if (TIMELINE_DETAILS.isStopAnimation)
                return
            audioSource.setAttribute('src', './assets/audio/man/common-causes/maleVO_Man_CommonCauses_Part4(Stress)_v1.mp3')
            audioElement.load()
            audioElement.play()

            stress.setAttribute('animation', 'property: material.opacity; to: 1; dur: 500;')
            // Start Animating Stress

            let animation = { progress: 0 };

            const tween = gsap.timeline(
                {
                    repeat: 3,
                    yoyo: true,
                    onUpdate: function () {
                        stress.setAttribute('sprite-sheet', 'progress', animation.progress);
                    },
                }
            );
            tween
                .to(animation,
                    {
                        progress: 1,
                        duration: (2 * ANIMATION_DELAY_CONSTANT) / 1000
                    },
                    "<"
                )

            // tween.start();
        }, 500))

    }, 11.7 * ANIMATION_DELAY_CONSTANT))

    // Start Animating Medicines & Fastfood
    TIMEOUTS.push(setTimeout(() => {

        if (TIMELINE_DETAILS.isStopAnimation)
            return

        // Remove Stress
        stress.setAttribute('animation', `property: material.opacity; to: 0; dur: ${.25 * ANIMATION_DELAY_CONSTANT}`)
        infoTextParaBottom.innerHTML = 'Medication & Nutritional Dificiencies'

        TIMEOUTS.push(setTimeout(() => {

            if (TIMELINE_DETAILS.isStopAnimation)
                return

            // Start Animating Medicines
            capsuleGroup.setAttribute('animation', `property: material.opacity; to: 1; dur: ${.5 * ANIMATION_DELAY_CONSTANT}`)
            // capsuleGroup.setAttribute('animation__1', `property: scale; to: 0.4 0.4 1;delay:300; dur: ${1.5*ANIMATION_DELAY_CONSTANT}`)
            let animation = { progress: 0 };

            const tween = gsap.timeline(
                {
                    onUpdate: function () {
                        capsuleGroup.setAttribute('sprite-sheet', 'progress', animation.progress);
                    },
                }
            );
            tween
                .to(animation,
                    {
                        progress: 1,
                        duration: (2 * ANIMATION_DELAY_CONSTANT) / 1000
                    },
                    "<"
                )

            audioSource.setAttribute('src', './assets/audio/man/common-causes/maleVO_Man_CommonCauses_Part5(Nutrition)_v1.mp3')
            audioElement.load()
            audioElement.play()
            fastFood.setAttribute('animation', `property: material.opacity; to: 1; dur: ${.5 * ANIMATION_DELAY_CONSTANT};easing: easeInOutElastic`)
            fastFood.setAttribute('animation__1', `property: scale; to: 0.9 0.9 1; dur: ${1.5 * ANIMATION_DELAY_CONSTANT};easing: easeInOutElastic`)
            // fastFood.setAttribute('animation__2', `property: position; to: 0.225 -.6 .2; dur: ${1.5*ANIMATION_DELAY_CONSTANT};easing: easeInOutElastic`)

            burger.setAttribute('animation', `property: material.opacity; to: 1;delay:200; dur: ${.5 * ANIMATION_DELAY_CONSTANT};easing: easeInOutElastic`)
            burger.setAttribute('animation__1', `property: scale; to: 0.9 0.9 1;delay:300; dur: ${1.5 * ANIMATION_DELAY_CONSTANT};easing: easeInOutElastic`)
            // burger.setAttribute('animation__2', `property: position; to: 0.245 -.55 .25;delay:300; dur: ${1.5*ANIMATION_DELAY_CONSTANT};easing: easeInOutElastic`)

            pizza.setAttribute('animation', `property: material.opacity; to: 1;delay:400; dur: ${.5 * ANIMATION_DELAY_CONSTANT};easing: easeInOutElastic`)
            pizza.setAttribute('animation__1', `property: scale; to: 0.9 0.9 1;delay:600; dur: ${1.5 * ANIMATION_DELAY_CONSTANT};easing: easeInOutElastic`)
            // pizza.setAttribute('animation__2', `property: position; to: 0.225 -.6 .3;delay:600; dur: ${1.5*ANIMATION_DELAY_CONSTANT};easing: easeInOutElastic`)

        }, 300))


    }, 16 * ANIMATION_DELAY_CONSTANT))

    TIMEOUTS.push(setTimeout(() => {

        if (TIMELINE_DETAILS.isStopAnimation)
            return

        // Remove Medicines
        capsuleGroup.setAttribute('animation', `property: material.opacity; to: 0; dur: ${.25 * ANIMATION_DELAY_CONSTANT}`)
        capsuleGroup.removeAttribute('animation__1')
        pizza.setAttribute('animation', `property: material.opacity; to: 0; dur: ${.25 * ANIMATION_DELAY_CONSTANT}`)
        pizza.removeAttribute('animation__1')
        pizza.removeAttribute('animation__2')
        burger.setAttribute('animation', `property: material.opacity; to: 0; dur: ${.25 * ANIMATION_DELAY_CONSTANT}`)
        burger.removeAttribute('animation__1')
        burger.removeAttribute('animation__2')
        fastFood.setAttribute('animation', `property: material.opacity; to: 0;delay:250; dur: ${.25 * ANIMATION_DELAY_CONSTANT}`)
        fastFood.removeAttribute('animation__1')
        fastFood.removeAttribute('animation__2')
        infoTextParaBottom.innerHTML = 'Struggling with Hair Loss? Find solution'

        TIMEOUTS.push(setTimeout(() => {

            if (TIMELINE_DETAILS.isStopAnimation)
                return

            audioSource.setAttribute('src', './assets/audio/man/common-causes/maleVO_Man_CommonCauses_Part6_v1.mp3')
            audioElement.load()
            audioElement.play()
            treatmentsBtn.classList.add('show-single')

            TIMELINE_DETAILS.isAnimationPlaying = false
            TIMELINE_DETAILS.currentAnimationSeq = 1
        }, 300))
    }, 22 * ANIMATION_DELAY_CONSTANT))
}

function startAnimationTreatments() {

    if (TIMELINE_DETAILS.isAnimationPlaying)
        return

    mainScreen.classList.add('hide')
    backBtn.classList.add('show')
    TIMELINE_DETAILS.isAnimationPlaying = true
    TIMELINE_DETAILS.currentAnimationSeq = 2

    baseBlurLayer.setAttribute('animation', 'property: material.opacity; to: .85; dur: 600')
    baseFaceWithHair.setAttribute('animation__1', 'property: scale; to: 1 1 1; dur: 500')
    baseFace.setAttribute('animation', 'property: material.opacity; to: 1; dur: 500')
    baseFace.setAttribute('animation__1', 'property: scale; to: 1 1 1; dur: 1000')
    treatmentsBtn.classList.remove('show-single')
    audioSource.setAttribute('src', './assets/audio/man/treatments/maleVo_Man_Treatments_Context_v1.mp3')
    audioElement.load()
    audioElement.play()
    infoTextParaBottom.innerHTML = 'Hair Transplant'
    infoTextBottom.classList.add('show')

    // Animate Syringe for PRP
    TIMEOUTS.push(setTimeout(() => {

        if (TIMELINE_DETAILS.isStopAnimation)
            return

        audioSource.setAttribute('src', './assets/audio/man/treatments/maleVO_Man_Treatments_PRP_v1.mp3')
        audioElement.load()
        audioElement.play()
        infoTextParaBottom.innerHTML = 'PRP Therapy'
        syringe.setAttribute('animation', 'property: material.opacity; to: 1; dur: 250')
        medicineBottle.setAttribute('animation', 'property: material.opacity; to: 1; dur: 250')
        syringe.setAttribute('animation__1', 'property: position; to: -.15 0.75 0.05; dur: 1500')
        syringe.setAttribute('animation__2', 'property: rotation; to: 0 0 165; dur: 1500')
        syringe.setAttribute('animation__3', 'property: scale; to: 0.65 0.65 1; dur: 1500')

        let animation = { progress: 0 };

        const tween = gsap.timeline(
            {
                delay: 1.5,
                onUpdate: function () {
                    syringe.setAttribute('sprite-sheet', 'progress', animation.progress);
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

        // tween.start();

    }, 12 * ANIMATION_DELAY_CONSTANT))

    // Remove Old Syringe, re-animate it for GFC
    TIMEOUTS.push(setTimeout(() => {
        if (TIMELINE_DETAILS.isStopAnimation)
            return

        // Animate removal of hair
        // baseFaceWithHair.setAttribute('animation', 'property: material.opacity; to: 1; dur: 4000')

        infoTextParaBottom.innerHTML = 'GFC Treatment'
        syringe.setAttribute('animation', 'property: material.opacity; to: 0; dur: 250')
        audioSource.setAttribute('src', './assets/audio/man/treatments/maleVO_Man_Treatments_GFC_v1.mp3')
        audioElement.load()
        audioElement.play()

        TIMEOUTS.push(setTimeout(() => {
            if (TIMELINE_DETAILS.isStopAnimation)
                return


            syringe.setAttribute('sprite-sheet', 'progress', 0);
            syringe.setAttribute('position', '.3 0.1 0.9')
            syringe.setAttribute('scale', '.8 .8 1')
            syringe.setAttribute('rotation', '0 0 180')
            syringe.setAttribute('animation', 'property: material.opacity; to: 1; dur: 250')
            syringe.setAttribute('animation__2', 'property: rotation; to: 0 0 155; dur: 1500')
            syringe.setAttribute('animation__1', 'property: position; to: .125 0.8 0.05; dur: 1500')
            syringe.setAttribute('animation__3', 'property: scale; to: 0.65 0.65 1; dur: 1500')

            let animation = { progress: 0 };

            const tween = gsap.timeline(
                {
                    onUpdate: function () {
                        syringe.setAttribute('sprite-sheet', 'progress', animation.progress);
                    },
                }
            );
            tween
                .to(animation,
                    {
                        delay: 1.5,
                        progress: 1,
                        duration: (1.5 * ANIMATION_DELAY_CONSTANT) / 1000
                    },
                    "<"
                )
            // tween.start();

        }, 1000))


    }, 23 * ANIMATION_DELAY_CONSTANT))

    // Remove Laser & Add Next Button
    TIMEOUTS.push(setTimeout(() => {
        if (TIMELINE_DETAILS.isStopAnimation)
            return


        infoTextParaBottom.innerHTML = 'Hair Transplant'
        syringe.setAttribute('animation', 'property: material.opacity; to: 0; dur: 250')
        medicineBottle.setAttribute('animation', 'property: material.opacity; to: 0; dur: 250')
        syringe.removeAttribute('animation__1')
        syringe.removeAttribute('animation__2')
        syringe.removeAttribute('animation__3')

        TIMEOUTS.push(setTimeout(() => {
            if (TIMELINE_DETAILS.isStopAnimation)
                return

            audioSource.setAttribute('src', './assets/audio/man/treatments/maleVO_Man_Treatments_HairTransplant_v1.mp3')
            audioElement.load()
            audioElement.play()

            // syringe.object3D.visible = false
            // medicineBottle.object3D.visible = false
            hairTransplant.setAttribute('animation', 'property: material.opacity; to: 1; dur: 250')
            hairTransplant.setAttribute('animation__1', 'property: scale; to: 1 1 1; dur: 1000; easing: easeInOutElastic;')

            let animationPatchLine = { progress: 0 },
                animationPatch = { progress: 0 },
                animationGrafting = { progress: 0 },
                animationHairGrowth = { progress: 0 },
                animationSingleHair = { progress: 0 },
                animationPlucking = { progress: 0 };

            const tweenPatchline = gsap.timeline(
                {
                    repeat: -1,
                    onUpdate: function () {
                        patchLine.setAttribute('sprite-sheet', 'progress', animationPatchLine.progress);
                    },
                }
            );
            tweenPatchline
                .to(animationPatchLine,
                    {
                        progress: 1,
                        duration: (3 * ANIMATION_DELAY_CONSTANT) / 1000
                    },
                    "<"
                ).pause()

            const tweenPatch = gsap.timeline(
                {
                    onUpdate: function () {
                        patch.setAttribute('sprite-sheet', 'progress', animationPatch.progress);
                    },
                }
            );
            tweenPatch
                .to(animationPatch,
                    {
                        delay: 2,
                        progress: 1,
                        duration: (1.5 * ANIMATION_DELAY_CONSTANT) / 1000
                    },
                    "<"
                ).pause()

            const tweenPlucking = gsap.timeline(
                {
                    onUpdate: function () {
                        plucking.setAttribute('sprite-sheet', 'progress', animationPlucking.progress);
                    },
                }
            );
            tweenPlucking
                .to(animationPlucking,
                    {
                        delay: 5,
                        progress: 1,
                        duration: (2 * ANIMATION_DELAY_CONSTANT) / 1000
                    },
                    "<"
                ).pause()

            const tweenGraft = gsap.timeline(
                {
                    onUpdate: function () {
                        grafting.setAttribute('sprite-sheet', 'progress', animationGrafting.progress);
                    },
                }
            );
            tweenGraft
                .to(animationGrafting,
                    {
                        delay: 3,
                        progress: 1,
                        duration: (3 * ANIMATION_DELAY_CONSTANT) / 1000
                    },
                    "<"
                ).pause()

            const tweenSingleHair = gsap.timeline(
                {
                    onUpdate: function () {
                        singleHair.setAttribute('sprite-sheet', 'progress', animationSingleHair.progress);
                    },
                }
            );
            tweenSingleHair
                .to(animationSingleHair,
                    {
                        delay: 5.5,
                        progress: 1,
                        duration: (6 * ANIMATION_DELAY_CONSTANT) / 1000
                    },
                    "<"
                ).pause()

            const tweenHairGrowth = gsap.timeline(
                {
                    onUpdate: function () {
                        hairGrowth.setAttribute('sprite-sheet', 'progress', animationHairGrowth.progress);
                    },
                }
            );
            tweenHairGrowth
                .to(animationHairGrowth,
                    {
                        delay: 8,
                        progress: 1,
                        duration: (2 * ANIMATION_DELAY_CONSTANT) / 1000
                    },
                    "<"
                ).pause()


            patchLine.setAttribute('animation', 'property: material.opacity; to: 1; dur: 250')
            tweenPatch.play()
            patch.setAttribute('animation', 'property: material.opacity; to: 1; dur: 250;delay:1000;')
            tweenPatch.play()
            grafting.setAttribute('animation', 'property: material.opacity; to: 1; dur: 250;delay:2500;')
            tweenGraft.play()
            singleHair.setAttribute('animation', 'property: material.opacity; to: 1; dur: 250;delay:4500;')
            plucking.setAttribute('animation', 'property: material.opacity; to: 1; dur: 250;delay:4500;')
            tweenSingleHair.play()
            tweenPlucking.play()
            hairGrowth.setAttribute('animation', 'property: material.opacity; to: 1; dur: 250;delay:7000;')
            tweenHairGrowth.play()

            setTimeout(() => {
                plucking.setAttribute('animation', 'property: material.opacity; to: 0; dur: 100;delay:0;')
            }, 8000);
            TIMELINE_DETAILS.isAnimationPlaying = false

        }, 300))


    }, 34.5 * ANIMATION_DELAY_CONSTANT))

    // Remove Laser & Add Next Button
    TIMEOUTS.push(setTimeout(() => {
        if (TIMELINE_DETAILS.isStopAnimation)
            return


        hairTransplant.setAttribute('animation', 'property: material.opacity; to: 0; dur: 150;delay:0')
        patchLine.setAttribute('animation', 'property: material.opacity; to: 0; dur: 150;delay:0')
        patch.setAttribute('animation', 'property: material.opacity; to: 0; dur: 150;delay:0')
        plucking.setAttribute('animation', 'property: material.opacity; to: 0; dur: 150;delay:0')
        singleHair.setAttribute('animation', 'property: material.opacity; to: 0; dur: 150;delay:0')
        hairGrowth.setAttribute('animation', 'property: material.opacity; to: 0; dur: 150;delay:0')
        grafting.setAttribute('animation', 'property: material.opacity; to: 0; dur: 150;delay:0')

        TIMEOUTS.push(setTimeout(() => {
            if (TIMELINE_DETAILS.isStopAnimation)
                return

            audioSource.setAttribute('src', './assets/audio/man/treatments/maleVO_Man_Treatments_Other_v1.mp3')
            audioElement.load()
            audioElement.play()
            baseFaceWithHair.setAttribute('animation__1', 'property: material.opacity; to: 1; dur: 1000')
            testimonialsBtn.classList.add('show-single')

            TIMELINE_DETAILS.isAnimationPlaying = false

        }, 300))


    }, 49 * ANIMATION_DELAY_CONSTANT))
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
    document.querySelector('#mainScreen .btn-container').classList.add('show')
    arSystem = sceneEl.systems["mindar-image-system"];
});

function init() {
    // if (sceneEl)
    mainScreen.classList.add('hide')
    backBtn.classList.add('show')
    document.querySelector('#mainScreen .btn-container').classList.remove('show')
    TIMELINE_DETAILS.isStopAnimation = false

    if (TIMELINE_DETAILS.currentAnimationSeq == 3 || TIMELINE_DETAILS.currentAnimationSeq == '3') {
        showTestimonials()
    } else {
        arSystem.start(); // start AR 
        if (!AR_READY) {
            arSystem.start(); // start AR 
        } else {
            arSystem.unpause()
        }
        targetImage.addEventListener("targetFound", startAnimation);
        targetImage.addEventListener("targetLost", resetAnimation);
        // arError event triggered when something went wrong. Mostly browser compatbility issue
        sceneEl.addEventListener("arError", (event) => {
            console.log("MindAR failed to start")
        });
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

function goToAnimation(animationSeq) {

    TIMELINE_DETAILS.currentAnimationSeq = Number(animationSeq)
    init()
}


document.addEventListener('visibilitychange', function () {
    console.log(document.hidden);

    if (document.hidden)
        resetAnimation()
}, false);

window.resetAnimation = resetAnimation
window.startAnimationCommonCauses = startAnimationCommonCauses
window.startAnimationTreatments = startAnimationTreatments
window.showTestimonials = showTestimonials
window.showBeforeAfterImages = showBeforeAfterImages
window.goToAnimation = goToAnimation