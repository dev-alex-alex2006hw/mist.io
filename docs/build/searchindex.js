Search.setIndex({envversion:46,filenames:["backends_api","developer_guide","error_api","images_api","index","keys_api","login_api","machines_api","modules","providers_api","rest_api","shell_api"],objects:{"":{"/backends":[10,2,1,"post--backends"],"/backends/{backend_id}":[10,3,1,"delete--backends-backend_id"],"/backends/{backend_id}/images":[10,0,1,"get--backends-backend_id-images"],"/backends/{backend_id}/locations":[10,0,1,"get--backends-backend_id-locations"],"/backends/{backend_id}/machines":[10,2,1,"post--backends-backend_id-machines"],"/backends/{backend_id}/machines/{machine_id}":[10,2,1,"post--backends-backend_id-machines-machine_id"],"/backends/{backend_id}/machines/{machine_id}/metadata":[10,2,1,"post--backends-backend_id-machines-machine_id-metadata"],"/backends/{backend_id}/machines/{machine_id}/shell?host={host_ip}&command={shell_command}":[11,0,1,"get--backends-backend_id-machines-machine_id-shell?host=host_ip&command=shell_command"],"/backends/{backend_id}/sizes":[10,0,1,"get--backends-backend_id-sizes"],"/keys":[10,2,1,"post--keys"],"/keys/{key_id}":[10,3,1,"delete--keys-key_id"],"/keys/{key_id}/private":[10,0,1,"get--keys-key_id-private"],"/keys/{key_id}/public":[10,0,1,"get--keys-key_id-public"],"/providers":[10,0,1,"get--providers"]},"mist.io":{add_routes:[8,6,1,""],dal:[8,4,0,"-"],main:[8,6,1,""],methods:[8,4,0,"-"],model:[8,4,0,"-"],shell:[8,4,0,"-"],views:[8,4,0,"-"]},"mist.io.dal":{BoolField:[8,5,1,""],DictField:[8,5,1,""],Field:[8,5,1,""],FieldsDict:[8,5,1,""],FieldsList:[8,5,1,""],FieldsSequence:[8,5,1,""],FileLock:[8,5,1,""],FloatField:[8,5,1,""],HtmlSafeStrField:[8,5,1,""],IntField:[8,5,1,""],ListField:[8,5,1,""],OODict:[8,5,1,""],OODictYaml:[8,5,1,""],OODictYamlLock:[8,5,1,""],ObjectField:[8,5,1,""],StrField:[8,5,1,""],User:[8,5,1,""],make_field:[8,6,1,""]},"mist.io.dal.BoolField":{back_types:[8,7,1,""],front_types:[8,7,1,""]},"mist.io.dal.DictField":{back_types:[8,7,1,""],front_types:[8,7,1,""]},"mist.io.dal.Field":{back_types:[8,7,1,""],cast2back:[8,8,1,""],cast2front:[8,8,1,""],front_types:[8,7,1,""]},"mist.io.dal.FieldsList":{insert:[8,8,1,""]},"mist.io.dal.FieldsSequence":{get_raw:[8,8,1,""]},"mist.io.dal.FileLock":{acquire:[8,8,1,""],break_after:[8,7,1,""],check:[8,8,1,""],isset:[8,8,1,""],release:[8,8,1,""],reset:[8,8,1,""],sleep:[8,7,1,""]},"mist.io.dal.FloatField":{back_types:[8,7,1,""],front_types:[8,7,1,""]},"mist.io.dal.HtmlSafeStrField":{cast2front:[8,8,1,""]},"mist.io.dal.IntField":{back_types:[8,7,1,""],front_types:[8,7,1,""]},"mist.io.dal.ListField":{back_types:[8,7,1,""],front_types:[8,7,1,""]},"mist.io.dal.OODict":{as_dict:[8,8,1,""],get_raw:[8,8,1,""],keys:[8,8,1,""]},"mist.io.dal.OODictYaml":{refresh:[8,8,1,""],save:[8,8,1,""]},"mist.io.dal.OODictYamlLock":{lock_n_load:[8,8,1,""],save:[8,8,1,""]},"mist.io.dal.ObjectField":{cast2back:[8,8,1,""]},"mist.io.dal.StrField":{back_types:[8,7,1,""],front_types:[8,7,1,""]},"mist.io.methods":{add_backend:[8,6,1,""],add_backend_v_2:[8,6,1,""],add_key:[8,6,1,""],assoc_metric:[8,6,1,""],associate_ip:[8,6,1,""],associate_key:[8,6,1,""],check_monitoring:[8,6,1,""],connect_provider:[8,6,1,""],create_dns_a_record:[8,6,1,""],create_machine:[8,6,1,""],create_network:[8,6,1,""],delete_backend:[8,6,1,""],delete_key:[8,6,1,""],delete_machine_metadata:[8,6,1,""],delete_network:[8,6,1,""],deploy_collectd:[8,6,1,""],deploy_python_plugin:[8,6,1,""],destroy_machine:[8,6,1,""],disable_monitoring:[8,6,1,""],disassoc_metric:[8,6,1,""],disassociate_key:[8,6,1,""],ec2_network_to_dict:[8,6,1,""],edit_key:[8,6,1,""],enable_monitoring:[8,6,1,""],find_metrics:[8,6,1,""],find_public_ips:[8,6,1,""],gce_network_to_dict:[8,6,1,""],get_deploy_collectd_command_unix:[8,6,1,""],get_deploy_collectd_command_windows:[8,6,1,""],get_machine_actions:[8,6,1,""],get_stats:[8,6,1,""],list_backends:[8,6,1,""],list_images:[8,6,1,""],list_keys:[8,6,1,""],list_locations:[8,6,1,""],list_machines:[8,6,1,""],list_networks:[8,6,1,""],list_sizes:[8,6,1,""],machine_name_validator:[8,6,1,""],nephoscale_network_to_dict:[8,6,1,""],notify_admin:[8,6,1,""],notify_user:[8,6,1,""],openstack_network_to_dict:[8,6,1,""],openstack_subnet_to_dict:[8,6,1,""],ping:[8,6,1,""],probe:[8,6,1,""],probe_ssh_only:[8,6,1,""],reboot_machine:[8,6,1,""],rename_backend:[8,6,1,""],rename_machine:[8,6,1,""],resize_machine:[8,6,1,""],run_playbook:[8,6,1,""],set_default_key:[8,6,1,""],set_machine_metadata:[8,6,1,""],ssh_command:[8,6,1,""],star_image:[8,6,1,""],start_machine:[8,6,1,""],stop_machine:[8,6,1,""],undeploy_collectd:[8,6,1,""],undeploy_python_plugin:[8,6,1,""],update_metric:[8,6,1,""]},"mist.io.model":{Backend:[8,5,1,""],Backends:[8,5,1,""],Keypair:[8,5,1,""],Keypairs:[8,5,1,""],Machine:[8,5,1,""],Machines:[8,5,1,""],User:[8,5,1,""]},"mist.io.model.Backend":{apikey:[8,7,1,""],apisecret:[8,7,1,""],apiurl:[8,7,1,""],auth_version:[8,7,1,""],cert_file:[8,7,1,""],compute_endpoint:[8,7,1,""],docker_port:[8,7,1,""],enabled:[8,7,1,""],get_id:[8,8,1,""],key_file:[8,7,1,""],machine_count:[8,7,1,""],machines:[8,7,1,""],poll_interval:[8,7,1,""],provider:[8,7,1,""],region:[8,7,1,""],ssh_port:[8,7,1,""],starred:[8,7,1,""],tenant_name:[8,7,1,""],title:[8,7,1,""],unstarred:[8,7,1,""]},"mist.io.model.Keypair":{"default":[8,7,1,""],"private":[8,7,1,""],"public":[8,7,1,""],construct_public_from_private:[8,8,1,""],generate:[8,8,1,""],isvalid:[8,8,1,""],machines:[8,7,1,""]},"mist.io.model.Machine":{dns_name:[8,7,1,""],name:[8,7,1,""],os_type:[8,7,1,""],public_ips:[8,7,1,""],ssh_port:[8,7,1,""],uuid:[8,7,1,""]},"mist.io.model.User":{backends:[8,7,1,""],email:[8,7,1,""],keypairs:[8,7,1,""],mist_api_token:[8,7,1,""]},"mist.io.shell":{DockerShell:[8,5,1,""],ParamikoShell:[8,5,1,""],Shell:[8,5,1,""]},"mist.io.shell.DockerShell":{autoconfigure:[8,8,1,""],command:[8,8,1,""],connect:[8,8,1,""],disconnect:[8,8,1,""]},"mist.io.shell.ParamikoShell":{autoconfigure:[8,8,1,""],check_sudo:[8,8,1,""],command:[8,8,1,""],command_stream:[8,8,1,""],connect:[8,8,1,""],disconnect:[8,8,1,""]},"mist.io.shell.Shell":{autoconfigure:[8,8,1,""],command:[8,8,1,""],command_stream:[8,8,1,""],connect:[8,8,1,""],disconnect:[8,8,1,""],invoke_shell:[8,8,1,""],recv:[8,8,1,""]},"mist.io.views":{add_backend:[8,6,1,""],add_key:[8,6,1,""],assoc_metric:[8,6,1,""],associate_ip:[8,6,1,""],associate_key:[8,6,1,""],check_auth:[8,6,1,""],check_monitoring:[8,6,1,""],create_machine:[8,6,1,""],create_network:[8,6,1,""],delete_backend:[8,6,1,""],delete_key:[8,6,1,""],delete_machine_metadata:[8,6,1,""],delete_network:[8,6,1,""],delete_rule:[8,6,1,""],deploy_plugin:[8,6,1,""],disassoc_metric:[8,6,1,""],disassociate_key:[8,6,1,""],edit_key:[8,6,1,""],exception_handler_mist:[8,6,1,""],find_metrics:[8,6,1,""],generate_keypair:[8,6,1,""],get_private_key:[8,6,1,""],get_public_key:[8,6,1,""],get_stats:[8,6,1,""],home:[8,6,1,""],list_backends:[8,6,1,""],list_images:[8,6,1,""],list_keys:[8,6,1,""],list_locations:[8,6,1,""],list_machines:[8,6,1,""],list_networks:[8,6,1,""],list_sizes:[8,6,1,""],list_specific_images:[8,6,1,""],list_supported_providers:[8,6,1,""],machine_actions:[8,6,1,""],machine_rdp:[8,6,1,""],not_found:[8,6,1,""],probe:[8,6,1,""],rename_backend:[8,6,1,""],set_default_key:[8,6,1,""],set_machine_metadata:[8,6,1,""],socketio:[8,6,1,""],star_image:[8,6,1,""],toggle_backend:[8,6,1,""],undeploy_plugin:[8,6,1,""],update_metric:[8,6,1,""],update_monitoring:[8,6,1,""],update_rule:[8,6,1,""],update_user_settings:[8,6,1,""]},mist:{"io/auth":[10,2,1,"post-mist.io-auth"],io:[8,4,0,"-"]}},objnames:{"0":["http","get","HTTP get"],"1":["http","put","HTTP put"],"2":["http","post","HTTP post"],"3":["http","delete","HTTP delete"],"4":["py","module","Python module"],"5":["py","class","Python class"],"6":["py","function","Python function"],"7":["py","attribute","Python attribute"],"8":["py","method","Python method"]},objtypes:{"0":"http:get","1":"http:put","2":"http:post","3":"http:delete","4":"py:module","5":"py:class","6":"py:function","7":"py:attribute","8":"py:method"},terms:{"000z":[7,10],"0987098hhjk":[0,10],"09jllilkjiu087jkhgjhguy90ur":[0,10],"10z":[3,10],"13t13":[7,10],"15_11":[3,10],"15t05":[7,10],"15t20":[3,10],"21t19":[3,10],"29z":[3,10],"2f61fe2e":[7,10],"2tk74h4mxbj8nnohljlizqc4shn3":[0,10],"2tk74h4mxbjjllkjjo4shn3":[0,3,7,10,11],"2tkqwqdwffwfdwfesgzqc4shn3":[5,10],"2xlarg":[0,10],"3c1c":[3,10],"3po809nuijqingqqmdjakslwp6":[0,10],"42a9":[3,10],"447c23edbe944911f23145538915865ebddec230":[7,10],"48emauzl9tevyhkyjc9korapxedp":[0,10],"4a2c2j08099809709as098087832843e561abb495c4a30726a8590f73adad":[6,10],"50aa7257":[7,10,11],"50dd7257":[7,10],"5ebfdc59":[7,10],"71f6beefc6a7":[3,10],"73764eb8":[3,10],"8fff":[3,10],"9087dsfhkjhakjfh":[0,10],"908uioiui098098um0h75hb3l7lpj49r2q":[0,10],"_dict":8,"_static":1,"_templat":1,"abstract":8,"boolean":8,"break":8,"case":[0,1,6,8,10],"catch":8,"class":8,"default":[0,1,5,8,10],"final":[1,8],"float":8,"function":8,"import":8,"int":8,"new":[0,5,8,10],"null":[0,3,7,10],"public":[5,8,10],"return":[3,5,8,10],"static":1,"true":[0,3,5,7,8,10],"try":8,"var":1,a09009numiqciha:[0,10],aaaab3nzac1yc2eaaaadaqa:[5,10],abc:8,abl:8,about:8,abov:1,accept:[0,3,5,6,7,8,9,10,11],access:[1,4,8],accord:8,accordingli:8,account:[0,10],achiev:8,acquir:8,across:[1,4],action:[],activ:[3,10],actual:8,add:[0,1,5,7,8,10],add_backend:8,add_backend_v_2:8,add_kei:8,add_rout:8,addition:1,addr:8,address:[0,10],after:8,again:[1,8],agpl:[1,4],aka:8,aki:[7,10],alert:[6,10],all:[0,1,3,6,7,8,9,10],allow:[2,8,10],alreadi:8,also:[1,8],alter:[0,10],altern:8,although:1,alwai:8,amazon:[0,4,10],amazonaw:[7,10],ami:[7,10],ani:[1,4,8],anoth:[0,8,10],ansibl:1,anyth:1,anywher:4,api:[],api_kei:[0,10],api_secret:[0,10],apikei:[0,8,10],apisecret:8,apiurl:[0,8,10],app:8,appear:8,append:8,appendshel:[10,11],applic:[0,3,5,6,7,8,9,10,11],appropri:8,aproach:8,aptitud:1,arbitrari:8,arg:8,argument:8,as_dict:8,ask:[5,8,10],asoci:8,assign:8,assoc_metr:8,associ:[5,7,8,10],associate_ip:8,associate_kei:8,assum:8,atom:8,attempt:8,attribut:8,attributeerror:8,auth:[0,6,8,10],auth_password:[0,10],auth_url:[0,10],auth_us:[0,10],auth_vers:8,authent:[],author:[4,6,10],auto_disk_config:[3,10],autoconfigur:8,automat:[1,8],avail:[3,7,8,10],averag:[10,11],avoid:[1,8],azur:[0,9,10],back:8,back_typ:8,back_valu:8,backend:[],backend_id:[0,3,5,7,8,10,11],backup:[7,10],bad:[2,10],bandwidth:[0,10],bare:[0,8,10],bare_met:[0,9,10],base:[1,3,8,10],baseobject:8,bash:[7,10],basic:[0,1,6,8,10],becaus:8,been:8,befor:8,begin:[0,5,10],below:8,best:8,between:[0,1,8,10],bin:1,bit:8,block:8,bodi:[10,11],bool:8,boolfield:8,bootstrap:1,both:8,break_aft:8,broad:8,browser:1,build:1,builder:1,buildout:1,button:8,c0ca59c5:[5,10],cache_in_nova:[3,10],california:[9,10],call:8,came:8,can:[0,1,4,6,7,8,10],can_destroi:[7,10],can_reboot:[7,10],can_start:[7,10],can_stop:[7,10],can_tag:[7,10],care:8,cast2back:8,cast2front:8,cast:8,cert_fil:8,certain:8,certif:[0,10],chang:[1,8],charset:[0,3,5,6,7,9,10,11],check:[1,4,8],check_auth:8,check_monitor:8,check_sudo:8,chicago:[9,10],choos:1,clear:8,click:8,client:8,clienttoken:[7,10],clone:1,close:8,cloud:[0,1,4,8,9,10],cmd:8,code:[],col:8,collect:8,com:[0,1,3,4,6,7,10],combin:8,come:[1,8],command:[1,7,8,10,11],command_stream:8,commun:[3,8,10],company_nam:[6,10],compar:8,complement:8,completeshel:[10,11],complic:8,comput:[0,7,8,9,10],compute_endpoint:[0,8,10],config:8,configur:8,conflict:[1,2,10],conn:8,connect:[0,8,10],connect_provid:8,consid:[1,8],consist:8,construct:8,construct_public_from_priv:8,contain:8,context:8,control:[1,8],convert:1,copi:8,core:8,correct:8,correspond:8,could:[1,8],countri:[0,6,8,10],creat:[1,3,7,8,10],create_dns_a_record:8,create_machin:8,create_network:8,create_nod:8,creation:8,credenti:8,css:1,current:[1,8],current_plan:[6,10],custom:[0,3,8,10],dai:[10,11],dal:[],dalla:[9,10],data:8,databas:8,datacent:8,debian:1,debug:8,decid:1,declar:8,default_kei:[5,10],defin:8,delet:[0,5,8,10],delete_backend:8,delete_kei:8,delete_machine_metadata:8,delete_network:8,delete_rul:8,delitem:8,depend:[1,7,10],deploi:8,deploy_collectd:8,deploy_plugin:8,deploy_python_plugin:8,describ:10,destroi:[7,8,10],destroy_machin:8,detail:8,dev:1,devel:1,develop:[],devic:[1,4],dfw:[0,9,10],diablo:8,dict:8,dictfield:8,dictionari:8,didn:8,differ:[1,8],digibackend:[0,10],digit:[0,10],digitalocean:[0,9,10],directli:8,disabl:[0,8,10],disable_monitor:8,disassoc_metr:8,disassoci:8,disassociate_kei:8,disconnect:8,disk:[0,7,8,10],displai:8,distibut:1,distinguish:8,distro:1,dns_name:[7,8,10],doc:1,docker:[0,8,9,10],docker_command:8,docker_env:8,docker_exposed_port:8,docker_host:[0,10],docker_port:[0,8,10],docker_port_bind:8,dockershel:8,dodjhlkjhiuyghv98756fugjhg7687uygjhgjgj:[0,10],doe:[6,8,10],doesn:8,domain:8,domain_nam:8,don:8,doubl:[0,10],driver:[0,8,10],dry:8,dure:8,each:[0,5,7,8,9,10],easili:[1,8],east:[9,10],easy_instal:1,ec2:[0,3,5,7,8,9,10],ec2_ap_northeast:[0,9,10],ec2_ap_southeast:[9,10],ec2_ap_southeast_2:[0,9,10],ec2_eu:8,ec2_eu_west:[9,10],ec2_network_to_dict:8,ec2_sa_east:[9,10],ec2_us_east:[9,10],ec2_us_west:[9,10],ec2_us_west_oregon:[9,10],echo:[7,10],edit:8,edit_kei:8,effect:8,effort:8,egg:1,either:10,electron:[0,10],element:8,els:8,email:[0,6,8,10],email_notifi:8,empti:[7,8,10],enabl:[0,8,10],enable_monitor:8,encod:8,endpoint:[0,10],enforc:8,enforce_paramiko:8,engin:[0,9,10],environ:1,erlang:1,error:[],escap:8,essenti:1,essex:8,establish:8,etc:8,eventhough:8,everi:1,everyth:8,ex_com:8,ex_fil:8,exact:8,exampl:[0,1,3,5,6,7,8,9,10,11],exc:8,except:8,exception_handler_mist:8,exclud:8,exist:8,existing_kei:8,exit:8,expect:8,expir:[6,10],explanatori:8,expos:[0,10],extend:8,extra:[0,3,7,8,10],extra_var:8,fail:[1,8],fals:[0,3,5,6,7,8,10],fetch:8,field:8,fieldsdict:8,fieldsdictfield:8,fieldsequ:8,fieldslist:8,fieldssequ:8,file:[1,8],filelock:8,filepath:8,filesystem:8,find:8,find_metr:8,find_public_ip:8,first:[8,9,10],flag:1,flavor:8,floatfield:8,fly:8,folder:1,follow:[1,8],forbidden:[2,10],force_handl:8,forget:8,format:8,found:[0,2,10],free:8,freemium:[1,4],from:[0,4,8,10],front:[0,8,10],front_typ:8,front_valu:8,frontend:8,further:8,furthermor:8,gcc:1,gce:[0,9,10],gce_network_to_dict:8,gen:[9,10],gener:[0,1,5,8,10],generate_keypair:8,gentoo:[3,10],geo:[0,9,10],get:[0,1,3,5,6,7,8,9,10,11],get_deploy_collectd_command_unix:8,get_deploy_collectd_command_window:8,get_id:8,get_machine_act:8,get_num_mon_machin:8,get_private_kei:8,get_public_kei:8,get_raw:8,get_stat:8,getfieldsdictfield:8,getfieldslistfield:8,getitem:8,getoodictfield:8,gevent:1,gift:[0,10],git:1,github:[1,4],give:8,given:[3,7,8,10],global_config:8,gnu:[1,4],googl:[0,9,10],greec:[6,10],group:[7,10],gserviceaccount:[0,10],handi:[7,10],handl:[1,8],has_expir:[6,10],hat:1,have:[0,1,6,8,9,10],header:[0,1,6,9,10],helion:[9,10],help:[1,4],helper:8,here:8,high:[0,10],higher:8,hkg:[9,10],hold:8,home:8,hong:[9,10],hood:8,host:[0,3,5,6,7,8,9,10,11],host_ip:[10,11],hostnam:8,hour:[0,10],how:8,howev:[6,8,10],hpcloud:[0,9,10],hppass:[0,10],html:[1,10,11],htmlsafestrfield:8,http:[],iad:[9,10],iam_profil:[7,10],if_sudo:[5,10],ignor:8,imag:[],image_extra:[7,8,10],image_id:8,image_nam:8,image_typ:[3,10],imageid:[7,10],implement:8,inc:4,includ:[0,3,8,9,10],inconsist:8,index:[0,4,8,10],inform:8,inherit:8,initi:[7,8,10],input:8,insert:8,insid:[1,8],instal:[],instanc:[0,8,10],instanceid:[7,10],instancetyp:[7,10],instant:8,instanti:8,instead:8,integ:8,intercept:8,interfac:8,intern:[2,7,10],intfield:8,invoke_shel:8,ip_addr:8,ipython:1,ireland:[9,10],isinst:8,isset:8,issu:8,isvalid:8,item:8,iter:8,itself:8,japan:[0,10],javascript:[10,11],jhbjhvjhv77t8:[0,10],job_id:8,john:[6,10],json:[0,3,5,6,7,9,10,11],just:8,kei:[],kernelid:[7,10],key2:[5,10],key_fil:8,key_id:[5,8,10],keynam:[7,10],keypair:8,keyword:4,kickstart:[3,10],know:8,kong:[9,10],kvm:1,kwarg:8,kwd:8,larg:[0,8,10],later:[1,8],latex:1,launchdatetim:[7,10],launchindex:[7,10],layer:8,layout:1,lconfig:8,least:8,left:8,len:8,level:8,libcloud:[4,8],libev:1,liblcoud:8,libpcre3:1,librari:1,libvirt:1,libxml2:1,licens:[1,4],like:[7,8,10],line:[1,8],link:8,linod:[0,4,7,8,9,10],linux:[0,3,10],list:[0,3,5,7,8,9,10],list_backend:8,list_imag:8,list_kei:8,list_loc:8,list_machin:8,list_network:8,list_siz:8,list_specific_imag:8,list_supported_provid:8,listen:[0,10],listfield:8,load:[10,11],localhost:8,locat:[0,7,8,9,10],location_id:8,location_nam:8,lock:8,lock_fil:8,lock_n_load:8,log:1,lon:[9,10],london:[9,10],look:8,loop:8,low:8,lroot:8,lxml:1,machin:[],machine_act:8,machine_count:8,machine_from_api:8,machine_hostnam:8,machine_id:[5,7,8,10,11],machine_ip:[0,10],machine_kei:[0,8,10],machine_nam:8,machine_name_valid:8,machine_port:[0,10],machine_rdp:8,machine_us:[0,8,10],machineunauthorizederror:8,macosx:1,mai:[1,8],mail:[6,10],main:8,make_field:8,manag:[1,4,8],mani:8,mapper:8,mean:8,meant:8,mechan:8,medium:[0,10],memcach:8,memori:[0,10],messag:8,metadata:[3,7,8,10],metal:[0,8,10],method:[],metric:8,metric_id:8,micro:[0,7,10],might:8,miicxqibaakbgqdhu3c5copsj2xqadx6g1xat6jcxw5cnktnn81z6rwbf6hemuah:[0,10],mindisk:[3,10],minram:[3,10],miss:8,mist:[],mist_1:[6,10],mist_api_token:[6,8,10],mistio:[1,4],mobil:4,model:[],modul:[],moment:8,mongo:8,monitor:[1,4,6,8,10],more:[1,8],mswin:[0,10],mswinsql:[0,10],mswinsqlweb:[0,10],multi:8,must:8,mutablemap:8,mutablesequ:8,myapikei:[0,10],myazur:[0,10],mydoch:[0,10],mygc:[0,10],mykei:[5,7,10],mykey2:[7,10],mynephobackend:[0,10],myrackspac:[0,10],myserv:[0,10],mysoftlayerbackend:[0,10],mysshkei:[0,10],mysuperpassword:[6,10],myten:[0,10],myuser:[0,10],name:[0,3,5,6,7,8,10],necessari:8,need:[1,7,8,10],nephopass:[0,10],nephoscal:[0,8,9,10],nephoscale_network_to_dict:8,nest:8,network:8,network_id:8,neutron:8,new_fil:[7,10],new_id:[5,10],new_kei:8,new_nam:[0,8,10],newstat:[0,10],next:8,nmiie:[5,10],nmiieowibaakca:[5,10],no_ssh:8,node:8,none:8,normal:8,northeast:[0,7,10],not_found:8,noth:8,notify_admin:8,notify_us:8,nova:8,now:[6,10],number:8,number_of_peopl:[6,10],number_of_serv:[6,10],obj_typ:8,object:8,objectfield:8,obtain:8,ocean:[0,10],off:[0,10],ohafkjhkjhkjah:[0,10],oinoh:[0,10],old:8,old_kei:8,older:1,onc:8,onli:[1,3,7,8,10],oodict:8,oodictyaml:8,oodictyamllock:8,ooiknlonnjnkcaqeatbbji1omhw2bs2va:[5,10],open:8,openssh:8,openstack:[0,4,8,9,10],openstack__1__architectur:[3,10],openstack__1__os_distro:[3,10],openstack__1__os_vers:[3,10],openstack_network_to_dict:8,openstack_subnet_to_dict:8,opensus:1,oper:8,option:[0,8,10],ord:[0,9,10],order:[1,5,8,10],oregon:[9,10],org:[3,10],orient:8,os_distro:[3,10],os_typ:[3,8,10],other:[1,8,9,10],otherwis:[1,3,7,8,10],our:[1,8,10],out:[1,4,8],outer:8,output:[8,10,11],over:8,own:[6,10],packag:1,page:[4,8],pair:8,param:8,paramet:[0,3,5,7,8,10],paramiko:8,paramikoshel:8,parent:[10,11],pars:8,part:8,pass:[6,8,10],passphras:8,password:[0,6,8,10],passwordless:[5,10],path:8,paulo:[9,10],pcre:1,pdf:1,pdflatex:1,perform:8,persist:8,ping:8,pip:1,plain:8,plan:[1,8],plan_id:8,playbook_path:8,plu:8,plugin:8,plugin_id:8,poihjoinpoimiqciha:[0,10],point:[1,8],poll_interv:[0,8,10],pop:8,port:[0,8,10],post:[0,5,6,7,10],power:8,predefin:8,premioum:[6,10],present:8,pretti:8,previous:[0,10],price:[0,10],print:8,priv:[5,10],privat:[0,5,8,10],private_dn:[7,10],private_ip:[7,10],private_kei:[0,8,10],probe:8,probe_ssh_onli:8,process:1,productcod:[7,10],progress:[3,10],project:[0,10],project_id:[0,10],promo50:[6,10],promo_cod:[6,10],proper:8,properli:8,properti:8,provid:[],proxi:8,pty:8,pub:8,public_ip:[7,8,10],publiccloud:[3,10],pure:8,put:[0,5,8,10],pyramid:[4,8],pyspher:1,python:[1,8],rackspac:[0,4,8,9,10],rackspace__1__build_cor:[3,10],rackspace__1__build_manag:[3,10],rackspace__1__build_rackconnect:[3,10],rackspace__1__opt:[3,10],rackspace__1__platform_target:[3,10],rackspace__1__release_build_d:[3,10],rackspace__1__release_id:[3,10],rackspace__1__release_vers:[3,10],rackspace__1__sourc:[3,10],rackspace__1__visible_cor:[3,10],rackspace__1__visible_manag:[3,10],rackspace__1__visible_rackconnect:[3,10],rackspace_first_gen:[9,10],rais:8,ram:[0,10],ramdiskid:[7,10],rdp:8,read:8,read_funct:8,readi:1,real:8,reboot:[7,8,10],reboot_machin:8,recommend:[1,8],record:8,recv:8,red:1,reentrant:8,refer:8,refresh:8,region:[0,8,9,10],relat:8,releas:8,relev:8,remov:8,remove_on_error:8,renam:[0,5,8,10],rename_backend:8,rename_machin:8,replac:8,repositori:1,repres:8,request:[0,2,3,5,6,7,8,9,10,11],requir:[0,1,3,5,7,8,10],reset:8,resiz:8,resize_machin:8,respons:[0,3,5,6,7,8,9,10,11],rest:[],restart:1,retri:8,revers:8,revis:1,rhel:[0,10],right:8,rlock:8,role:8,roll:1,root:[0,8,10],rout:8,row:8,rsa:[0,5,8,10],rst:1,rule:[6,8,10],run:[1,7,8,10,11],run_playbook:8,same:[7,8,10],sao:[9,10],save:8,schema:8,script:[7,8,10,11],script_id:8,script_param:8,search:[3,4,8,10],search_term:[3,8,10],secret:[0,10],see:8,seem:8,self:8,send:8,separ:8,seper:8,sequenc:8,server:[0,4,8,9,10],serverid:[3,10],servic:[1,2,4,6,8,10],set:[0,5,8,10],set_default_kei:8,set_machine_metadata:8,setdefault:8,setitem:8,setup:[6,8,10],setuptool:1,sever:8,share:8,shell:[],shell_command:[10,11],should:[1,8],shutdown:[7,10],side:8,similar:8,simpl:[1,8],simpli:1,singapor:[9,10],singl:[0,8,10],site:1,size:[0,7,8,10],size_id:8,size_nam:8,sle:[0,10],sleep:8,small:[0,10],socketio:8,softlay:[0,9,10],softlink:8,solv:1,some:[1,8],sound:8,sourc:[1,4,8],special:8,specif:[1,8],specifi:[0,8,10],sphinx:1,ssh:[0,5,8,10],ssh_command:8,ssh_port:8,ssh_user:8,stand:8,standard:8,star:[3,8,10],star_imag:8,start:[1,6,7,8,10],start_machin:8,state:[0,7,8,10],statement:8,statu:[0,1,3,7,10],stderr:8,stdout:8,step:[1,8],still:8,stop:[1,8],stop_machin:8,storag:8,store:8,str:8,stream:8,strfield:8,string:[0,3,5,7,8,10],structur:8,style:8,subclass:8,subnet:8,subscript:[0,10],subscription_id:[0,10],succe:8,sudo:[1,8],suffix:8,suitabl:8,superstronpassword:[0,10],supervisor:1,supervisorctl:1,supervisord:1,support:[],supported_provid:[9,10],suppos:1,syd:[9,10],sydnei:[0,9,10],system:[1,8],tag:[7,8,10],tail:1,take:8,talk:8,tenant:[0,10],tenant_nam:[0,8,10],term:[3,8,10],test:[1,8],text:[10,11],thei:8,them:8,thi:[0,1,3,5,6,7,8,10],thing:8,those:8,through:[],time:[1,8],timeout:8,timestamp:8,titl:[0,6,8,9,10],toggl:[0,8,10],toggle_backend:8,token:[0,6,10],tokyo:[9,10],too:8,tool:1,transform:8,treat:8,tri:8,trick:8,trigger:8,trystack:8,tupl:8,tuppl:8,tweak:1,two:[1,8],txt:[7,10],type:[8,10,11],unauthor:[2,10],unavail:[2,10],undeploi:8,undeploy_collectd:8,undeploy_plugin:8,undeploy_python_plugin:8,under:[1,8],underli:8,unicod:8,unit:8,unix:8,unlock:8,unstar:8,unus:8,updat:[3,8,10],update_metr:8,update_monitor:8,update_rul:8,update_user_set:8,upgrad:1,upload:8,upon:8,uptim:[7,8,10,11],url:[0,10],user376:[6,10],user:[0,5,8,10,11],user_detail:[6,10],userengin:8,usernam:[0,8,10],username_of_machin:[5,10],usual:8,utf:[0,3,5,6,7,9,10,11],uuid:[7,8,10],uwsgi:1,val:8,valid:8,valu:8,value_typ:8,varieti:8,variou:8,vcloud:[9,10],version:[0,1,4,8,9,10],via:[1,8],view:[],virginia:[9,10],virtual:[1,8],virtualenv:1,vmware:[9,10],vsphere:1,wai:8,wait:[0,10],want:8,weather:8,web:[1,4,8],webserv:[7,10],websocket:8,well:8,west:[9,10],what:8,whatev:8,when:[7,8,10],whenev:8,where:8,wherea:8,which:[0,1,8,10],whose:8,wide:1,window:8,wish:1,without:8,won:8,work:8,would:8,write:8,written:1,wsgi:8,x64:[3,10],xcode:1,xlarg:[0,10],xterm:8,yaml:8,yaml_rel_path:8,yield:[10,11],you:[0,1,4,6,8,9,10],your:[0,1,6,10],yum:1,zone:8,zypper:1},titles:["&lt;no title&gt;","Developer Guide","&lt;no title&gt;","&lt;no title&gt;","Welcome to mist.io&#8217;s documentation!","&lt;no title&gt;","&lt;no title&gt;","&lt;no title&gt;","Modules","&lt;no title&gt;","RESTful API","&lt;no title&gt;"],titleterms:{action:10,api:10,authent:10,backend:10,code:10,dal:8,deploy:1,develop:1,document:[1,4],error:10,guid:1,http:10,imag:10,indic:4,instal:1,kei:10,machin:10,method:8,mist:[1,4,8,10],model:8,modul:8,provid:10,rest:10,shell:[8,10],support:10,tabl:4,through:10,view:8,welcom:4}})