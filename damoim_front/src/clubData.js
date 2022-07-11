
import axios from "axios";
import { useState, useEffect } from "react";

const staticData = [
    {
        type: '예술',
        name: 'C.O.K',
        url: 'club/art1',
        img: '/image/C.O.K.png'
    },
    {
        type: '예술',
        name: '페이즈',
        url: 'club/art2',
        img: '/image/faze.png'
    },
    {
        type: '예술',
        name: '공데쌩',
        url: 'club/art3',
        img: '/image/godaessang.png'
    },
    {
        type: '예술',
        name: '금오사진예술연구회',
        url: 'club/art4',
        img: '/image/kumohphoto.png'
    },
    {
        type: '예술',
        name: '소리샘',
        url: 'club/art5',
        img: '/image/sorisam.jpg'
    },
    {
        type: '예술',
        name: '타니말라',
        url: 'club/art/5',
        img: '/image/tanimalla.png'
    },
    {
        type: '예술',
        name: 'Hello kit',
        url: 'club/art/5',
        img: '/image/Hello kit.png'
    },
    {
        type: '예술',
        name: '모아',
        url: 'club/art/5',
        img: '/image/MOA.png'
    },
    {
        type: '스포츠',
        name: 'COBRA',
        url: 'club/sport1',
        img: '/image/cobra.png'
    },
    {
        type: '스포츠',
        name: 'Golden Crows',
        url: 'club/sport2',
        img: '/image/Golden Crows.png'
    },
    {
        type: '스포츠',
        name: '한일탁구회',
        url: 'club/sport3',
        img: '/image/hanarl.png'
    },
    {
        type: '스포츠',
        name: '하이클리어',
        url: 'club/sport3',
        img: '/image/highclear.png'
    },
    {
        type: '스포츠',
        name: '금오태극회',
        url: 'club/sport4',
        img: '/image/kumohtaeguk.png'
    },
    {
        type: '스포츠',
        name: '태양농구회',
        url: 'club/sport5',
        img: '/image/taeyang.png'
    },
    {
        type: '스포츠',
        name: 'KumohtennisCKUB',
        url: 'club/sport6',
        img: '/image/tennis.png'
    },
    {
        type: '스포츠',
        name: 'SKIT',
        url: 'club/sport7',
        img: '/image/SKIT.png'
    },
    {
        type: '여행',
        name: '망고',
        url: 'club/travel1',
        img: '/image/mango.png'
    },
    {
        type: '종교 & 봉사',
        name: 'CCC',
        url: 'club/religion1',
        img: '/image/CCC.png'
    },
    {
        type: '종교 & 봉사',
        name: '두모사',
        url: 'club/religion2',
        img: '/image/dumosa.png'
    },
    {
        type: '종교 & 봉사',
        name: '미담장학회',
        url: 'club/religion3',
        img: '/image/midam.png'
    },
    {
        type: '종교 & 봉사',
        name: '나눔',
        url: 'club/religion4',
        img: '/image/nanum.jpeg'
    },
    {
        type: '종교 & 봉사',
        name: 'With Us',
        url: 'club/religion8',
        img: '/image/with us.png'
    },
    {
        type: '스터디',
        name: '멋쟁이사자처럼',
        url: 'club/study',
        img: '/image/likelion.png'
    },
    {
        type: '스터디',
        name: 'Auto-Mania',
        url: 'club/study',
        img: '/image/Auto-Mania.png'
    },
    {
        type: '스터디',
        name: 'ECRC',
        url: 'club/study',
        img: '/image/ECRC.png'
    },
    {
        type: '스터디',
        name: '묵향',
        url: 'club/study',
        img: '/image/mukhyang.png'
    },
    {
        type: '스터디',
        name: '거북신선화',
        url: 'club/study',
        img: '/image/turtle.png'
    }

]


const clubData = []

export const Data = () => {
    const [posts, setPosts] = useState([]);
    const URL = 'http://115.85.181.24:8000'

    useEffect(() => {
        axios.get(URL)
            .then(res => setPosts(res.data))
    })
}

export function getData() {
    return staticData;
}