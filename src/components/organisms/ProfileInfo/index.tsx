import React from 'react'
import { MdOutlinePhoneAndroid } from 'react-icons/md'

import {
  Info,
  Profile,
  ProfileImage,
  SeparatorParagraph
} from './profileInfo.styles'
import Theme from '@/styles/theme.styles'
import { TextUI } from '@/components/atoms/TextUI'
import { AvatarUI } from '@/components/atoms/AvatarUI'
import { ProfileInfoProps } from './profileInfo.interface'
import { ParagraphUI } from '@/components/atoms/ParagraphUI'

export const ProfileInfo: React.FC<ProfileInfoProps> = ({ ...props }) => {
  return (
    <Profile>
      <ProfileImage>
        <AvatarUI size={{ xs: 40 }} />
      </ProfileImage>
      <Info>
        <SeparatorParagraph>
          <TextUI
            tag='p'
            text='Nombre'
            $color={theme => theme.palette.common.black}
            fontWeight={700}
            fontSize={{ xs: 15 }}
          />

          <TextUI
            tag='p'
            $color={theme => theme.palette.common.black}
            fontWeight={300}
            fontSize={{ xs: 14 }}
          />
        </SeparatorParagraph>

        <SeparatorParagraph>
          <TextUI
            tag='p'
            text=' Telefono'
            $color={theme => theme.palette.common.black}
            fontWeight={700}
            fontSize={{ xs: 15 }}
          />

          <ParagraphUI>
            <MdOutlinePhoneAndroid color={Theme.palette.primary.main} />
            <TextUI
              tag='p'
              $color={theme => theme.palette.common.black}
              text={`809829829`}
              fontWeight={300}
              fontSize={{ xs: 14 }}
            />
          </ParagraphUI>
        </SeparatorParagraph>

        <SeparatorParagraph>
          <TextUI
            tag='p'
            text='Correo'
            $color={theme => theme.palette.common.black}
            fontWeight={700}
            fontSize={{ xs: 15 }}
          />

          <TextUI
            tag='p'
            $color={theme => theme.palette.common.black}
            fontWeight={300}
            fontSize={{ xs: 14 }}
          />
        </SeparatorParagraph>
      </Info>
    </Profile>
  )
}
