import { App, Plugin } from 'vue';

import { default as docPage } from './lib-components/LktDocPage.vue';

const LktDocPage: Plugin = {
    install: (app: App) => {
        // Register plugin components
        if (app.component('lkt-doc-page') === undefined) app.component('lkt-doc-page', docPage);
    }
};

export default LktDocPage;