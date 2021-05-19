// Default data is added here
// in case not all fields of an effect have been updated in the front-end

const defaultData = {
    delay: {
        delays: 'list((0,0))',
        decays: 'list((0,0))',
        gain_in: 0,
        gain_out: 0,
        parallel: 'False',
    },
    equalizer: {
        db: 0,
        frequency: 2000,
        q: 1,
    },
    phaser: {
        decay: 0,
        delay: 0,
        gain_in: 0,
        gain_out: 0,
        speed: 1,
        triangular: 'False',
    },
    pitch: {
        shift: 0,
    },
    reverb: {
        hf_damping: 50,
        pre_delay: 30,
        reverberance: 100,
        room_scale: 100,
        stereo_depth: 100,
        wet_gain: 2,
        wet_only: 'False'
    },
    tempo: {
        factor: 1,
        opt_flag: 'None',
        overlap: 12,
        search: 15,
        segment: 82,
        use_tree: 'False',
    },
}

export default defaultData;