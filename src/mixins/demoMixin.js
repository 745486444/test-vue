export default {
    data() {
        return {
            activeName: 'second',
            tabPosition: 'top',
            formInline: {
                user: '',
                region: ''
            },
            list: [],
            desc: '',
            dialogFormVisible: false,
            dialogFormVisible2: false,
            ruleForm: {
                pass: '',
                checkPass: '',
                age: ''
            },
        }
    },
    methods: {
        showDialog() {
            this.dialogFormVisible = true
        },
        showDialog2() {
            this.dialogFormVisible2 = true
        },
        handleClick(tab, event) {
            console.log(tab, event);
        },
    },
}