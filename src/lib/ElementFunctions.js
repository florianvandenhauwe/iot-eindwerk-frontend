const Elements = {
    clearContainer(container) {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
          }
    },
    toUpper(s) {
        return s.charAt(0).toUpperCase() + s.slice(1);
    }
};

export default Elements;