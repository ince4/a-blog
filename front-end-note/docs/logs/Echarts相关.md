# Echarts相关

## 1、视觉映射
visualMap 用于进行『视觉编码』，也就是将数据映射到视觉元素（视觉通道）。
通过 type 属性可分为分段型（visualMapPiecewise） 或 连续型（visualMapContinuous）

### 视觉元素
图形类别（symbol）
图形大小（symbolSize）
颜色（color）
透明度（opacity）
颜色透明度（colorAlpha）
颜色明暗度（colorLightness）
颜色饱和度（colorSaturation）
色调（colorHue）

在图表中，往往默认把 value 的前一两个维度进行映射，比如取第一个维度映射到x轴，取第二个维度映射到y轴。如果想要把更多的维度展现出来，可以借助 visualMap 。最常见的情况，气泡图（scatter） 使用半径展现了第三个维度。

```javascript
option = {
    visualMap: [
        {
            type: 'piecewise',
            min: 0,
            max: 5000,
            dimension: 3, // 指定 series.data 的第四个维度（即 value[3]）被映射
            seriesIndex: 4, // 对第四个系列进行映射。
            inRange: { // 选中范围中的视觉配置
                color: ['blue', '#121122', 'red'], // 定义了图形颜色映射的颜色列表
                symbolSize: [30, 100] // 定义了图形尺寸的映射范围
            },
            outOfRange: { // 选中范围外的视觉配置
                symbolSize: [30, 100]
            }
        },
        ...
    ]
};
```

## 2、系列文本标签显示
### series-line.data.tooltip. formatter
```javascript
// 字符串模板 {a}, {b}，{c} 分别表示系列名，数据名，数据值等
formatter: '{b0}: {c0}<br />{b1}: {c1}'
// 回调函数
formatter: function (params, ticket, callback) {
    $.get('detail?name=' + params.name, function (content) {
        callback(ticket, toHTML(content));
    });
    return 'Loading';
}
```
---

深入学习：

[Echarts 文档](https://echarts.apache.org/zh/option.html#visualMap)  
[Bubble Chart 实例](https://echarts.apache.org/examples/zh/editor.html?c=bubble-gradient) 
