# DAMOIM-FRONT_END

금오공대 멋쟁이사자처럼 - 다모임 Front_End Repository

<h2>깃에서 Pull 하기 전에, 반드시!! commit 해두세요!!! </h2>

<br/>

<h2>중요사항 !!!</h2>
작업 공간 = 개인 브랜치(수연:sy, 승민:min)<br/>
git pull/merge --no-ff 할 경우,<br/>
반드시!!! switch/checkout main 해서 메인 브랜치로 이동 후에 진행<br/>
작업할 때에는 다시 개인 브랜치로 이동해서 진행<br/>

<h3>간단한 깃 사용법</h3>

온라인에서 생성한 GitHub Project와 연결

GitHub 페이지에서 Project 생성(원격 저장소)
컴퓨터에서 프로젝트 폴더 생성(로컬 저장소)
cmd창에서 프로젝트 폴더로 이동

> git add * => *는 모든 파일을 add (온점(.)도 같음) <br/>
> git branch => 사용 중인 브랜치 리스트 <br/>
> git branch -r => 원격 브랜치 리스트 <br/>
> git branch -a => 모든 브랜치 리스트 <br/>
> git branch -d 브랜치이름 => 브랜치 삭제 <br/>
> git checkout(switch) 브랜치이름 => 해당 브랜치로 이동 <br/>
> git clone 깃허브주소(http) => 원격 저장소로부터 프로젝트 받아옴 <br/>
> git commit -m ".." => 수정한 부분에 대한 주석 기능 <br/>
> git init => 초기화 <br/>
> git merge 브랜치이름 => 브랜치 병합 <br/>
> git pull [원격 저장소] [받을 브랜치] => 원격 저장소에서 브랜치로 받아오는 작업 <br/>
> ex) git pull origin min <br/>
> git push => 원격 저장소에 push <br/>
> git push --set-upstream => 원인 모를 에러로 push가 안될 경우 강제 push <br/>
> git push --set-upstream origin 브랜치 => 브랜치를 원격 저장소와 연결 <br/>
> git remote add origin 깃허브주소(http) => 원격 저장소 연결 <br/>
> git remote -v => 원격 저장소가 있는 곳과 로컬 저장소가 변경사항을 어디로 보내는 지 확인 <br/>
> git status => Git 상태 및 안내사항 <br/>
