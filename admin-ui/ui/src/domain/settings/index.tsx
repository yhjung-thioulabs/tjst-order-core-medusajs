import React from "react"
import { Route, Routes } from "react-router-dom"
import { useTranslation } from "react-i18next"
import SettingsCard from "../../components/atoms/settings-card"
import Spacer from "../../components/atoms/spacer"
import SettingContainer from "../../components/extensions/setting-container"
import SettingsPageErrorElement from "../../components/extensions/setting-container/setting-error-element"
import FeatureToggle from "../../components/fundamentals/feature-toggle"
import ArrowUTurnLeft from "../../components/fundamentals/icons/arrow-uturn-left"
import ChannelsIcon from "../../components/fundamentals/icons/channels-icon"
import CoinsIcon from "../../components/fundamentals/icons/coins-icon"
import CrosshairIcon from "../../components/fundamentals/icons/crosshair-icon"
import GearIcon from "../../components/fundamentals/icons/gear-icon"
import HappyIcon from "../../components/fundamentals/icons/happy-icon"
import KeyIcon from "../../components/fundamentals/icons/key-icon"
import MapPinIcon from "../../components/fundamentals/icons/map-pin-icon"
import TaxesIcon from "../../components/fundamentals/icons/taxes-icon"
import UsersIcon from "../../components/fundamentals/icons/users-icon"
import { useSettings } from "../../providers/setting-provider"
import CurrencySettings from "./currencies"
import Details from "./details"
import PersonalInformation from "./personal-information"
import Regions from "./regions"
import ReturnReasons from "./return-reasons"
import Taxes from "./taxes"
import Users from "./users"

type SettingsCardType = {
  heading: string
  description: string
  icon?: React.ComponentType
  to: string
  feature_flag?: string
}

const settings: SettingsCardType[] = [
  // {
  //   heading: "API 키 관리",
  //   description: "API 키를 생성하고 관리합니다.",
  //   icon: KeyIcon,
  //   to: "/a/publishable-api-keys",
  //   feature_flag: "publishable_api_keys",
  // },
  {
    heading: "통화 관리",
    description: "매장의 통화를 관리합니다.",
    icon: CoinsIcon,
    to: "/a/settings/currencies",
  },
  {
    heading: "관리자 정보 관리",
    description: "관리자 이름 및 언어를 관리합니다.",
    icon: HappyIcon,
    to: "/a/settings/personal-information",
  },
  {
    heading: "지역 관리",
    description: "운영하는 지역 별로 배송, 결제 및 주문 처리를 관리합니다.",
    icon: MapPinIcon,
    to: "/a/settings/regions",
  },
  {
    heading: "반품 관리",
    description: "반품된 품목의 사유를 관리합니다.",
    icon: ArrowUTurnLeft,
    to: "/a/settings/return-reasons",
  },
  {
    heading: "판매 채널 관리",
    description: "여러 판매 채널(웹사이트, 앱, 오프라인 매장 POS)에서 사용할 제품을 관리합니다.",
    icon: ChannelsIcon,
    feature_flag: "sales_channels",
    to: "/a/sales-channels",
  },
  {
    heading: "매장 정보 관리",
    description: "매장의 세부 정보를 관리합니다.",
    icon: CrosshairIcon,
    to: "/a/settings/details",
  },
  {
    heading: "세금 관리",
    description: "지역 및 제품 전반의 세금을 관리합니다.",
    icon: TaxesIcon,
    to: "/a/settings/taxes",
  },
  {
    heading: "사용자 관리",
    description: "매장을 관리하는 사용자 그룹을 관리합니다.",
    icon: UsersIcon,
    to: "/a/settings/team",
  },
]

const renderCard = ({
  heading,
  description,
  icon,
  to,
  feature_flag,
}: SettingsCardType) => {
  const Icon = icon || GearIcon

  const card = (
    <SettingsCard
      heading={heading}
      description={description}
      icon={<Icon />}
      to={to}
    />
  )

  if (feature_flag) {
    return <FeatureToggle featureFlag={feature_flag}>{card}</FeatureToggle>
  }

  return card
}

const SettingsIndex = () => {
  const { getCards } = useSettings()

  const extensionCards = getCards()

  const { t } = useTranslation()

  return (
    <div className="gap-y-xlarge flex flex-col">
      <div className="gap-y-large flex flex-col">
        <div className="gap-y-2xsmall flex flex-col">
          <h2 className="inter-xlarge-semibold">General</h2>
          <p className="inter-base-regular text-grey-50">
            {t(
              "settings-manage-the-general-settings-for-your-store",
              "Manage the general settings for your store"
            )}
          </p>
        </div>
        <div className="medium:grid-cols-2 gap-y-xsmall grid grid-cols-1 gap-x-4">
          {settings.map((s) => renderCard(s))}
        </div>
      </div>
      {extensionCards.length > 0 && (
        <div className="gap-y-large flex flex-col">
          <div className="gap-y-2xsmall flex flex-col">
            <h2 className="inter-xlarge-semibold">Extensions</h2>
            <p className="inter-base-regular text-grey-50">
              {t(
                "settings-manage-the-settings-for-your-store-apos-s-extensions",
                "Manage the settings for your store&apos;s extensions"
              )}
            </p>
          </div>
          <div className="medium:grid-cols-2 gap-y-xsmall grid grid-cols-1 gap-x-4">
            {getCards().map((s) =>
              renderCard({
                heading: s.label,
                description: s.description,
                icon: s.icon,
                to: `/a/settings${s.path}`,
              })
            )}
          </div>
        </div>
      )}
      <Spacer />
    </div>
  )
}

const Settings = () => {
  const { getSettings } = useSettings()

  return (
    <Routes>
      <Route index element={<SettingsIndex />} />
      <Route path="/details" element={<Details />} />
      <Route path="/regions/*" element={<Regions />} />
      <Route path="/currencies" element={<CurrencySettings />} />
      <Route path="/return-reasons" element={<ReturnReasons />} />
      <Route path="/team" element={<Users />} />
      <Route path="/personal-information" element={<PersonalInformation />} />
      <Route path="/taxes/*" element={<Taxes />} />
      {getSettings().map((s) => (
        <Route
          key={s.path}
          path={s.path}
          element={<SettingContainer Page={s.Page} />}
          errorElement={<SettingsPageErrorElement origin={s.origin} />}
        />
      ))}
    </Routes>
  )
}

export default Settings
