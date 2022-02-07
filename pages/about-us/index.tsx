import Profile from "@components/Profile";

const AboutUs = () => {
  return (
    <>
      <div className="about">
        {/* hero */}
        <div className="about-hero"></div>
        <div className="text-center">
          <h1 className="about-content">Chúng tôi là ai</h1>
          <h5 className="about-subcontent">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque pellentesque mattis tortor vestibulum, leo non.
            Pharetra arcu egestas elit cras. Enim sollicitudin eleifend nibh
            tincidunt. Vulputate laoreet tempus id lacus quis sit id enim,
            tincidunt. Mattis mauris eu dui et nibh facilisis maecenas. Massa
            maecenas facilisis etiam est egestas neque. Dolor lacus, sed sit
            nulla. In nunc lobortis magna sed bibendum. Enim proin scelerisque a
            justo aliquet neque tristique.
          </h5>
        </div>
        <div className="about-profile">
          <div className="about-profile_inner">
            <div className="about-profile_inner-cards">
              <Profile
                name="Hoang Phuc"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem faucibus eget natoque condimentum blandit penatibus posuere amet. Neque purus elit in purus, erat sed. Magna mauris nunc augue ut enim."
                image="/images/avatar/hoangphuc.jpg"
              />
              <Profile
                name="Thien Phuc"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem faucibus eget natoque condimentum blandit penatibus posuere amet. Neque purus elit in purus, erat sed. Magna mauris nunc augue ut enim."
                image="/images/avatar/thienphuc.jpg"
              />
              <Profile
                name="Si Trong"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem faucibus eget natoque condimentum blandit penatibus posuere amet. Neque purus elit in purus, erat sed. Magna mauris nunc augue ut enim."
                image="/images/avatar/sitrong.jpg"
              />
            </div>
          </div>
          <div className="about-profile_inner">
            <div className="about-profile_inner-cards">
              <Profile
                name="Quyen Duc"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem faucibus eget natoque condimentum blandit penatibus posuere amet. Neque purus elit in purus, erat sed. Magna mauris nunc augue ut enim."
                image="/images/avatar/quyenduc.jpg"
              />
              <Profile
                name="Quang Dat"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem faucibus eget natoque condimentum blandit penatibus posuere amet. Neque purus elit in purus, erat sed. Magna mauris nunc augue ut enim."
                image="images/avatar/quangdat.jpg"
              />
              <Profile
                name="Viet Bach"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem faucibus eget natoque condimentum blandit penatibus posuere amet. Neque purus elit in purus, erat sed. Magna mauris nunc augue ut enim."
                image="images/avatar/vietbach.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
