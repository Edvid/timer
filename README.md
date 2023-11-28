# A simple timer with URL parameters for settings

A simple timer that uses URL parameters to change settings, making 
them easily bookmarkable.

# Motivation

I have used other online timers for cooking before, but I had a list
of features I missed:

- If the alarm was missed, how much have I missed it by?
- The alarm starts immedietly as I load the page. I want to only have to click the bookmark. I can reload the page if I want it reset.

# How to use

`https://edvid.github.io/timer/?t=`your-time-here

pass in a number at the `t` parameter, and it will set the timer in seconds and start.
pass in a string like 1h45s and it will set the timer to 1 hour and 45 seconds and start.
