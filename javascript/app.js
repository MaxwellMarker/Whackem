let scoreCount = 0;
let gameTimer = 0;
const targetIdsType1Row1 = [
    type1num1 = {
        id: 'type1num1',
        startPosition: 'translate(-15px, 125px) rotate(15deg)',
        endPosition: 'translate(15px, -30px) rotate(15deg)',
        pointValue: 1
    },
    type1num2 = {
        id: 'type1num2',
        startPosition: 'translate(-10px, 125px) rotate(3deg)',
        endPosition: 'translate(0, 5px) rotate(3deg)',
        pointValue: 1
    },
    type1num3 = {
        id: 'type1num3',
        startPosition: 'translate(10px, 125px) rotate(-3deg)',
        endPosition: 'translate(0, 5px) rotate(-3deg)',
        pointValue: 1
    },
    type1num4 = {
        id: 'type1num4',
        startPosition: 'translate(15px, 125px) rotate(-15deg)',
        endPosition: 'translate(-15px, -30px) rotate(-15deg)',
        pointValue: 1
    }
];
const targetIdsType1Row2 = [
    type1num5 = {
        id: 'type1num5',
        startPosition: 'translate(-50px, 125px) rotate(25deg)',
        endPosition: 'translate(25px, -40px) rotate(25deg)',
        pointValue: 1
    },
    type1num6 = {
        id: 'type1num6',
        startPosition: 'translate(0, 125px) rotate(1deg)',
        endPosition: 'translate(0, 0) rotate(1deg)',
        pointValue: 1
    },
    type1num7 = {
        id: 'type1num7',
        startPosition: 'translate(0, 125px) rotate(-1deg)',
        endPosition: 'translate(0, 0) rotate(-1deg)',
        pointValue: 1
    },
    type1num8 = {
        id: 'type1num8',
        startPosition: 'translate(50px, 125px) rotate(-25deg)',
        endPosition: 'translate(-25px, -40px) rotate(-25deg)',
        pointValue: 1
    }
];
const targetIdsType2Row1 = [
    type2num1 = {
        id: 'type2num1',
        startPosition: 'translate(-20px, 100px) rotate(8deg)',
        endPosition: 'translate(0, 0) rotate(8deg)',
        pointValue: 2
    },
    type2num2 = {
        id: 'type2num2',
        startPosition: 'translate(20px, 100px) rotate(-8deg)',
        endPosition: 'translate(0, 0) rotate(-8deg)',
        pointValue: 2
    }
];
const targetIdsType2Row2 = [
    type2num3 = {
        id: 'type2num3',
        startPosition: 'translate(-10px, 0) rotate(35deg)',
        endPosition: 'translate(50px, -90px) rotate(35deg)',
        pointValue: 2
    },
    type2num4 = {
        id: 'type2num4',
        startPosition: 'translate(-20px, 100px) rotate(8deg)',
        endPosition: 'translate(0, 0) rotate(8deg)',
        pointValue: 2
    },
    type2num5 = {
        id: 'type2num5',
        startPosition: 'translate(20px, 100px) rotate(-8deg)',
        endPosition: 'translate(0, 0) rotate(-8deg)',
        pointValue: 2
    },
    type2num6 = {
        id: 'type2num6',
        startPosition: 'translate(10px, 0px) rotate(-35deg)',
        endPosition: 'translate(-50px, -90px) rotate(-35deg)',
        pointValue: 2
    }
];
const targetIdsType2Planet = [
    type2num7 = {
        id: 'type2num7',
        startPosition: 'translate(0, 0) rotate(0deg)',
        endPosition: 'translate(0, 0) rotate(0deg)',
        pointValue: 3
    },
    type2num8 = {
        id: 'type2num8',
        startPosition: 'translate(0, 0) rotate(0deg)',
        endPosition: 'translate(0, 0) rotate(0deg)',
        pointValue: 3
    },
    type2num9 = {
        id: 'type2num9',
        startPosition: 'translate(0, 0) rotate(0deg)',
        endPosition: 'translate(0, 0) rotate(0deg)',
        pointValue: 3
    },
    type2num10 = {
        id: 'type2num10',
        startPosition: 'translate(0, 0) rotate(0deg)',
        endPosition: 'translate(0, 0) rotate(0deg)',
        pointValue: 3
    }
];
const targetIdstype3Row1 = [
    type3num1 = {
        id: 'type3num1',
        startPosition: 'translate(-10px, 0) rotate(25deg)',
        endPosition: 'translate(25px, -75px) rotate(25deg)',
        pointValue: 3
    },
    type3num2 = {
        id: 'type3num2',
        startPosition: 'translate(0, 85px) rotate(0deg)',
        endPosition: 'translate(0, 0) rotate(0deg)',
        pointValue: 3
    },
    type3num3 = {
        id: 'type3num3',
        startPosition: 'translate(10px, 0) rotate(-25deg)',
        endPosition: 'translate(-25px, -75px) rotate(-25deg)',
        pointValue: 3
    }
];
const targetIdstype3Row2 = [
    type3num4 = {
        id: 'type3num4',
        startPosition: 'translate(0, 0) rotate(0deg)',
        endPosition: 'translate(0, 0) rotate(0deg)',
        pointValue: 3
    },
    type3num5 = {
        id: 'type3num5',
        startPosition: 'translate(0, 0) rotate(0deg)',
        endPosition: 'translate(0, 0) rotate(0deg)',
        pointValue: 3
    }
];
$(() => {
    const clickTarget = (event) => {
        const targ = $(event.currentTarget);
        const ident = targ.attr('id');
        targ.off('click', clickTarget);
        targ.css('transform', window[ident].startPosition);
        console.log(window[ident].pointValue)
        scoreCount += window[ident].pointValue;
        $('#scoreCount').text(scoreCount);
        // setTimeout(function () {
        //     targ.on('click', clickTarget);
        // }, 600);
    }
    // const $clickTarget = () => {
    //     $('.target').on('click', clickTarget)
    // }
    // $clickTarget()
    const revealTarget = (targetArray, timeout) => {
        const targetToReveal = targetArray[(Math.floor(Math.random() * targetArray.length))];
        $(`#${targetToReveal.id}`).on('click', clickTarget);
        $(`#${targetToReveal.id}`).css('transform', targetToReveal.endPosition)
        setTimeout(() => {
            $(`#${targetToReveal.id}`).css('transform', targetToReveal.startPosition)
            $(`#${targetToReveal.id}`).off('click', clickTarget);
        }, timeout);
    }
    const startRound = () => {
        gameTimer = 100;
        
        $('.titleWords').text(' ');
        setTimeout(() => {
            $('#lineTwo').text('3');
            $('#lineTwo').css('font-size', '70px');
        }, 1000);
        setTimeout(() => {
            $('#lineTwo').text('2');
        }, 2000);
        setTimeout(() => {
            $('#lineTwo').text('1');
        }, 3000);
        setTimeout(() => {
            $('#lineTwo').css('font-size', '40px');
            $('#lineOne').text('0');
            $('#lineTwo').text('0');
            $('#lineThree').text('0');
        }, 4000);
        setTimeout(() => {
            $('#lineOne').text('00');
            $('#lineTwo').text('00');
            $('#lineThree').text('00');
        }, 4250);
        setTimeout(() => {
            $('#lineOne').text('000');
            $('#lineTwo').text('000');
            $('#lineThree').text('000');
        }, 4500);
        setTimeout(() => {
            $('#lineOne').text('0000');
            $('#lineTwo').text('0000');
            $('#lineThree').text('0000');
        }, 4750);
        setTimeout(() => {
            $('#lineOne').text('WHACK');
        }, 5000);
        setTimeout(() => {
            $('#lineTwo').text('-A-');
        }, 5250);
        setTimeout(() => {
            $('#lineThree').text('MARTIAN');
        }, 5500);
        setTimeout(() => {
            $('.titleWords').text('');
            $('.titleWords').css('font-size', '70px');
        }, 6000);
        setTimeout(() => {
            setInterval(() => {
                $('#lineTwo').text(`${gameTimer}`);
                gameTimer--;
            }, 1000);
        }, 5000);
        setInterval(function () {
            revealTarget(targetIdsType1Row1, 2000);
        }, 5000);
        setTimeout(() => {
            setInterval(function () {
                revealTarget(targetIdsType1Row2, 2000);
            }, 5000); 
        }, 2500);
        setInterval(function () {
            revealTarget(targetIdsType2Row1, 1000);
        }, 5000);
        setInterval(function () {
            revealTarget(targetIdsType2Row2, 1000);
        }, 2000);
    }
    const $startButtonListener = () => {
        $('#startButton').on('click', startRound);
    }
    $startButtonListener();
})