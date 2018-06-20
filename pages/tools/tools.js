//tools.js
const util = require('../../utils/util.js')

Page({
  data: {
    motto: '欢迎来到种花吧',
    container_ml:500,
    container_l:0.5,
    dilution:1000,
    dosage_ml:0.5,
    dosage_drop:10,
    water_ml:500,
    water_l:0.5,
    water_container:1,

    soil_zzy:0,
    soil_zzy1: 0,
    soil_zs:0,
    soil_zs1: 0,
    soil_hsy:0,
    soil_hsy1: 0,
    soil_ntt:0,
    soil_ntt1: 0,
    soil_yt:0,
    soil_yt1: 0,
    soil_cyt:0,
    soil_cyt1: 0,
    soil_lzt:0,
    soil_lzt1: 0,
    soil_total:0

  },
  onLoad: function () {
    
  },
  setDilution:function(e){
    this.setData({
      dilution: e.detail.value
    })
    this.changeDilution()
  },
  setDosageMl:function(e) {
    var _ml = e.detail.value
    var _drop = Math.round(_ml/0.05*100)/100
    this.setData({
      dosage_ml: _ml
    })
    this.setData({
      dosage_drop: _drop
    })
    this.changeDosage()
  },
  setDosageDrop:function(e) {
    var _drop = e.detail.value
    var _ml = Math.round(_drop*0.05*100)/100
    this.setData({
      dosage_ml: _ml
    })
    this.setData({
      dosage_drop: _drop
    })
    this.changeDosage()
  },
  setWaterMl:function(e) {
    var _ml = e.detail.value
    var _l = _ml*1000
    this.setData({
      water_ml: _ml
    })
    this.setData({
      water_l: _l
    })
    this.changeWater()
  },
  setWaterL:function(e) {
    var _l = e.detail.value
    var _ml = Math.round(_l*1000)
    this.setData({
      water_ml: _ml
    })
    this.setData({
      water_l: _l
    })
    this.changeWater()
  },
  setContainerMl:function(e) {
    var _ml = e.detail.value
    var _l = _ml / 1000
    this.setData({
      container_ml: _ml
    })
    this.setData({
      container_l: _l
    })
    this.changeContainer()
  },
  setContainerL:function(e) {
    var _l = e.detail.value
    var _ml = _l*1000
    this.setData({
      container_ml: _ml
    })
    this.setData({
      container_l: _l
    })
    this.changeContainer()
  },
  changeDilution:function(){
    var _dilution = this.data.dilution
    var _dosage_ml = this.data.dosage_ml

    var _water_ml = _dosage_ml * _dilution
    this.setWaterData(_water_ml)

  },
  changeDosage:function(){
    this.changeDilution()
  },
  changeWater:function(){
    var _dilution = this.data.dilution
    var _water_ml = this.data.water_ml

    var _dosage_ml = Math.round(_water_ml/_dilution*10)/10
    
    this.setData({
      water_container: Math.round(this.data.water_ml / this.data.container_ml * 100) / 100
    })
    this.setDosageData(_dosage_ml)
   
  },
  changeContainer:function(){
    var _water_ml = this.data.water_ml
    this.setWaterData(_water_ml)
  },
  setDosageData:function(dosageMl){
    this.setData({
      dosage_ml: dosageMl
    })
    this.setData({
      dosage_drop: Math.round(dosageMl/0.05)
    })
  },
  setWaterData:function(waterMl){
    this.setData({
      water_ml: waterMl
    })
    this.setData({
      water_l: Math.round(waterMl/1000*100)/100
    })

    this.setData({
      water_container: Math.round(this.data.water_ml/this.data.container_ml*100)/100
    })
  },
  computeSoil:function(){
    var _soil_total = this.data.soil_zzy + this.data.soil_zs + this.data.soil_hsy + this.data.soil_ntt + this.data.soil_yt + this.data.soil_cyt + this.data.soil_lzt
    this.setData({
      soil_total: _soil_total
    })
    this.setData({
      soil_zzy1: Math.round(this.data.soil_zzy / _soil_total * 100)
    })
    this.setData({
      soil_zs1: Math.round(this.data.soil_zs / _soil_total * 100)
    })
    this.setData({
      soil_hsy1: Math.round(this.data.soil_hsy / _soil_total * 100)
    })    
    this.setData({
      soil_ntt1: Math.round(this.data.soil_ntt / _soil_total * 100)
    })
    this.setData({
      soil_yt1: Math.round(this.data.soil_yt / _soil_total * 100)
    })
    this.setData({
      soil_cyt1: Math.round(this.data.soil_cyt / _soil_total * 100)
    })
    this.setData({
      soil_lzt1: Math.round(this.data.soil_lzt / _soil_total * 100)
    })            
      
  },
  setSoil_lzt:function(e){
    this.setData({
      soil_lzt: e.detail.value
    })
    this.computeSoil()
  },
  setSoil_zzy: function (e) {
    this.setData({
      soil_zzy: e.detail.value
    })
    this.computeSoil()
  },
  setSoil_zs: function (e) {
    this.setData({
      soil_zs: e.detail.value
    })
    this.computeSoil()
  },
  setSoil_hsy: function (e) {
    this.setData({
      soil_hsy: e.detail.value
    })
    this.computeSoil()
  },
  setSoil_ntt: function (e) {
    this.setData({
      soil_ntt: e.detail.value
    })
    this.computeSoil()
  },
  setSoil_yt: function (e) {
    this.setData({
      soil_yt: e.detail.value
    })
    this.computeSoil()
  },
  setSoil_cyt: function (e) {
    this.setData({
      soil_cyt: e.detail.value
    })
    this.computeSoil()
  }

})
