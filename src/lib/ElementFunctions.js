const Elements = {
    clearContainer(container) {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    },
    toUpper(s) {
        return s.charAt(0).toUpperCase() + s.slice(1);
    },
    //code from https://www.codegrepper.com/code-examples/javascript/javascript+remove+underscore+and+capitalize
    humanize(str) {
        var i, frags = str.split('_');
        for (i = 0; i < frags.length; i++) {
            frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
        }
        return frags.join(' ');
    },
    humanizeFireStoreVar(str) {
        str = str.substring(3);
        var i, frags = str.split('_');
        for (i = 0; i < frags.length; i++) {
            frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
        }
        return frags.join(' ');
    },
    deleteVarNumber(str) {
        str = str.substring(3);
        return str;
    }
};

export default Elements;