<script setup lang="ts">

</script>

<template>
  <section class="my-[50px] sm:mb-[200px]">
    <div>
      <div class="text-center font-extrabold text-[#49BBBD] text-[30px] sm:text-[64px]">Affordable pricing
      </div>
    </div>
    <div
        class="grid grid-cols-2 justify-between px-[10px] sm:flex sm:justify-center gap-[10px] sm:gap-[30px] mt-[30px]">
      <div class="flex-col border sm:w-[370px] sm:h-[436px] ">
        <div class="text-[#49BBBD] font-bold text-[15px] p-[10px] sm:p-[20px]">Like a pussy</div>
        <div> <span class="text-[30px] p-[10px] font-bold sm:text-[48px]  sm:pl-[40px]">Free</span> /
          forever</div>
        <div class=" text-[#2D3436] py-[10px] sm:text-[18px] sm:pl-[40px]"><el-icon><CircleCheckFilled /></el-icon> Components-driven system</div>
        <div class=" text-[#2D3436] py-[10px] sm:text-[18px] sm:pl-[40px]"><el-icon><CircleCheckFilled /></el-icon> Sales-boosting landing pages</div>
        <div class=" text-[#2D3436] py-[10px] sm:text-[18px] sm:pl-[40px]"><el-icon><CircleCheckFilled /></el-icon> Awesome Feather icons pack</div>
        <div
            class=" mt-[105px] text-center border flex justify-center sm:ml-[32px] sm:p-[5px] rounded-[20px] sm:w-[306px]">
          Try for free</div>

      </div>
      <div class="flex-col border sm:w-[370px] sm:h-[436px]">
        <div class="text-[#49BBBD] font-bold text-[15px] p-[10px] sm:p-[20px]">👤 Individual</div>
        <div> <span class="text-[30px] sm:pl-[40px] p-[10px] font-bold sm:text-[48px]">$24</span> / month
        </div>
        <div class="text-[#2D3436] py-[10px] sm:text-[18px] sm:pl-[40px]"><el-icon color="yellow"><CircleCheckFilled /></el-icon> Components-driven system</div>
        <div class="text-[#2D3436] py-[10px] sm:text-[18px] sm:pl-[40px]"><el-icon color="yellow"><CircleCheckFilled /></el-icon> Sales-boosting landing pages</div>
        <div class="text-[#2D3436] py-[10px] sm:text-[18px] sm:pl-[40px]"><el-icon color="yellow"><CircleCheckFilled /></el-icon> Awesome Feather icons pack</div>
        <div class="text-[#2D3436] py-[10px] sm:text-[18px] sm:pl-[40px]"><el-icon color="yellow"><CircleCheckFilled /></el-icon> Themed into 3 different styles</div>
        <div class="text-[#2D3436] py-[10px] sm:text-[18px] sm:pl-[40px]"><el-icon color="yellow"><CircleCheckFilled /></el-icon> Will help to learn Figma</div>
        <div
            class=" mt-[20px] text-center bg-[#49BBBD] flex justify-center sm:ml-[32px]  sm:p-[5px] rounded-[20px] sm:w-[306px]">
          Regular license</div>
      </div>
      <div class="flex-col border sm:w-[370px] sm:h-[436px]">
        <div class="text-[#49BBBD] font-bold text-[15px] p-[10px] sm:p-[20px]">👥 Corporate</div>
        <div> <span class="text-[30px] p-[10px] sm:pl-[40px] font-bold sm:text-[48px]">$12</span> / editor
        </div>
        <div class="text-[#2D3436] py-[10px] sm:text-[18px] sm:pl-[40px]"><el-icon color="green"><CircleCheckFilled /></el-icon> Components-driven system</div>
        <div class="text-[#2D3436] py-[10px] sm:text-[18px] sm:pl-[40px]"><el-icon color="green"><CircleCheckFilled /></el-icon> Sales-boosting landing pages</div>
        <div class="text-[#2D3436] py-[10px] sm:text-[18px] sm:pl-[40px]"><el-icon color="green"><CircleCheckFilled /></el-icon> Awesome Feather icons pack</div>
        <div class="text-[#2D3436] py-[10px] sm:text-[18px] sm:pl-[40px]"><el-icon color="green"><CircleCheckFilled /></el-icon> Themed into 3 different styles</div>
        <div
            class="mt-[65px] text-center border flex justify-center sm:ml-[32px] sm:p-[5px] rounded-[20px] sm:w-[306px]">
          Extended license</div>
      </div>

    </div>
  </section>

  <section class="  w-full flex justify-center items-center ">
    <div class=" sm:w-[80%] bg-[#252641] rounded-[20px]  py-[50px] flex flex-col items-center">
      <div class="text-center text-[white] font-semibold text-[20px] sm:text-[36px]">Online coaching lessons
        for remote learning.</div>
      <div class="text-center text-[white] mt-[20px] sm:text-[24px] sm:w-[1259px]">Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing
        elit,
        sed do eiusmod tempor</div>
      <div
          class="bg-[#49BBBD] font-bold sm:mb-[30px] mt-[30px] sm:mt-[60px] rounded-[10px] text-[white] sm:text-[16px] p-[10px]">
        <button>Start learning
          now</button>
      </div>
    </div>


  </section>

  <section class="w-full mt-[50px] flex flex-col sm:items-center ">
    <div class="text-center font-semibold text-[20px] sm:text-[36px]">
      Online coaching lessons for remote learning
    </div>
    <div class=" mt-[50px] px-[10px] sm:w-[80%] mb-[30px]">
      <ul>
        <li class="flex gap-[20px] items-center py-[10px] ">
          <div class="w-[20px] h-[20px] rounded-[20px] bg-[#55EFC4]"></div>
          <el-collapse v-model="activeName" accordion>
          <el-collapse-item class="text-[#2D3436]" title="Lorem ipsum dolor sit amet" name="1">
            <div>
              Consistent with real life: in line with the process and logic of real
              life, and comply with languages and habits that the users are used to;
            </div>
          </el-collapse-item>
          </el-collapse>

        </li>
        <li class="flex gap-[20px] items-center  py-[10px]">
          <div class="w-[20px] h-[20px] rounded-[20px] bg-[#55EFC4]"></div>
          <el-collapse v-model="activeName" accordion>
            <el-collapse-item class="text-[#2D3436]" title="Lorem ipsum dolor sit amet" name="1">
              <div>
                Consistent with real life: in line with the process and logic of real
                life, and comply with languages and habits that the users are used to;
              </div>
            </el-collapse-item>
          </el-collapse>
        </li>
        <li class="flex gap-[20px] items-center  py-[10px]">
          <div class="w-[20px] h-[20px] rounded-[20px] bg-[#55EFC4]"></div>
          <el-collapse v-model="activeName" accordion>
            <el-collapse-item class="text-[#2D3436]" title="Lorem ipsum dolor sit amet" name="1">
              <div>
                Consistent with real life: in line with the process and logic of real
                life, and comply with languages and habits that the users are used to;
              </div>
            </el-collapse-item>
          </el-collapse>
        </li>
        <li class="flex gap-[20px] items-center  py-[10px] ">
          <div class="w-[20px] h-[20px] rounded-[20px] bg-[#55EFC4]"></div>
          <el-collapse v-model="activeName" accordion>
          <el-collapse-item class="text-[#2D3436]" title="Lorem ipsum dolor sit amet" name="1">
            <div>
              Consistent with real life: in line with the process and logic of real
              life, and comply with languages and habits that the users are used to;
            </div>
          </el-collapse-item>
            </el-collapse>
        </li>
        <li class="flex gap-[20px] items-center  py-[10px] ">
          <div class="w-[20px] h-[20px] rounded-[20px] bg-[#55EFC4]"></div>
          <el-collapse v-model="activeName" accordion>
          <el-collapse-item class="text-[#2D3436]" title="Lorem ipsum dolor sit amet" name="1">
            <div>
              Consistent with real life: in line with the process and logic of real
              life, and comply with languages and habits that the users are used to;
            </div>
          </el-collapse-item>
            </el-collapse>
        </li>
      </ul>
    </div>
  </section>

  <section
      class="w-full mt-[50px] bg-[#9DCCFF] py-[50px] sm:pt-[80px] mb-[100px] pb-[120px] sm:pb-[200px] relative ">
    <div class="text-[25px] sm:text-[36px] text-[#2D3436] font-semibold pl-[80px] sm:pl-[150px]">What our
      students have to say
    </div>
    <ul class="flex flex-col sm:flex-row gap-[40px] items-center mt-[30px] sm:w-[90%] sm:pl-[180px]">
      <li class="flex bg-[white] gap-[10px] rounded-[20px] w-[90%] sm:flex-col sm:items-center">
        <div class="w-[100px] h-[100px] bg-[url(@/assets/images/anh1.png)] bg-cover sm:mb-[10px]"></div>
        <div class="flex flex-col w-[80%]">
          <div class="text-[#2D3436] font-semibold text-[20px] sm:text-center sm:mb-[30px]">Bulkin Simons
          </div>
          <div class="text-[#696984] sm:text-center">Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmodadipiscing elit, sed do eiusmod</div>
        </div>
      </li>
      <li class="flex bg-[white] gap-[10px] rounded-[20px] w-[90%] sm:flex-col sm:items-center">
        <div class="w-[100px] h-[100px] bg-[url(@/assets/images/anh1.png)] bg-cover  sm:mb-[10px]"></div>
        <div class="flex flex-col w-[80%]">
          <div class="text-[#2D3436] font-semibold text-[20px] sm:text-center sm:mb-[30px]">Bulkin Simons
          </div>
          <div class="text-[#696984] sm:text-center">Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmodadipiscing elit, sed do eiusmod</div>
        </div>
      </li>
      <li class="flex bg-[white] gap-[10px] rounded-[20px] w-[90%] sm:flex-col sm:items-center">
        <div class="w-[100px] h-[100px] bg-[url(@/assets/images/anh1.png)] bg-cover  sm:mb-[10px]"></div>
        <div class="flex flex-col w-[80%]">
          <div class="text-[#2D3436] font-semibold text-[20px] sm:text-center sm:mb-[30px]">Bulkin Simons
          </div>
          <div class="text-[#696984] sm:text-center">Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmodadipiscing elit, sed do eiusmod</div>
        </div>
      </li>
      <li class="flex bg-[white] gap-[10px] rounded-[20px] w-[90%] sm:flex-col sm:items-center">
        <div class="w-[100px] h-[100px] bg-[url(@/assets/images/anh1.png)] bg-cover  sm:mb-[10px]"></div>
        <div class="flex flex-col w-[80%]">
          <div class="text-[#2D3436] font-semibold text-[20px] sm:text-center sm:mb-[30px]">Bulkin Simons
          </div>
          <div class="text-[#696984] sm:text-center">Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmodadipiscing elit, sed do eiusmod</div>
        </div>
      </li>
    </ul>

    <div class="w-[80%] bg-[#252641] absolute bottom-[-40px] right-[45px] sm:bottom-[-60px] sm:right-[300px] flex flex-col
                        items-center p-[20px] rounded-[30px] sm:w-[60%] sm:flex-row sm:justify-between sm:p-[30px]">
      <div class="text-[#FFFFFF] font-semibold sm:text-[36px] pb-[20px]">APP is available for free</div>
      <div class="flex justify-center gap-[30px]">
        <div
            class="text-[white] sm:text-[24px] text-center font-semibold bg-[#29B9E7] p-[10px] rounded-[15px]">
          Android APP</div>
        <div
            class="text-[white] sm:text-[24px] text-center font-semibold bg-[#49BBBD] p-[10px] rounded-[15px]">
          IOS APP</div>
      </div>
    </div>
  </section>

  <section
      class="w-full mt-[50px] gap-[30px] flex flex-col sm:flex-row sm:justify-center sm:gap-[50px] items-center mb-[100px]">
    <div class="w-[80%] sm:w-[40%] flex flex-col   bg-[#2F327D1A] rounded-[20px] p-[10px]">
      <div
          class="w-[90%] h-[200px] sm:h-[300px] rounded-[20px] bg-[url(@/assets/images/lastest.png)] bg-cover mx-[20px] mt-[20px]">
      </div>
      <div class="text-[#252641] font-medium mx-[20px] mt-[10px]">Become a Teacher</div>
      <div class="mx-[20px] mt-[10px] text-[#696984]">Class, launched less than a year ago by Blackboard
        co-founder Michael Chasen, integrates exclusively...</div>
      <div
          class="left-0  mx-[20px] my-[20px] bg-[#49BBBD] text-[white] w-[40%] ml-[50%] text-center p-[5px] rounded-[10px]">
        Apply a Teacher</div>
    </div>

    <div class="w-[80%] sm:w-[40%] flex flex-col   bg-[#2F327D1A] rounded-[20px] p-[10px]">
      <div
          class="w-[90%] h-[200px] sm:h-[300px] rounded-[20px] bg-[url(@/assets/images/lastest.png)] bg-cover mx-[20px] mt-[20px]">
      </div>
      <div class="text-[#252641] font-medium mx-[20px] mt-[10px]">Become a Teacher</div>
      <div class="mx-[20px] mt-[10px] text-[#696984]">Class, launched less than a year ago by Blackboard
        co-founder Michael Chasen, integrates exclusively...</div>
      <div
          class="left-0  mx-[20px] my-[20px] bg-[#49BBBD] text-[white] w-[40%] ml-[50%] text-center p-[5px] rounded-[10px]">
        Apply a Teacher</div>
    </div>

  </section>

</template>

<style scoped>

</style>

<script lang="ts" setup>
import { ref } from 'vue'

const activeName = ref('1')
</script>