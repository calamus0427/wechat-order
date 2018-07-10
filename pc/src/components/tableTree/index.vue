<template lang="html">
  <div :class="switchClass" @click="toggle">
    <span :class="`${prefixCls}__inner`">
      <span v-if="value">True</span>
      <span v-if="!value">False</span>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'zk-switch',
    props: {
      value: {
        type: Boolean,
        default: false,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        prefixCls: 'zk-switch',
      };
    },
    computed: {
      switchClass() {
        return [
          `${this.prefixCls}`,
          {
            [`${this.prefixCls}--checked`]: this.value,
            [`${this.prefixCls}--disabled`]: this.disabled,
          },
        ];
      },
    },
    methods: {
      toggle() {
        if (this.disabled) {
          return false;
        }
        const value = !this.value;
        this.$emit('input', value);
        return this.$emit('on-change', value);
      },
    },
  };
</script>
<style lang="less">
// text
@prefixCls: zk-switch;
// color
@border: #dddee1;
@hoverBorder: #bcbcbc;
@blue: #2d8cf0;

.@{prefixCls} {
  display: inline-block;
  width: 60px;
  height: 24px;
  line-height: 22px;
  border-radius: 24px;
  vertical-align: middle;
  border: 1px solid #ccc;
  background-color: #ccc;
  position: relative;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transition: all .2s ease-in-out;
  &::after {
    content: "";
    width: 20px;
    height: 20px;
    border-radius: 20px;
    background-color: #fff;
    position: absolute;
    left: 1px;
    top: 1px;
    cursor: pointer;
    transition: left .2s ease-in-out,width .2s ease-in-out;
  }
  &:active::after {
    width: 32px;
  }
}

.@{prefixCls}__inner {
  color: #fff;
  font-size: 12px;
  position: absolute;
  left: 25px;
}

.@{prefixCls}--checked {
  border-color: #2d8cf0;
  background-color: #2d8cf0;
  &::after {
    left: 37px;
  }
  &:active::after {
    left: 25px;
  }
  .@{prefixCls}__inner {
    left: 8px;
  }
}

.@{prefixCls}--disabled {
  cursor: not-allowed;
  background: #f3f3f3;
  border-color: #f3f3f3;
  &::after {
    background: #ccc;
    cursor: not-allowed;
  }
  .@{prefixCls}__inner {
    color: #ccc;
  }
}
</style>
