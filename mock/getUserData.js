import Mock from '@/mockjs'

Mock.mock('/Alpaca/getUserData', {
  'list': [{
    "tt":"111"
  }]
})