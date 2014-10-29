/**
 * Created by Badar on 10/27/2014.
 */
bootCamp.factory('Duration', function ($timeout) {
    var eachTick = 1000;
    var isRunning = false;
    var data = {
            value: 0,
            minutes: '',
            seconds: '',
            hours: 0
        },

        stopwatch = null;
    var setTime = function (minutes) {
        data.value = minutes * 60;
        data.time = data.value;


    };
    var start = function () {
        if (isRunning === false) {
            increment();
            isRunning = true;
        }
    };
    var addStart = function () {
        if (isRunning === false) {
            decrement();
            isRunning = true;
        }
    };
    var increment = function () {
        stopwatch = $timeout(function () {
            data.value++;
            updateClock()
            increment();
            if (data.minutes == 60) {
                data.minutes = 0;
                data.hours++
            }
            if (data.value == 0) {
                stop();
            }

        }, eachTick);

    };
    var decrement = function () {
        stopwatch = $timeout(function () {
            data.value--;
            updateClock();
            decrement();
            if (data.value == 0) {
                stop();
            }

        }, eachTick);

    };
    var updateClock = function () {
        data.minutes = (data.value - (data.value % 60)) / 60;
        data.seconds = data.value % 60;
    }


    var stop = function () {
        $timeout.cancel(stopwatch);
        stopwatch = null;
        isRunning = false;
    };

    var reset = function () {
        stop();
        data.value = 0;
        updateClock();
        isRunning = false;
    };
    var getDuration = function () {
        return data;
    };
    return{
        data: data,
        start: start,
        stop: stop,
        reset: reset,
        setTime: setTime,
        getDuration: getDuration,
        addStart: addStart
    };
});