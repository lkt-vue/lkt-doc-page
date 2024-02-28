<script setup lang="ts">

import {getPageNumber} from "../functions/page-number";
import {computed} from "vue";

// Props
const props = withDefaults(defineProps<{
    skipPageNumber?: boolean
    frontPage?: boolean
    size?: 'a0' | 'a1' | 'a2' | 'a3' | 'a4' | 'a5' | 'a6' | 'a7' | 'a8' | 'a9'
    title?: string,
    img?: string,
    icon?: string,
    id?: string,
    palette?: string,
}>(), {
    skipPageNumber: false,
    frontPage: false,
    size: 'a4',
    title: '',
    img: '',
    icon: '',
    id: '',
    palette: '',
});

let page = 0,
    isEven = false;

if (!props.skipPageNumber) {
    page = getPageNumber();
    isEven = page % 2 === 0;
}

const pageClasses = computed(() => {
        let r = [];
        if (isEven) r.push('is-even');
        if (props.frontPage) r.push('is-front-page');
        if (props.size) r.push('is-' + props.size);
        if (props.palette) r.push('palette-' + props.palette);
        return r.join(' ');
    }),
    renderImg = computed(() => {
        return props.img !== ''
            || props.icon !== '';
    });

</script>

<template>
    <div class="lkt-doc-page lkt-break-page" :class="pageClasses">

        <template v-if="frontPage">
            <h1 :id="id" v-if="title">{{ title }}</h1>
            <div v-if="renderImg" class="lkt-doc-page-img">
                <i v-if="icon" :class="icon"></i>
                <img v-if="img" :src="icon" :alt="title"/>
            </div>
            <div class="lkt-page-bottom">
                <slot name="page-bottom"/>
            </div>
        </template>

        <template v-else>
            <slot/>
        </template>

        <div class="lkt-page-footer">
            <div class="lkt-page-number" v-if="!skipPageNumber">{{ page }}</div>
        </div>
    </div>
</template>

<style scoped>
.lkt-doc-page {
    margin: 0 auto 0.5cm;
    box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5);
    position: relative;
    padding: 15mm 15mm 48px;
    background: var(--primary-100);
    display: flex;
    flex-direction: column;
    gap: var(--gap);
    overflow: hidden;
}

.lkt-doc-page.is-front-page {
    justify-content: space-between;
}

.lkt-doc-page.is-a0 {
    width: 84.1cm;
    height: 118.9cm;
}

.lkt-doc-page.is-a1 {
    width: 59.4cm;
    height: 84.1cm;
}

.lkt-doc-page.is-a2 {
    width: 42cm;
    height: 59.4cm;
}

.lkt-doc-page.is-a3 {
    width: 29.7cm;
    height: 42cm;
}

.lkt-doc-page.is-a4 {
    width: 21cm;
    height: 29.7cm;
}

.lkt-doc-page.is-a5 {
    width: 14.8cm;
    height: 21cm;
}

.lkt-doc-page.is-a6 {
    width: 10.5cm;
    height: 14.8cm;
}

.lkt-doc-page.is-a7 {
    width: 74cm;
    height: 10.5cm;
}

.lkt-doc-page.is-a8 {
    width: 52cm;
    height: 74cm;
}

.lkt-doc-page.is-a9 {
    width: 37cm;
    height: 52cm;
}

.lkt-page-number {
    position: absolute;
    bottom: 15px;
    right: 15px;
    width: 40px;
    height: 40px;
    background: var(--primary-500);
    color: var(--primary-100);
    border-radius: 100%;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
}

.lkt-doc-page.is-even .lkt-page-number {
    right: initial;
    left: 15px;
}

.lkt-doc-page h1 {
    font-size: 50px;
    text-align: center;
    border-bottom: none;
    margin-bottom: var(--gap);
}

.lkt-page-bottom {
    text-align: center;
}

@page {
    size: 100%;
    margin: 15mm;
    margin: 0;
}

@media print {
    .lkt-doc-page {
        margin: 0;
        box-shadow: none;
    }

    .lkt-break-page {
        /* page-break-after works, as well */
        page-break-before: always;
    }
}
</style>