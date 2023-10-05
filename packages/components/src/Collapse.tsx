import { defineComponent, renderSlot } from "vue"
import { NCollapse, NCollapseItem } from "naive-ui";

export default defineComponent({
    inheritAttrs: false,
    props: {
        title: String,
        border: Boolean,
        name: [String, Number],
    },
    render() {
        return <NCollapse
            displayDirective="show"
            defaultExpandedNames={[this.name]}
        >
            <NCollapseItem
                v-slots={{
                    header: () => <div class='w-full fb min-h-22px'>
                        <span>{this.title}</span>
                    </div>
                }}
                name={this.name}
                class={['collapse-item', this.border && 'border-top']}
                displayDirective="show"
            >
                <div class='bg-[--form-content] p-4px'>
                    {renderSlot(this.$slots, 'default')}
                </div>
            </NCollapseItem>
        </NCollapse>
    }
})