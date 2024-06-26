import { AccountPageLayout } from "@/layouts/AccountLayout";
import EditAdressForm from "@/components/order/EditAdressForm/EditAdressForm";
import Link from "next/link";
import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function AddNewAddress() {
  const { t } = useTranslation("common", "account", "order");

  return (
    <>
      <div>
        <header className="border-b p-2 flex">
          <Link
            href="/account/AddressBook"
            className=" flex items-center hover:underline "
          >
            <ArrowBackIosNewIcon className="text-md pe-2" />
            <h1>Add a New Address</h1>
          </Link>
        </header>
        <EditAdressForm setAddressConfirm={setAddressConfirm} />
      </div>
    </>
  );
}

export default AddNewAddress;
AddNewAddress.getLayout = AccountPageLayout;
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "account", "order"])),
      // Will be passed to the page component as props
    },
  };
}
