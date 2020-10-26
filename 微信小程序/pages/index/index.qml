<view class="flex_row center" style="margin-top:100rpx;">
    <image src='/img/logo.png' class="logo"/>
    <view class="flex_column">
        <text class="title">鱼塘工作室</text>
    </view>
</view>

<swiper
class="slide"
autoplay="true"
previous-margin="50rpx"
next-margin="50rpx"
circular="true"
>
    <block qq:for="{{imgUrls}}">
        <swiper-item>
            <image src="{{item}}" class="slide_image" mode="widthFix"/>
        </swiper-item>
    </block>
</swiper>

<view class="btns flex_column">
    <view class="flex_row">
        <view class="flex_column btn center" bindtap="goto" data-page="1">
            <image class="icon" src="/img/1.png"/>
            <text class="bold text_m">棚费计算器</text>
        </view>
        <view style="flex:1"/>
        <view class="flex_column btn center" bindtap="goto" data-page="2">
            <image class="icon" src="/img/2.png"/>
            <text class="bold text_m">棚景详情</text>
        </view>
    </view>
    <view class="flex_row">
        <view class="flex_column btn center" bindtap="goto" data-page="3">
            <image class="icon" src="/img/3.png"/>
            <text class="bold text_m">器材租借</text>
        </view>
        <view style="flex:1"/>
        <view class="flex_column btn center" bindtap="goto" data-page="4">
            <image class="icon" src="/img/4.png"/>
            <text class="bold text_m">棚子地址</text>
        </view>
    </view>
</view>