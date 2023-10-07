export default {
    defaultValue: 'props',
    children: [
        {
            name: 'props',
            label: 'Properties',
            children: [
                {
                    type: 'input',
                    field: 'name',
                    label: 'Name',
                }
            ]
        },
        {
            name: 'form',
            label: 'Form',
            children: [
                {
                    type: 'input',
                    field: 'size',
                    label: 'Size',
                },
                {
                    type: 'input',
                    field: 'labelWidth',
                    label: 'LabelWidth',
                },
                {
                    type: 'input',
                    field: 'labelAlign',
                    label: 'LabelAlign',
                },
                {
                    type: 'input',
                    field: 'labelPlacement',
                    label: 'LabelPlacement',
                },
            ]
        }
    ]
}