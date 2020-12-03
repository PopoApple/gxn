<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
    </van-swipe>
    <button type="text" @click="valuePopup = true">点击打开抽屉菜单</button>
    <van-popup v-model="valuePopup" position="right" :style="{ height: '100%', width: '200px' }">内容</van-popup>
    <van-dropdown-menu>
      <van-dropdown-item v-model="dropdownItemValue1" :options="dropdownItemOption" />
      <van-dropdown-item v-model="dropdownItemValue2" :options="dropdownItemOption" />
    </van-dropdown-menu>
    <div class="field-wrap">
      <div class="field-mask" @click="onSelectClick"></div>
      <el-input v-model="valueSelect" placeholder="选择器"></el-input>
    </div>
    <van-popup v-model="valueSelectPopup" round position="bottom">
      <van-picker
        show-toolbar
        :columns="['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州']"
        @cancel="valueSelectPopup = false"
        @confirm="onSelectPopupConfirm"
      />
    </van-popup>
    <div class="field-wrap">
      <div class="field-mask" @click="onDatePickerInputClick"></div>
      <el-input v-model="valueDatePickerInput" placeholder="时间选择器"></el-input>
    </div>
    <van-popup v-model="valueDatePickerPopup" round position="bottom">
      <van-datetime-picker
        :value="valueDatePicker"
        type="date"
        title="选择年月日"
        :min-date="minDate"
        :max-date="maxDate"
        @cancel="valueDatePickerPopup = false"
        @confirm="onDatePickerPopupConfirm"
      />
    </van-popup>
    <div class="field-wrap">
      <div class="field-mask" @click="onCascaderClick"></div>
      <el-input v-model="valueCascader" placeholder="级联选择器"></el-input>
    </div>
    <van-popup v-model="valueCascaderPopup" round position="bottom">
      <van-picker show-toolbar title="标题" :columns="cascadercolumns" @cancel="valueCascaderPopup = false" @confirm="onCascaderPopupConfirm"/>
    </van-popup>
  </div>
</template>

<script>
import { Swipe, SwipeItem, Popup, DropdownMenu, DropdownItem, Picker, DatetimePicker  } from 'vant'
import {
  Input
} from 'element-ui'

export default {
    components: {
      VanSwipe: Swipe,
      VanSwipeItem: SwipeItem,
      VanPopup: Popup,
      VanDropdownMenu: DropdownMenu,
      VanDropdownItem: DropdownItem,
      ElInput: Input,
      VanPicker: Picker,
      VanDatetimePicker : DatetimePicker,
    },
  data() {
    return {
      valuePopup: false,
      dropdownItemValue1: 1,
      dropdownItemValue2: 1,
      dropdownItemOption: [
        { text: '选项1', value: 1 },
        { text: '选项2', value: 2 },
      ],
      valueSelect: null,
      valueSelectPopup: false,
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      valueDatePicker: new Date(),
      valueDatePickerPopup: false,
      valueDatePickerInput: null,
      valueCascader: null,
      valueCascaderPopup: false,
      cascadercolumns: [
        {
          text: '浙江',
          children: [
            {
              text: '杭州',
              children: [{ text: '西湖区' }, { text: '余杭区' }],
            },
            {
              text: '温州',
              children: [{ text: '鹿城区' }, { text: '瓯海区' }],
            },
          ],
        },
        {
          text: '福建',
          children: [
            {
              text: '福州',
              children: [{ text: '鼓楼区' }, { text: '台江区' }],
            },
            {
              text: '厦门',
              children: [{ text: '思明区' }, { text: '海沧区' }],
            },
          ],
        },
      ],
    }
  },
  watch: {
    valueDatePicker: {
      immediate: true,
      handler (val) {
        let fullYear = val.getFullYear()
        let month = val.getMonth()
        let date = val.getDate()
        this.valueDatePickerInput = `${fullYear}-${month + 1}-${date}`
      }
    },
  },
  methods: {
    onSelectPopupConfirm(value) {
      this.valueSelect = value
      this.valueSelectPopup = false
    },
    onSelectClick() {
      this.valueSelectPopup = true
    },
    onDatePickerPopupConfirm(value) {
      this.valueDatePicker = value
      this.valueDatePickerPopup = false
    },
    onDatePickerInputClick() {
      this.valueDatePickerPopup = true
    },
    onCascaderPopupConfirm(value) {
      this.valueCascader = value.join('/')
      this.valueCascaderPopup = false
    },
    onCascaderClick() {
      this.valueCascaderPopup = true
    },
  },
}
</script>
<style scoped>
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
  .field-wrap {
    position: relative
  }
  .field-mask {
    position: absolute; left: 0; top: 0; right: 0; bottom: 0; cursor: pointer; z-index: 1;
  }
</style>