import Vue from 'vue'
import {
  Input, Select, Option, Checkbox, Radio, DatePicker, Cascader, Form, FormItem, Tabs, TabPane, Dialog, Pagination, Steps, Step, Carousel, CarouselItem, Breadcrumb, BreadcrumbItem
} from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'

const components = [
  Input, Select, Option, Checkbox, Radio, DatePicker, Cascader, Form, FormItem, Tabs, TabPane, Dialog, Pagination, Steps, Step, Carousel, CarouselItem, Breadcrumb, BreadcrumbItem
]

const Element = {
  install (Vue) {
    components.forEach(component => {
      Vue.component(component.name, component)
    })
  }
}

Vue.use(Element, { locale })