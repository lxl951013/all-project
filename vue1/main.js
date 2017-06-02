//引入jquery
var $ = require("jquery");
$('p').css('color', 'red');
window.$ = $;

//引入vue
import Vue from "vue";

//引入Vue-router
import VueRouter from "vue-router";
Vue.use(VueRouter);

//引入Vuex
import Vuex from 'vuex';
Vue.use(Vuex);

//引入Muse-ui
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
Vue.use(MuseUI);

//引入mui
//require("./mui/css/mui.css");
//window.mui = require("./components/js/mui.js");

//引入weui样式
require("./components/css/weui.css");

//引入swiper样式及js
require("./components/css/swiper.css");
require("./components/js/swiper.js");

//引入自定义样式
require("./components/css/commen.css");

//引入组件
//首页
var firstCp = require("./components/firstCp.vue");
//美女也
var secondCp = require("./components/secondCp.vue");

//军事页
var threeCp = require("./components/threeCp.vue");
//娱乐也
var fourCp = require("./components/fourCp.vue");
var detailsCp = require("./components/details.vue");
var homeDetailCp=require("./components/homeDetail.vue");
var junshiDetailCp=require("./components/junshiDetail.vue");
var yuleDetailCp=require("./components/yuleDetail.vue");
//路由设置
var router = new VueRouter({
	routes: [{
		path: "/page1",
		component: firstCp,
		
	}, {
		path: "/page2",
		component: secondCp,
	}, {
		path: "/page3",
		component: threeCp,
	}, {
		path: "/page4",
		component: fourCp,
	}, {
		path: "/details",
		component: detailsCp,
	}, {
		path: "/homeDetail",
		component: homeDetailCp,
	}, {
		path: "/junshiDetail",
		component: junshiDetailCp,
	}, {
		path: "/yuleDetail",
		component: yuleDetailCp,
	}, {
		path: "/",
		redirect: '/page1',
	}]
});
//头部公共组件
Vue.component('headerCp', {
	template: `
    <div>
		<mu-appbar>
            <mu-icon-button icon="menu" slot="left" @click="toggle()" />
            <mu-flat-button href="#/page1" label="新闻" slot="right" v-bind:class="{'isShow':getShow==1}" @click="dianji(1)"/>
            <mu-flat-button href="#/page2" label="美女" slot="right" v-bind:class="{'isShow':getShow==2}" @click="dianji(2)"/>
            <mu-flat-button href="#/page3" label="军事" slot="right" v-bind:class="{'isShow':getShow==3}" @click="dianji(3)"/>
            <mu-flat-button href="#/page4" label="娱乐" slot="right" v-bind:class="{'isShow':getShow==4}" @click="dianji(4)"/>
            <mu-icon-button icon="expand_more" slot="right" @click="loding()"/>  
            
	        <mu-paper class="demo-menu" v-bind:class="{'denglu':xianshi}">
	        <mu-menu>
	            <mu-menu-item title="注册"/>
	            <mu-menu-item title="登录"/>
	            <mu-menu-item title="退出"/>
	        </mu-menu>
	        </mu-paper>
        
        </mu-appbar>       
        
        <div :class="{'cebian':bool}">
        <mu-drawer :open="open" :docked="docked" @close="toggle()">
        <mu-list @itemClick="docked ? '' : toggle()">
           <mu-list-item title="用户名:"/>
           <mu-list-item title="现有积分:"/>
           <mu-list-item title="现有金币:"/>
           <mu-list-item title="金币充值:"/>
           <mu-list-item title="我的足迹:"/>
           <mu-list-item title="意见反馈:"/>         
           <mu-list-item title="设置:"/>
           <mu-list-item v-if="docked" @click.native="open = false" title="Close"/>
        </mu-list>
        </mu-drawer>
        </div>
        
	</div>
	
	  `,
	data: function() { //可能会要被复用，用函数
		return {
			bool:true,
			getShow: 1,
			open: false,
            docked: true,
            xianshi:false,
		}
	},
	methods: {
		dianji(num) {
			this.getShow = num
		},
		toggle (flag) {
            this.open = !this.open
            this.docked = !flag
      }, 
      loding(){
      	 this.xianshi=!this.xianshi
      }
		
	},

});
var store = new Vuex.Store({
	//存储数据的地方
	state: {
		author: "xilong",
		NewsId: '',
		MeinvId: '',
		JunshiId: '',
		YuleId: '',
	},
	mutations: {
		//改变值的方法
		changeNewsId: function(state, a) {
			state.NewsId = a
		},
		changeMeinvId: function(state, a) {
			state.MeinvId = a
		},
		changeJunshiId: function(state, a) {
			state.JunshiId = a
		},
		changeYuleId: function(state, a) {
			state.YuleId = a
		}
	},
	//获取数据的方法
	getters: {
		getNewsId: function(state) {
			return state.NewsId
		},
		getMeinvId: function(state) {
			return state.MeinvId
		}
	}
});
new Vue({
	el: "#demo",
	data: {
		name: 'long',
	},
	template: `
	    <div>
	        <headerCp></headerCp>
			<router-view></router-view>
		</div>
	`,
	//component: footercp,
	router,
	store,

})