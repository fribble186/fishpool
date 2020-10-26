<!-- <image src='/img/5.png' class="back" bindtap="back"/> -->

<view class="flex_row column">
    <text class="bold q">几个人拍摄</text>
    <input type="number" maxlength="2" class="input" bindinput="pepole"/>
    <text>人</text>
</view>
<view class="flex_row column">
    <text class="bold q">拍几个小时</text>
    <input type="number" maxlength="2" class="input" bindinput="hour"/>
    <text>小时</text>
</view>
<view class="flex_row column">
    <text class="bold q">选择什么棚景</text>
    <picker bindchange="bindPickerChange" value="{{index}}" range="{{array}}">
        <view class="input">
            {{array[index] || "请选择"}}
        </view>
    </picker>
</view>
<view class="column">
    <radio-group bindchange="radioChange">
        <radio class="text_l bold" wx:for-items="{{items}}" value="{{item.name}}" checked="{{item.checked}}" color="#0252d9" style="margin-right:20rpx">
            <text>{{item.value}}</text>
        </radio>
    </radio-group>
</view>
<view class="cal_btn flex_column center" bindtap="cal">
    <text class="bold">点击计算棚费</text>
</view>

<view class="flex_column center" qq:if="{{result}}">
    <view class="flex_row center" style="margin-top:50rpx;">
        <text >本次拍摄小计</text>
        <text class="result bold">{{result}}</text>
        <text>元</text>
    </view>
    <text style="margin-top:50rpx;">注意事项</text>
    <text class="text_l">1，现有单景优惠：满3小时送半小时；满8小时人数上限+2</text>
    <text class="text_l">2，此计算价格仅适用于二次元拍摄</text>
    <text class="text_l">具体商单及其它业务请联系客服</text>
</view>