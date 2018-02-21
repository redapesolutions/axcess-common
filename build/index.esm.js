import findKey from 'lodash/findKey';

const addToHistoryN = n => (value, old) => [value, ...old.filter(h => h !== value).slice(0, n - 1)];

const addToHistory = addToHistoryN(10);

const CategoryPrice = {
  Company_Profiles: 10,
  Financial_Comparison: 20,
  Certificate_of_Incorporation: 30,
  Certificate_of_Change_of_Name: 40,
  Certificate_of_Conversion_of_Company: 50,
  Corporate_Form_Images: 60,
  Attestation_of_Company_Good_Standing: 70,
  Business_Profiles: 80,
  Business_Registration_Certificate: 90,
  Business_Termination_Letter: 100,
  Business_Form_Images: 110,
  Particulars_of_Directors_Officers: 120,
  Particulars_of_Registered_Address: 130,
  Particulars_of_Share_Capital: 140,
  Particulars_of_Shareholder: 150,
};

const DocumentCategoryType = {
  Company_Profiles: 1,
  Financial_Comparison: 2,
  Certificate_of_Incorporation: 3,
  Certificate_of_Change_of_Name: 4,
  Certificate_of_Conversion_of_Company: 5,
  Corporate_Form_Images: 6,
  Attestation_of_Company_Good_Standing: 7,
  Business_Profiles: 8,
  Business_Registration_Certificate: 9,
  Business_Termination_Letter: 10,
  Business_Form_Images: 11,
  Particulars_of_Directors_Officers: 12,
  Particulars_of_Registered_Address: 13,
  Particulars_of_Share_Capital: 14,
  Particulars_of_Shareholder: 15,
};

const buildDocument = (title, category) => {
  const categoryKey = findKey(DocumentCategoryType, x => x === category);
  return {
    title,
    category,
    price: CategoryPrice[categoryKey],
  }
};

const DefaultDocumentTypes = {
  Company: [
    buildDocument('COMPANY PROFILE', 1),
    buildDocument('CERTIFICATES OF INCORPORATION/REGISTRATION', 3),
    buildDocument('PARTICULAR OF REGISTERED ADDRESS', 13),
    buildDocument('PARTICULAR OF DIRECTORS/OFFICERS', 12),
  ],
  Business: [
    buildDocument('BUSINESS PROFILE', 8),
  ]
};

export { addToHistoryN, addToHistory, DocumentCategoryType, buildDocument, DefaultDocumentTypes, CategoryPrice };
//# sourceMappingURL=index.esm.js.map
