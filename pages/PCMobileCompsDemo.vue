<template>
  <div>
    <el-tabs v-model="valueTabs">
      <el-tab-pane label="标签页1" name="1">标签页1内容</el-tab-pane>
      <el-tab-pane label="标签页2" name="2">标签页2内容</el-tab-pane>
    </el-tabs>
    <button type="text" @click="valueDialog = true">点击打开弹框</button>
    <el-dialog
      title="提示"
      :visible.sync="valueDialog"
      width="30%">
      <span>这是一段信息</span>
    </el-dialog>
    <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
    <el-steps :active="2" align-center>
      <el-step title="步骤1" description="这是一段很长很长很长的描述性文字"></el-step>
      <el-step title="步骤2" description="这是一段很长很长很长的描述性文字"></el-step>
      <el-step title="步骤3" description="这是一段很长很长很长的描述性文字"></el-step>
    </el-steps>
    <el-form>
      <el-form-item label="表单">
        ...
      </el-form-item>
    </el-form>
    <van-button>按钮</van-button>
    <el-input v-model="valueInput" placeholder="单行文本框"></el-input>
    <el-input v-model="valueTextarea" type="textarea" :rows="2" placeholder="多行文本框"></el-input>
    <el-checkbox v-model="valueCheckbox">复选框</el-checkbox>
    <el-radio v-model="valueRadio" label="1">单选框1</el-radio>
    <el-radio v-model="valueRadio" label="2">单选框2</el-radio>
  </div>
</template>

<script>
import {
  Tabs, TabPane, Dialog, Pagination, Steps, Step, Form, FormItem, Input, Select, Option, Checkbox, Radio
} from 'element-ui'
import { Button } from 'vant'

export default {
    components: {
      ElTabs: Tabs,
      ElTabPane: TabPane,
      ElDialog: Dialog,
      ElPagination: Pagination,
      ElSteps: Steps,
      ElStep: Step,
      ElForm: Form,
      ElFormItem: FormItem,
      VanButton: Button,
      ElInput: Input,
      ElCheckbox: Checkbox,
      ElRadio: Radio,
    },
  data() {
    return {
      valueTabs: '1',
      valueDialog: false,
      valueInput: null,
      valueTextarea: null,
      valueSelect: null,
      valueCheckbox: true,
      valueRadio: '1',
      valueInput: null,
      valueTextarea: null,
      valueCheckbox: true,
      valueRadio: '1',
    }
  },
  methods: {
    
  },
}
</script>