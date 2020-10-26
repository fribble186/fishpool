<!-- <image src='/img/5.png' class="back" bindtap="back"/>
<view class="back_1"/> -->
<view qq:for="{{rooms}}" class="flex_column justify_center" style="margin-bottom:100rpx;" bindtap="toDetail" data-id="{{index}}">
    <image src="{{item.img}}" class="image"/>
    <text class="text_l bold" style='margin:20rpx 0 0 20rpx;'>{{item.text}}</text>
    <text class="text_s intro">{{item.info}}</text>
</view>