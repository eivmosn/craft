/**
 * @author eivmosn
 * @description navbar tools
 */
import { defineComponent } from "vue";
import Icon from "./Icon";
import { NTooltip } from "naive-ui";

export default defineComponent({
    name: 'Navbar',
    render() {
        return <div class='w-48px min-w-48px b-right b-[var(--x-border)] bg-[var(--x-background-light)] flex items-center flex-col py-18px gap-22px text-#656d76'>
            <NTooltip trigger='hover' placement='right'>
                {{
                    trigger: () => <div class='fc'>
                        <Icon name="components" viewBox={32} />
                    </div>,
                    default: () => 'Components'
                }}
            </NTooltip>
            <NTooltip trigger='hover' placement='right'>
                {{
                    trigger: () => <div class='fc'>
                        <Icon name="json" viewBox={32} />
                    </div>,
                    default: () => 'JSON Schema'
                }}
            </NTooltip>
            <NTooltip trigger='hover' placement='right'>
                {{
                    trigger: () => <div class='fc'>
                        <Icon name="preview" viewBox={32} />
                    </div>,
                    default: () => 'Preview'
                }}
            </NTooltip>
            <NTooltip trigger='hover' placement='right'>
                {{
                    trigger: () => <div class='fc'>
                        <Icon name="helps" />
                    </div>,
                    default: () => 'Helps'
                }}
            </NTooltip>
            <NTooltip trigger='hover' placement='right'>
                {{
                    trigger: () => <div class='fc'>
                        <Icon name="settings" viewBox={32} />
                    </div>,
                    default: () => 'Settings'
                }}
            </NTooltip>
        </div>
    }
})