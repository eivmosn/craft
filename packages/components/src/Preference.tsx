import { NColorPicker, NInput, NMenu, NModal, NTag } from 'naive-ui'
import { defineComponent, ref, type ExtractPropTypes, type PropType } from 'vue'
import { enUs } from "../../designer/src/config";

const preferenceProps = {

}

export type PreferenceProps = ExtractPropTypes<typeof preferenceProps>

export default defineComponent({
    name: 'Preference',
    inheritAttrs: false,
    setup() {
        const visible = ref(false)
        const setVisible = (show: boolean) => visible.value = show
        return {
            visible,
            setVisible
        }
    },
    render() {
        return <NModal v-model:show={this.visible} trapFocus={false}>
            <div class='w-650px h-540px bg-[var(--x-modal)] b-rd-3px relative'>
                <div onClick={() => this.setVisible(false)} class='absolute -right-45px text-#fff cursor-pointer'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                        <path fill="currentColor" d="M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z" />
                    </svg>
                </div>
                <div class='b-bottom h-57px px-16px py-11px b-[var(--x-modal-border)] flex items-center justify-between'>
                    <span class='text-18px'>{enUs.preferences}</span>
                    <NInput class='w-220px! b-rd-8px' placeholder={enUs.search} />
                </div>
                <div class='flex h-[calc(100%-57px)]'>
                    <div class='w-185px b-right b-[var(--x-modal-border)]'>
                        <NMenu options={[
                            {
                                label: enUs.theme,
                                key: 'theme',
                                icon: () => <svg
                                    xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32">
                                    <circle cx="10" cy="12" r="2" fill="currentColor" />
                                    <circle cx="16" cy="9" r="2" fill="currentColor" />
                                    <circle cx="22" cy="12" r="2" fill="currentColor" />
                                    <circle cx="23" cy="18" r="2" fill="currentColor" />
                                    <circle cx="19" cy="23" r="2" fill="currentColor" />
                                    <path fill="currentColor" d="M16.54 2A14 14 0 0 0 2 16a4.82 4.82 0 0 0 6.09 4.65l1.12-.31a3 3 0 0 1 3.79 2.9V27a3 3 0 0 0 3 3a14 14 0 0 0 14-14.54A14.05 14.05 0 0 0 16.54 2Zm8.11 22.31A11.93 11.93 0 0 1 16 28a1 1 0 0 1-1-1v-3.76a5 5 0 0 0-5-5a5.07 5.07 0 0 0-1.33.18l-1.12.31A2.82 2.82 0 0 1 4 16A12 12 0 0 1 16.47 4A12.18 12.18 0 0 1 28 15.53a11.89 11.89 0 0 1-3.35 8.79Z" />
                                </svg>
                            },
                            {
                                label: enUs.language,
                                key: 'language',
                                icon: () => <svg
                                    xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32">
                                    <path fill="currentColor" d="M16 28h-3c-3.9 0-7-3.1-7-7v-4h2v4c0 2.8 2.2 5 5 5h3v2zm12 2h2.2l-4.6-11h-2.2l-4.6 11H21l.8-2h5.3l.9 2zm-5.3-4l1.8-4.4l1.8 4.4h-3.6zM28 15h-2v-4c0-2.8-2.2-5-5-5h-4V4h4c3.9 0 7 3.1 7 7v4zM14 5V3H9V1H7v2H2v2h8.2c-.2.9-.8 2.5-2.2 4c-.6-.7-1.1-1.4-1.4-2H4.3c.4 1 1.1 2.2 2.1 3.3c-.8.7-2 1.3-3.4 1.8l.7 1.9c1.8-.7 3.2-1.5 4.3-2.3c1.1.9 2.5 1.7 4.3 2.3l.7-1.9c-1.4-.5-2.6-1.2-3.5-1.8c1.9-2 2.5-4.1 2.7-5.3H14z" />
                                </svg>
                            },
                            {
                                label: enUs.component,
                                key: 'component',
                                icon: () => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="M27 9h-3V6a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v3H5a3 3 0 0 0-3 3v14a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V12a3 3 0 0 0-3-3ZM10 6h12v3H10Zm18 20H4v-9h8v5h8v-5h8Zm-14-9h4v3h-4ZM4 15v-3a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1v3Z" /></svg>
                            },
                            {
                                label: enUs.hotkey,
                                key: 'hotkey',
                                icon: () => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="M28 26H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2ZM4 10v14h24V10Z" /><path fill="currentColor" d="M10 20h11v2H10zm-4-8h2v2H6zm4 0h2v2h-2zm4 0h2v2h-2zm4 0h2v2h-2zM6 20h2v2H6zm0-4h2v2H6zm4 0h2v2h-2zm4 0h2v2h-2zm8-4h4v2h-4zm0 4h4v2h-4zm-4 0h2v2h-2zm5 4h3v2h-3z" /></svg>
                            },
                            {
                                label: enUs.reset,
                                key: 'reset',
                                icon: () => <svg
                                    xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32">
                                    <circle cx="7" cy="7" r="1" fill="currentColor" />
                                    <circle cx="7" cy="15" r="1" fill="currentColor" />
                                    <circle cx="7" cy="23" r="1" fill="currentColor" />
                                    <path fill="currentColor" d="M12 26H4v-6h8v-2H4v-6h18V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h8ZM4 4h16v6H4Z" />
                                    <path fill="currentColor" d="M28 17v2.413A6.996 6.996 0 1 0 22 30v-2a5 5 0 1 1 4.576-7H24v2h6v-6Z" />
                                </svg>
                            },
                            {
                                label: enUs.contact,
                                key: 'contact',
                                icon: () => <svg
                                    xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32">
                                    <path fill="currentColor" fill-rule="evenodd" d="M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.71 3.71 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2Z" />
                                </svg>
                            },
                        ]} />
                    </div>
                    <div class='flex-1 p-16px'>
                        <div class='grid grid-cols-1 gap-12px'>
                            <div>
                                <span class='font-500'>{enUs.colors}</span>
                                <div class='mt-5px flex items-center gap-8px'>
                                    <NTag>{enUs.light}</NTag>
                                    <NTag>{enUs.dark}</NTag>
                                    <NTag>{enUs.auto}</NTag>
                                </div>
                            </div>
                            <div>
                                <span class='font-500'>{enUs.themecolor}</span>
                                <div class='mt-5px flex items-center gap-8px'>
                                    <NColorPicker defaultValue={null} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </NModal>
    },
})
