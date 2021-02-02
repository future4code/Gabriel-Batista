import { Like,Dislike, LikeBox, ImgProfile, ProfileBox, MainpageContainer, } from "./styled/styledComponents";

export default function MainPage(pInfo) {



  return (
    <MainpageContainer>
      <ProfileBox>
        <ImgProfile style={{backgroundImage: "url(" + `${pInfo.pInfo.photo}` +")"}} />
        <div>
          <p>{pInfo.pInfo.name} {pInfo.pInfo.age}</p>
        </div>
        <p>{pInfo.pInfo.bio}</p>
      </ProfileBox>
      <LikeBox>
        <Dislike src='https://i.imgur.com/YHdvtHV.pnghttps://i.imgur.com/YHdvtHV.png' onClick={() => pInfo.dislikePerson()}></Dislike>
        <Like  src='https://i.imgur.com/SgeE7mK.png' onClick={() => pInfo.likePerson(pInfo.pInfo.id)}></Like>
      </LikeBox>
    </MainpageContainer>
  );
}


