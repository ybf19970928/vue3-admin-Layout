<template>
    <span>UserInfo页面</span>
    <button @click="download">点击下载</button>
</template>

<script>
import JSZip from'jszip'
import FileSaver from'file-saver'
import axios from 'axios'

export default {
    name: 'UserInfo',
    setup() {
        const imgDataUrl = [
            {
                name: 'test',
                url: 'https://images.dog.ceo/breeds/beagle/n02088364_13464.jpg'
            },
            {
                name: 'test1',
                url: 'https://images.dog.ceo/breeds/hound-ibizan/n02091244_2941.jpg'
            },
            {
                name: 'test2',
                url: 'https://images.dog.ceo/breeds/terrier-border/n02093754_5522.jpg'
            }
        ]
        const getImgArrayBuffer = (url) => {
            return axios({
                url,
                method: 'get',
                responseType: 'blob'
            })
        };
        const BatchDownload = () => {
        const zip = new JSZip();
        let cache = {};
        let promises = [];
        const isImgFolder = zip.folder("images");

        for (let item of imgDataUrl) {
          const promise= getImgArrayBuffer(item.url).then(data => {
            // 下载文件, 并存成ArrayBuffer对象(blob)
            isImgFolder.file(`${item.name}.jpg`, data.data, { binary: true }); // 逐个添加文件
            cache[item.name] = data;
          });
          promises.push(promise);
        }

        Promise.all(promises).then(() => {
          zip.generateAsync({ type: "blob" }).then(content => {
            // 生成二进制流
            FileSaver.saveAs(content, 'example.zip'); // 利用file-saver保存文件  自定义文件名
          });
        }).catch(res=>{
            console.log('shibai')
        });
    }
    const download = () => {
        BatchDownload()
    }
    return {
        download
    }
    }
}
</script>

