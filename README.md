# iot-eindwerk-frontend

## Adding new effect
New effects in front-end:
! Make sure variable name is the same as document name in Firestore !

1. Add to array of soundEffects in following dir:
- /src/lib/SoundEffects.js

2. Firestore:
- Make sure every document field is a map (even if it has one field) that starts with a sequencing number followed by an underscore, e.g. 01_name
- The following keys are needed:
    min (number, minimal value, **only required for range slider**)
    max (number, maximal value, **only required for range slider**)
    standard (number, standard value, **only required for range slider**)
    step (number, interval size, **only required for range slider**)
    type (string, "range" or "bool", more options need to be handled by the RenderInput Switch in src/components/Functional/EffectForms.js)
    unit (string, example ms,dB,Hz,x,... , **optional**)
- Words need to be separated with underscores, camelCased variables will not be humanized
    example: 01_example_variable_one

3. Add default object to src/lib/defaultData.js
- Check variable names on Firestore and Python documentation
- write conditional for each effect in src/lib/SoundData.js to be able to send dynamic doc to firestore
