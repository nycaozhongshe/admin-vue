import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/common/Home';
import DashBoard from '@/components/page/DashBoard';
import AmCharts from '@/components/page/BasicCharts';
import FormInput from '@/components/page/FormInput';
import FormLayouts from '@/components/page/FormLayouts';
import BasicTables from '@/components/page/BasicTables';
import EditorPage from '@/components/page/EditorPage';
import MarkdownPage from '@/components/page/MarkdownPage';
import TodoList from '@/components/page/TodoListPage';
import Form from '@/components/page/nav2/Form.vue';
import Table from '@/components/page/nav2/Table.vue';
import User from '@/components/page/nav2/user.vue';
import Tablezhonghe from '@/components/page/nav2/Tablezhonghe.vue';

Vue.use(Router)

export default new Router({
  mode:'history',
  base:__dirname,
  routes: [
    {
      path: '/',
      component: Home,
      children:[
        {
          path:'',
          component:DashBoard
        },{
          path:'/DashBoard',
          component:DashBoard
        },{
          path:'/EditorPage',
          component:EditorPage
        },{
          path:'/MarkdownPage',
          component:MarkdownPage
        },{
          path:'/BasicCharts',
          component:AmCharts
        },{
          path:'/FormInput',
          component:FormInput
        },{
          path:'/FormLayouts',
          component:FormLayouts
        },{
          path:'/BasicTables',
          component:BasicTables
        },{
          path:'/TodoList',
          component:TodoList
         
        },{
          path:'/Form',
          component:Form
        },{
          path:'/Table',
          component:Table 
        },
				{
          path:'/User',
          component:User
       },
       {
          path:'/Tablezhonghe',
          component:Tablezhonghe
        }
				
        

      ]
    }
  ]
})
