import React from 'react'

const PropertiesHeader = () => {
  return (
      <div>
          <div className="dm-section-wrapper">
              <OverImgBgImgT2
                  overImgUrl={t('leftSideImg.src')}
                  overImgAlt={t('leftSideImg.alt')}
              />
          </div>
          <div className="dm-section-wrapper">
              <TitleTextBtnT2
                  text={t('text')}
                  btnTitle={t('btn.title')}
                  btnUrl={t('btn.url')}
                  btnTarget={t('btn.target')}
              />
          </div>
      </div>
  );
}

export default PropertiesHeader
