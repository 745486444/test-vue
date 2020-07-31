<template>
    <div class="wrap">
        <h3 class="form-title">查询模块</h3>
        <el-form :inline="true" class="search-form">
            <el-form-item label="审批人">
                <el-input v-model="formInline.user" placeholder="审批人"></el-input>
            </el-form-item>
            <el-form-item label="审批人">
                <el-input v-model="formInline.user" placeholder="审批人"></el-input>
            </el-form-item>
            <el-form-item label="审批人">
                <el-input v-model="formInline.user" placeholder="审批人"></el-input>
            </el-form-item>
            <el-form-item label="活动时间">
                <el-col :span="11">
                    <el-date-picker type="date" placeholder="选择日期" style="width: 100%;"></el-date-picker>
                </el-col>
                <el-col class="line" :span="2"> -</el-col>
                <el-col :span="11">
                    <el-time-picker placeholder="选择时间" style="width: 100%;"></el-time-picker>
                </el-col>
            </el-form-item>
            <el-form-item label="活动区域">
                <el-select placeholder="活动区域" value="1">
                    <el-option label="区域一" value="1"></el-option>
                    <el-option label="区域二" value="2"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item class="search-btn">
                <el-button type="primary" size="small">查询</el-button>
                <el-button class="reset-btn" type="primary" size="small">重置</el-button>
            </el-form-item>
        </el-form>
                <h3 class="form-title">表单模块</h3>
                <el-form label-width="100px" class="page-form">
                    <el-form-item label="活动区域">
                        <el-select placeholder="请选择活动区域" value="1">
                            <el-option label="区域一" value="1"></el-option>
                            <el-option label="区域二" value="2"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="活动时间">
                        <el-col :span="11">
                            <el-form-item>
                                <el-date-picker type="date" placeholder="选择日期" style="width: 100%;"></el-date-picker>
                            </el-form-item>
                        </el-col>
                        <el-col class="line" :span="2">-</el-col>
                        <el-col :span="11">
                            <el-form-item>
                                <el-time-picker placeholder="选择时间" style="width: 100%;"></el-time-picker>
                            </el-form-item>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="即时配送">
                        <el-switch></el-switch>
                    </el-form-item>
                    <el-form-item label="活动性质">
                        <el-checkbox-group v-model="list">
                            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                            <el-checkbox label="地推活动" name="type"></el-checkbox>
                            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="特殊资源">
                        <el-radio-group>
                            <el-radio label="线上品牌商赞助"></el-radio>
                            <el-radio label="线下场地免费"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input type="password" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码">
                        <el-input type="password" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="年龄">
                        <el-input v-model.number="ruleForm.age"></el-input>
                    </el-form-item>
                    <el-form-item label="活动形式">
                        <el-input type="textarea" v-model="desc"></el-input>
                    </el-form-item>
                    <el-form-item class="submit-btn">
                        <el-button type="primary">提交</el-button>
                        <el-button class="cancel-btn">驳回</el-button>
                    </el-form-item>
                </el-form>
                <h3 class="form-title">页签模块</h3>
                <el-tabs v-model="activeName" class="horizontal-tab" @tab-click="handleClick">
                    <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
                    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
                    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
                    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
                </el-tabs>
                <el-radio-group v-model="tabPosition" class="mt30">
                    <el-radio-button label="top">待审批</el-radio-button>
                    <el-radio-button label="right">已审批</el-radio-button>
                </el-radio-group>
                <h3 class="form-title">弹窗表单模块</h3>
                <el-button @click="showDialog">
                    双表单
                </el-button>
                <el-button @click="showDialog2">
                    单表单
                </el-button>
                <el-dialog title="双表单设置" :visible.sync="dialogFormVisible" width="800px">
                    <el-form label-width="100px">
                        <el-row :gutter="20">
                            <el-col :span="12">
                                <el-form-item label="归属机构" class="group">
                                    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                                    <el-button type="primary" size="small"><i class="el-icon-search"></i></el-button>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="密码">
                                    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row :gutter="20">
                            <el-col :span="12">
                                <el-form-item label="活动区域">
                                    <el-select placeholder="请选择活动区域" value="1">
                                        <el-option label="区域一" value="1"></el-option>
                                        <el-option label="区域二" value="2"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="角色类型">
                                    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row :gutter="20">
                            <el-col :span="24">
                                <el-form-item label="归属机构">
                                    <el-input type="textarea" v-model="desc"></el-input>
                                </el-form-item>
                            </el-col>

                        </el-row>
                    </el-form>


                    <div slot="footer" class="dialog-footer">
                        <el-button type="primary" size="small">确 定
                        </el-button>
                        <el-button size="small">关 闭</el-button>
                    </div>
                </el-dialog>
                <el-dialog title="单表单设置" :visible.sync="dialogFormVisible2" width="400px">
                    <el-form label-width="100px">

                        <el-form-item label="归属机构">
                            <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                        </el-form-item>
                    </el-form>


                    <div slot="footer" class="dialog-footer">
                        <el-button type="primary" size="small">确 定
                        </el-button>
                        <el-button size="small">关 闭</el-button>
                    </div>
                </el-dialog>
    </div>
</template>

<script src="./Demo.js"></script>

<style lang="less" scoped>
    @import '../../assets/less/common.less';
</style>
