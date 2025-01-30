import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: string; output: string; }
  JSON: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type AtrUsersUpdatedBetweenOutput = {
  __typename?: 'ATRUsersUpdatedBetweenOutput';
  LTV: Scalars['Float']['output'];
  /** The IDs of the events the user can access when their account is scoped for only certain events */
  accessEventIds?: Maybe<Array<Scalars['String']['output']>>;
  /** The IDs of the memberships the user can access when their account is scoped for only certain events */
  accessMembershipIds?: Maybe<Array<Scalars['String']['output']>>;
  /** Billing address associated with the user. */
  billingAddress?: Maybe<PartialAddress>;
  birthDate?: Maybe<Scalars['DateTime']['output']>;
  /** The company name of the user. */
  companyName?: Maybe<Scalars['String']['output']>;
  contactId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  /** User credits balance */
  credits?: Maybe<Scalars['Float']['output']>;
  e164Number?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  eventTickets: Array<Ticket>;
  firstName: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  gender?: Maybe<Gender>;
  hasMemberships: Scalars['Boolean']['output'];
  hasOrders: Scalars['Boolean']['output'];
  hasPassword: Scalars['Boolean']['output'];
  hasTickets: Scalars['Boolean']['output'];
  hasVerifiedEmail: Scalars['Boolean']['output'];
  history: HistoryConnection;
  id: Scalars['ID']['output'];
  /** User instagram username */
  instagramUsername?: Maybe<Scalars['String']['output']>;
  internationalPhoneNumber?: Maybe<InternationalPhoneNumberOutput>;
  isLoggedInWithLinkedAccount: Scalars['Boolean']['output'];
  isTwoFactorAuthenticationEnabled: Scalars['Boolean']['output'];
  lastLoginAttemptedAt: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  lastTimeLoggedInAt?: Maybe<Scalars['DateTime']['output']>;
  loginAttempts: Scalars['String']['output'];
  membershipTickets: Array<Ticket>;
  orders: OrderConnection;
  organization: Organization;
  otherUnsubscribeReason?: Maybe<Scalars['String']['output']>;
  /** Permision set based on roles */
  permissions: Array<Permission>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  /** User points balance */
  points: Scalars['Float']['output'];
  receiveScannerEmail?: Maybe<Scalars['Boolean']['output']>;
  /** unique uuid of a customer used to link to referral campaigns */
  referralId: Scalars['String']['output'];
  /** The region of the user, derived from the postal code of billing address. */
  region?: Maybe<Scalars['String']['output']>;
  roles: Array<Role>;
  scoutCommunications: Array<ScoutCommunication>;
  /** Shipping address associated with the user. */
  shippingAddress?: Maybe<PartialAddress>;
  /** Whether the shipping address matches the billing address. */
  shippingAddressMatchesBillingAddress: Scalars['Boolean']['output'];
  /** The Shopify user entry for the user if they have used the organization's Shopify store */
  shopifyUser?: Maybe<ShopifyUser>;
  tags: Array<Tag>;
  /** The tax number of the user. */
  taxNumber?: Maybe<Scalars['String']['output']>;
  unsubscribeReason?: Maybe<UnsubscribeReason>;
  updatedAt: Scalars['DateTime']['output'];
  usSegment?: Maybe<UsSegment>;
  usableForEmailMarketing?: Maybe<Scalars['Boolean']['output']>;
  usableForSMSMarketing?: Maybe<Scalars['Boolean']['output']>;
};


export type AtrUsersUpdatedBetweenOutputHistoryArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<HistoryOrderByInput>;
};


export type AtrUsersUpdatedBetweenOutputOrdersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderOrderByInput>;
  where?: InputMaybe<OrderWhereInput>;
};

export type AccessCode = {
  __typename?: 'AccessCode';
  /** The access code to use */
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  /** The membership this access code is associated with */
  isActive: Scalars['Boolean']['output'];
  membershipTypes: Array<MembershipType>;
  /** The number of comp entities this access code can be used for */
  quantityComp: Scalars['Float']['output'];
  /** The number of paid entities this access code can be used for */
  quantityPaid: Scalars['Float']['output'];
  /** The number of comp entities this access code has been used for */
  totalUsedComp: Scalars['Float']['output'];
  /** The number of paid entities this access code has been used for */
  totalUsedPaid: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type AccessCodeConnection = {
  __typename?: 'AccessCodeConnection';
  edges: Array<AccessCodeOutputEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** An individual access code */
export type AccessCodeInput = {
  /** The access code */
  accessCode: Scalars['String']['input'];
  /** Whether this access code is enabled */
  isEnabled: Scalars['Boolean']['input'];
  /** The number of tickets that can be purchased with this access code, set null for no limit */
  quantity?: InputMaybe<Scalars['Float']['input']>;
  /** The number of free tickets for this access code, set null for no limit */
  quantityFree?: InputMaybe<Scalars['Float']['input']>;
};

/** Portable representation of an access code. */
export type AccessCodeOutput = {
  __typename?: 'AccessCodeOutput';
  /** The access code */
  accessCode: Scalars['String']['output'];
  /** Is enabled */
  isEnabled: Scalars['Boolean']['output'];
  /** The link to the access code */
  link: Scalars['String']['output'];
  /** The number of tickets that can be purchased with this access code */
  quantity?: Maybe<Scalars['Float']['output']>;
  /** The number of free tickets that can been redeemed with this access code */
  quantityFree?: Maybe<Scalars['Float']['output']>;
  /** the number of free tickets that have been redeemed with this access code */
  quantityFreeUsed: Scalars['Float']['output'];
  /** The number of tickets that have been purchased with this access code */
  quantityUsed: Scalars['Float']['output'];
};

export type AccessCodeOutputEdge = {
  __typename?: 'AccessCodeOutputEdge';
  cursor: Scalars['String']['output'];
  node: AccessCodeOutput;
};

/** How you can create or update an access code. */
export type AccessCodeReleaseInput = {
  /** The access codes for the release */
  accessCodes: Array<AccessCodeInput>;
  /** The event id for the access code */
  eventId: Scalars['String']['input'];
  /** The release id for the access code, set null to create new */
  releaseId?: InputMaybe<Scalars['String']['input']>;
  /** The tickets that can be purchased with this access code */
  tickets: Array<AccessCodeTicketInput>;
};

/** Portable representation of an access code release. */
export type AccessCodeReleaseOutput = {
  __typename?: 'AccessCodeReleaseOutput';
  /** The access codes for the release */
  accessCodes: Array<AccessCodeOutput>;
  /** The event id for the access code */
  eventId: Scalars['String']['output'];
  /** The release id for the access code */
  releaseId: Scalars['String']['output'];
  /** The tickets that can be purchased with this access code */
  tickets: Array<AccessCodeTicketOutput>;
};

/** Access code ticket input for the event. */
export type AccessCodeTicketInput = {
  /** The ticket id */
  id: Scalars['String']['input'];
  /** The type of ticket */
  type: TicketTypeKind;
};

/** Access code ticket output for the event. */
export type AccessCodeTicketOutput = {
  __typename?: 'AccessCodeTicketOutput';
  /** The ticket id */
  id: Scalars['String']['output'];
  /** If ticket is hidden by the release */
  isHidden: Scalars['Boolean']['output'];
  /** The ticket name */
  name: Scalars['String']['output'];
  /** The ticket price */
  price?: Maybe<Scalars['Float']['output']>;
  /** The ticket quantity */
  quantity?: Maybe<Scalars['Float']['output']>;
  /** The type of ticket */
  type: TicketTypeKind;
  /** The ticket zone name */
  zoneName?: Maybe<Scalars['String']['output']>;
};

export type AccessCodeWhereInput = {
  releaseId: Scalars['String']['input'];
};

export type ActionEngagementRecordOutput = {
  __typename?: 'ActionEngagementRecordOutput';
  clickCount: Scalars['Float']['output'];
  label: Scalars['String']['output'];
};

export type ActiveCompetitionByTypeInput = {
  competitionType: CompetitionType;
  eventId: Scalars['String']['input'];
};

export type Activity = {
  __typename?: 'Activity';
  /** The admin that make this activity */
  admin?: Maybe<User>;
  createdAt: Scalars['DateTime']['output'];
  /** human readable description of what has gone */
  description?: Maybe<Scalars['String']['output']>;
  /** Detail is relevant to the action that cant be captured just by the refId and refType */
  detail: Scalars['JSON']['output'];
  fingerPrint?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  /** Origin of activities */
  origin: ActivityOrigin;
  /** Target entity id */
  refId?: Maybe<Scalars['String']['output']>;
  /** Target entity */
  refName?: Maybe<Scalars['String']['output']>;
  /** order:creation */
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  /** The user that an activity belongs to */
  user: User;
};

export type ActivityConnection = {
  __typename?: 'ActivityConnection';
  edges: Array<ActivityEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ActivityEdge = {
  __typename?: 'ActivityEdge';
  cursor: Scalars['String']['output'];
  node: Activity;
};

/** Origin of activities */
export enum ActivityOrigin {
  Admin = 'Admin',
  System = 'System',
  User = 'User'
}

export type ActivityWhereInput = {
  userId: Scalars['String']['input'];
};

export type AddAccessCodesToMembershipInput = {
  /** The access code to add to the membership type. */
  code: Scalars['String']['input'];
  membershipTypeIds: Array<Scalars['ID']['input']>;
  /** The max number of uses this access code can be used for this membership type when claiming complimentary tickets. */
  quantityComp: Scalars['Float']['input'];
  /** The max number of uses this access code can be used for this membership type when purchasing tickets. */
  quantityPaid: Scalars['Float']['input'];
};

export type AddAuditLogInput = {
  destinationOrganizationId?: InputMaybe<Scalars['String']['input']>;
  eventDetails?: InputMaybe<Scalars['JSON']['input']>;
  eventType: AuditEventType;
};

export type AddExhibitorInput = {
  allowCustomQuestions: Scalars['Boolean']['input'];
  email: Scalars['String']['input'];
  eventId: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type AddGatesToEventAddonInput = {
  addonId: Scalars['String']['input'];
  names: Array<Scalars['String']['input']>;
};

export type AddGatesToZoneInput = {
  names: Array<Scalars['String']['input']>;
  zoneId: Scalars['String']['input'];
};

export type AddPosTransactionInput = {
  amount: Scalars['Float']['input'];
  /** Selected payment method (allowed: cash, eftpos, cc). */
  method: PaymentProvider;
  returned?: InputMaybe<Scalars['Float']['input']>;
};

export type AddReminderToScoutCommunicationUserInput = {
  message?: InputMaybe<Scalars['String']['input']>;
  remindAt: Scalars['DateTime']['input'];
};

export type AddUnsubscribeReasonInput = {
  otherUnsubscribeReason?: InputMaybe<Scalars['String']['input']>;
  unsubscribeReason: UnsubscribeReason;
  userId: Scalars['String']['input'];
};

export type AddUnsubscribeReasonV2Input = {
  id: Scalars['String']['input'];
  unsubscribeReason: UnsubscribeReason;
  unsubscribeReasonDetails?: InputMaybe<Scalars['String']['input']>;
};

/** Represents additional info to be included with digital event or membership emails. */
export type AdditionalEmailInfoInput = {
  /** The text that will be displayed on the action button. Required if buttonUrl is provided. */
  buttonText?: InputMaybe<Scalars['String']['input']>;
  /** The url that the action button will link to. Required if buttonText is provided. */
  buttonUrl?: InputMaybe<Scalars['String']['input']>;
  /** Additional info to be included with digital event or membership emails. */
  text?: InputMaybe<Scalars['String']['input']>;
};

export type AddonUnion = EventAddon | MembershipAddon;

/** Address details. */
export type Address = {
  __typename?: 'Address';
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  formattedAddress?: Maybe<Scalars['String']['output']>;
  line1: Scalars['String']['output'];
  line2?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  suburb?: Maybe<Scalars['String']['output']>;
};

/** Address details. */
export type AddressInput = {
  city: Scalars['String']['input'];
  country: Scalars['String']['input'];
  formattedAddress?: InputMaybe<Scalars['String']['input']>;
  line1: Scalars['String']['input'];
  line2?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  suburb?: InputMaybe<Scalars['String']['input']>;
};

export type AdobeExperiencePlatformIntegration = {
  __typename?: 'AdobeExperiencePlatformIntegration';
  /** Also known as the API key */
  clientId: Scalars['String']['output'];
  clientSecret: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  customerDatasetId?: Maybe<Scalars['String']['output']>;
  customerEndpoint?: Maybe<Scalars['String']['output']>;
  customerSchemaRefId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  imsOrgId: Scalars['String']['output'];
  privateKeyBase64: Scalars['String']['output'];
  sandboxName: Scalars['String']['output'];
  scanDatasetId?: Maybe<Scalars['String']['output']>;
  scanEndpoint?: Maybe<Scalars['String']['output']>;
  scanSchemaRefId?: Maybe<Scalars['String']['output']>;
  technicalAccountId: Scalars['String']['output'];
  tenant: Scalars['String']['output'];
  ticketDatasetId?: Maybe<Scalars['String']['output']>;
  ticketEndpoint?: Maybe<Scalars['String']['output']>;
  ticketSchemaRefId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type AdobeExperiencePlatformIntegrationInput = {
  /** Also known as the API key */
  clientId: Scalars['String']['input'];
  clientSecret: Scalars['String']['input'];
  customerDatasetId?: InputMaybe<Scalars['String']['input']>;
  customerEndpoint?: InputMaybe<Scalars['String']['input']>;
  customerSchemaRefId?: InputMaybe<Scalars['String']['input']>;
  imsOrgId: Scalars['String']['input'];
  privateKeyBase64: Scalars['String']['input'];
  sandboxName: Scalars['String']['input'];
  scanDatasetId?: InputMaybe<Scalars['String']['input']>;
  scanEndpoint?: InputMaybe<Scalars['String']['input']>;
  scanSchemaRefId?: InputMaybe<Scalars['String']['input']>;
  technicalAccountId: Scalars['String']['input'];
  tenant: Scalars['String']['input'];
  ticketDatasetId?: InputMaybe<Scalars['String']['input']>;
  ticketEndpoint?: InputMaybe<Scalars['String']['input']>;
  ticketSchemaRefId?: InputMaybe<Scalars['String']['input']>;
};

export type AgeBreakDownOutput = {
  __typename?: 'AgeBreakDownOutput';
  reportData: Array<AgeBreakDownSegment>;
  reportType: ReportType;
  shouldHide: Scalars['Boolean']['output'];
};

export type AgeBreakDownSegment = {
  __typename?: 'AgeBreakDownSegment';
  ageRange: Scalars['String']['output'];
  percentage: Scalars['Float']['output'];
  total: Scalars['Float']['output'];
};

export type AppTicket = {
  __typename?: 'AppTicket';
  buyerInformation?: Maybe<AppTicketUserDetails>;
  email?: Maybe<Scalars['String']['output']>;
  eventAddonName?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  gateIds: Array<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  isEventAddon: Scalars['Boolean']['output'];
  isHold: Scalars['Boolean']['output'];
  isUsherDisabled: Scalars['Boolean']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  orderNumber?: Maybe<Scalars['String']['output']>;
  parentTicketNumber?: Maybe<Scalars['String']['output']>;
  scans: Array<AppTicketScan>;
  seatZone?: Maybe<Scalars['String']['output']>;
  status: TicketStatus;
  ticketNumber: Scalars['String']['output'];
  ticketTypeKind?: Maybe<Scalars['String']['output']>;
  ticketTypeName?: Maybe<Scalars['String']['output']>;
  user?: Maybe<AppTicketUserDetails>;
};

export type AppTicketScan = {
  __typename?: 'AppTicketScan';
  direction: Scalars['String']['output'];
  id: Scalars['String']['output'];
  scannedAt: Scalars['DateTime']['output'];
  type: Scalars['String']['output'];
};

export type AppTicketUserDetails = {
  __typename?: 'AppTicketUserDetails';
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
};

export type ApplyPromoCode = {
  promoCode: Scalars['String']['input'];
};

export type Artist = {
  __typename?: 'Artist';
  createdAt: Scalars['DateTime']['output'];
  genres: Array<Genre>;
  id: Scalars['ID']['output'];
  /** URL of the artist image */
  imageUrl?: Maybe<Scalars['String']['output']>;
  /** Name of the artist */
  name: Scalars['String']['output'];
  /** Source of the artist data, e.g. spotify */
  source?: Maybe<Scalars['String']['output']>;
  /** Source id of the artist, e.g. artist id from spotify */
  sourceId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type AssignScoutCommunicationUsersToAgentInput = {
  agentUserId: Scalars['String']['input'];
  scoutCommunicationId: Scalars['String']['input'];
  scoutCommunicationUserIds: Array<Scalars['String']['input']>;
};

export type AtrMembershipOrdersUpdatedBetweenInput = {
  /** The end date of the range to search provided in the organizations timezone. */
  endDate: Scalars['DateTime']['input'];
  /** The start date of the range to search provided in the organizations timezone. */
  startDate: Scalars['DateTime']['input'];
};

export type AtrMembershipOrdersUpdatedBetweenOutput = {
  __typename?: 'AtrMembershipOrdersUpdatedBetweenOutput';
  arcContactId: Scalars['String']['output'];
  arcMembershipId: Scalars['String']['output'];
  order: Order;
};

export type AudienceCountInput = {
  addonId?: InputMaybe<Array<Scalars['String']['input']>>;
  audience?: InputMaybe<BroadcastAudience>;
  eventId?: InputMaybe<Scalars['String']['input']>;
  membershipId?: InputMaybe<Scalars['String']['input']>;
  releaseId?: InputMaybe<Array<Scalars['String']['input']>>;
  ticketTypeId?: InputMaybe<Array<Scalars['String']['input']>>;
  transactionalType: BroadcastTransactionalType;
  zoneId?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Id of the broadcast audience. One broadcast only has one id. */
export type AudienceData = {
  __typename?: 'AudienceData';
  addonId?: Maybe<Array<Scalars['String']['output']>>;
  releaseId?: Maybe<Array<Scalars['String']['output']>>;
  ticketTypeId?: Maybe<Array<Scalars['String']['output']>>;
  zoneId?: Maybe<Array<Scalars['String']['output']>>;
};

/** Id of the broadcast audience. One broadcast only has one id. */
export type AudienceDataInput = {
  addonId?: InputMaybe<Array<Scalars['String']['input']>>;
  releaseId?: InputMaybe<Array<Scalars['String']['input']>>;
  ticketTypeId?: InputMaybe<Array<Scalars['String']['input']>>;
  zoneId?: InputMaybe<Array<Scalars['String']['input']>>;
};

export enum AuditEventType {
  ApiKeyCreate = 'API_KEY_CREATE',
  ApiKeyUpdate = 'API_KEY_UPDATE',
  ApiKeyView = 'API_KEY_VIEW',
  ReportExport = 'REPORT_EXPORT',
  SwitchOrganization = 'SWITCH_ORGANIZATION',
  UserExport = 'USER_EXPORT',
  UserImport = 'USER_IMPORT'
}

export type Automation = {
  __typename?: 'Automation';
  /** When to send the email */
  automationType: AutomationType;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  /** Active status. */
  isActive: Scalars['Boolean']['output'];
  /** Id of Mailchimp audience */
  listId?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  /** Subject of email */
  subject?: Maybe<Scalars['String']['output']>;
  /** Release Id of the source */
  targetReleaseId?: Maybe<Scalars['String']['output']>;
  /** Used to show what we are targeting */
  targetSource: ReportingFilterSource;
  /** Id of source */
  targetSourceId?: Maybe<Scalars['String']['output']>;
  /** Id of Mailchimp template */
  templateId?: Maybe<Scalars['Float']['output']>;
  /** Postmark template name */
  templateName?: Maybe<Scalars['String']['output']>;
  /** send time for a birthday email, only hour and minute are used */
  timeOfDay?: Maybe<Scalars['DateTime']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export enum AutomationType {
  Birthday = 'birthday',
  OrderAbandoned = 'orderAbandoned'
}

export type BarchartOutput = {
  __typename?: 'BarchartOutput';
  range: Scalars['String']['output'];
  value: Scalars['Float']['output'];
};

export type BillingDetails = {
  __typename?: 'BillingDetails';
  amountPaid?: Maybe<Scalars['Float']['output']>;
  cardBrand?: Maybe<Scalars['String']['output']>;
  cardExpiryMonth?: Maybe<Scalars['Float']['output']>;
  cardExpiryYear?: Maybe<Scalars['Float']['output']>;
  cardLast4?: Maybe<Scalars['String']['output']>;
  completedPaymentCount?: Maybe<Scalars['Float']['output']>;
  stripeCustomerId?: Maybe<Scalars['String']['output']>;
  totalFeeAmount?: Maybe<Scalars['Float']['output']>;
  totalPaymentCount?: Maybe<Scalars['Float']['output']>;
};

export type BrandingInput = {
  /** Organization background image. */
  background?: InputMaybe<Scalars['Upload']['input']>;
  /** Organization favicon. */
  favicon?: InputMaybe<Scalars['Upload']['input']>;
  /** Organization background image. */
  fullBackground?: InputMaybe<Scalars['Upload']['input']>;
  /** Grey scale option. */
  greyScale?: InputMaybe<GreyScale>;
  /** Organization logo. */
  logo?: InputMaybe<Scalars['Upload']['input']>;
  /** Organization mobile logo. */
  mobileLogo?: InputMaybe<Scalars['Upload']['input']>;
  /** Primary color. */
  primaryColor: Scalars['String']['input'];
  /** Secondary color. */
  secondaryColor: Scalars['String']['input'];
};

export type BrandingOutputBase = {
  __typename?: 'BrandingOutputBase';
  /** Organization background image. */
  background?: Maybe<ExtendedFile>;
  /** Organization favicon. */
  favicon?: Maybe<ExtendedFile>;
  /** Organization full background image. */
  fullBackground?: Maybe<ExtendedFile>;
  /** Grey scale option. */
  greyScale?: Maybe<GreyScale>;
  /** Organization logo. */
  logo?: Maybe<ExtendedFile>;
  /** Organization mobile logo. */
  mobileLogo?: Maybe<ExtendedFile>;
  /** Primary color. */
  primaryColor: Scalars['String']['output'];
  /** Secondary color. */
  secondaryColor: Scalars['String']['output'];
};

export type Broadcast = {
  __typename?: 'Broadcast';
  audienceData: AudienceData;
  /** When to send the email */
  audienceType?: Maybe<BroadcastAudience>;
  count?: Maybe<Scalars['Float']['output']>;
  createdAt: Scalars['DateTime']['output'];
  /** Array an object with the error responses from Postmark */
  errors?: Maybe<Scalars['JSON']['output']>;
  event?: Maybe<Event>;
  fromName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  marketingFilters?: Maybe<Array<BroadcastMarketingFilters>>;
  marketingFiltersV2?: Maybe<Array<BroadcastMarketingFiltersV2>>;
  marketingType?: Maybe<BroadcastMarketingType>;
  membership?: Maybe<Membership>;
  /** The rich text object */
  message: Scalars['String']['output'];
  postmarkStats?: Maybe<PostmarkEmailStatsOverviewOutput>;
  /** The reporting version to decide how to query. */
  reportingVersion: Scalars['Float']['output'];
  scheduledAt: Scalars['DateTime']['output'];
  status: BroadcastStatus;
  style?: Maybe<EmailStyle>;
  subject: Scalars['String']['output'];
  /** tag entityIds */
  tags: TagEntityIds;
  transactionalType?: Maybe<BroadcastTransactionalType>;
  type: BroadcastType;
  updatedAt: Scalars['DateTime']['output'];
};

/** Type of broadcast audience */
export enum BroadcastAudience {
  Addon = 'ADDON',
  AutomaticMembershipRenewal = 'AUTOMATIC_MEMBERSHIP_RENEWAL',
  ManualMembershipRenewal = 'MANUAL_MEMBERSHIP_RENEWAL',
  MembershipBuyers = 'MEMBERSHIP_BUYERS',
  RegistrationWaitlistCustomers = 'REGISTRATION_WAITLIST_CUSTOMERS',
  Release = 'RELEASE',
  ResaleWaitlistCustomers = 'RESALE_WAITLIST_CUSTOMERS',
  TicketBuyers = 'TICKET_BUYERS',
  TicketType = 'TICKET_TYPE',
  Zone = 'ZONE'
}

export enum BroadcastCommunicationType {
  Email = 'email',
  Sms = 'sms'
}

export type BroadcastDeliveryError = {
  __typename?: 'BroadcastDeliveryError';
  email: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type BroadcastDeliveryErrorsOutput = {
  __typename?: 'BroadcastDeliveryErrorsOutput';
  broadcastId: Scalars['String']['output'];
  deliveryErrors: Array<BroadcastDeliveryError>;
  totalCount: Scalars['Float']['output'];
};

export type BroadcastFilterCountInput = {
  broadcastCommunicationType: BroadcastCommunicationType;
  filters?: InputMaybe<Array<MarketingFiltersInput>>;
  filtersV2?: InputMaybe<Array<BroadcastMarketingFiltersV2Input>>;
};

export enum BroadcastFilterCriteria {
  Is = 'is',
  Not = 'not'
}

export enum BroadcastFilterStateType {
  EmailsOpened = 'EmailsOpened',
  Event = 'Event',
  Location = 'Location',
  Membership = 'Membership',
  Tag = 'Tag',
  TicketType = 'TicketType',
  Zone = 'Zone'
}

export enum BroadcastFilterType {
  Location = 'location',
  Region = 'region',
  Tag = 'tag',
  TicketBuyer = 'ticketBuyer',
  Waitlist = 'waitlist'
}

export type BroadcastLocationFilterOptions = {
  __typename?: 'BroadcastLocationFilterOptions';
  country: Array<ResponseLabelValue>;
  district: Array<ResponseLabelValue>;
  locality: Array<ResponseLabelValue>;
  region: Array<ResponseLabelValue>;
  state: Array<ResponseLabelValue>;
};

export type BroadcastMarketingFilters = {
  __typename?: 'BroadcastMarketingFilters';
  criteria?: Maybe<BroadcastFilterCriteria>;
  filterType: BroadcastFilterType;
  ids: Array<Scalars['String']['output']>;
};

export type BroadcastMarketingFiltersV2 = {
  __typename?: 'BroadcastMarketingFiltersV2';
  args: Scalars['String']['output'];
};

export type BroadcastMarketingFiltersV2Input = {
  args: Scalars['String']['input'];
};

export enum BroadcastMarketingFiltersV2Kind {
  Comp = 'Comp',
  EmailsOpened = 'EmailsOpened',
  Location = 'Location',
  Membership = 'Membership',
  PurchaseHistory = 'PurchaseHistory',
  Tag = 'Tag',
  TicketType = 'TicketType',
  Zone = 'Zone'
}

export type BroadcastMarketingFiltersV2Output = {
  __typename?: 'BroadcastMarketingFiltersV2Output';
  args: BroadcastMarketingFiltersV2Union;
};

export type BroadcastMarketingFiltersV2Union = CompArgs | EmailsOpenedArgs | LocationArgs | MembershipArgs | PurchaseHistoryArgs | TagArgs | TicketTypeArgs | ZoneArgs;

export enum BroadcastMarketingType {
  Custom = 'custom',
  OptIn = 'optIn'
}

export type BroadcastMarketingV2StateInput = {
  filterV2: BroadcastMarketingFiltersV2Input;
};

export type BroadcastMarketingV2StateOutput = {
  __typename?: 'BroadcastMarketingV2StateOutput';
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
  type: BroadcastFilterStateType;
};

export type BroadcastOutput = {
  __typename?: 'BroadcastOutput';
  audienceData: AudienceData;
  /** When to send the email */
  audienceType?: Maybe<BroadcastAudience>;
  count?: Maybe<Scalars['Float']['output']>;
  createdAt: Scalars['DateTime']['output'];
  /** Array an object with the error responses from Postmark */
  errors?: Maybe<Scalars['JSON']['output']>;
  event?: Maybe<Event>;
  fromName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  marketingFilters?: Maybe<Array<BroadcastMarketingFilters>>;
  marketingFiltersV2?: Maybe<Array<BroadcastMarketingFiltersV2Output>>;
  marketingType?: Maybe<BroadcastMarketingType>;
  membership?: Maybe<Membership>;
  /** The rich text object */
  message: Scalars['String']['output'];
  postmarkStats?: Maybe<PostmarkEmailStatsOverviewOutput>;
  recipients?: Maybe<Scalars['Float']['output']>;
  /** The reporting version to decide how to query. */
  reportingVersion: Scalars['Float']['output'];
  scheduledAt: Scalars['DateTime']['output'];
  /** The Broadcast email delivery stats from postmark */
  stats?: Maybe<PostmarkEmailStatsOverviewOutput>;
  status: BroadcastStatus;
  style?: Maybe<EmailStyle>;
  subject: Scalars['String']['output'];
  tags: TagEntityIds;
  transactionalType?: Maybe<BroadcastTransactionalType>;
  type: BroadcastType;
  /** The number of users that unsubscribed via this broadcast. */
  unsubscribeCount: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type BroadcastReportingInputBase = {
  /** Email broadcast ID or SMS broadcast ID depending on type field. */
  broadcastId: Scalars['String']['input'];
  communicationType: BroadcastCommunicationType;
  eventId?: InputMaybe<Scalars['String']['input']>;
  membershipId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
  waitlistUserId?: InputMaybe<Scalars['String']['input']>;
};

export type BroadcastReportingOrderInput = {
  /** Email broadcast ID or SMS broadcast ID depending on type field. */
  broadcastId: Scalars['String']['input'];
  communicationType: BroadcastCommunicationType;
  eventId?: InputMaybe<Scalars['String']['input']>;
  membershipId?: InputMaybe<Scalars['String']['input']>;
  orderId: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
  waitlistUserId?: InputMaybe<Scalars['String']['input']>;
};

export type BroadcastReportingOutput = {
  __typename?: 'BroadcastReportingOutput';
  clicksOpened: Scalars['Float']['output'];
  conversions: Scalars['Float']['output'];
  revenue: Scalars['Float']['output'];
  spamReported: Scalars['Float']['output'];
};

export type BroadcastReportingStatsInput = {
  broadcastId: Scalars['String']['input'];
  type: BroadcastType;
};

export type BroadcastStats = {
  __typename?: 'BroadcastStats';
  conversion?: Maybe<Scalars['Float']['output']>;
  opens?: Maybe<Scalars['Float']['output']>;
  revenue?: Maybe<Scalars['Float']['output']>;
  totalClicks?: Maybe<Scalars['Float']['output']>;
};

export enum BroadcastStatus {
  Draft = 'DRAFT',
  Scheduled = 'SCHEDULED',
  Sent = 'SENT',
  Test = 'TEST'
}

export type BroadcastTags = {
  isNew?: InputMaybe<Scalars['Boolean']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  type: TagType;
  value: Scalars['String']['input'];
};

export enum BroadcastTransactionalType {
  Event = 'Event',
  Membership = 'Membership'
}

export enum BroadcastType {
  Marketing = 'marketing',
  Transactional = 'transactional'
}

export type BroadcastUnsubscribe = {
  __typename?: 'BroadcastUnsubscribe';
  email: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type BroadcastUnsubscribesOutput = {
  __typename?: 'BroadcastUnsubscribesOutput';
  broadcastId: Scalars['String']['output'];
  totalCount: Scalars['Float']['output'];
  unsubscribes: Array<BroadcastUnsubscribe>;
};

export type BulkActionAccessCodesFromMembershipInput = {
  /** Array of access code IDs to perform the bulk action on from the membership */
  accessCodeIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type BulkExpoAttendeeInput = {
  attendees: Array<ExpoAttendeeInput>;
};

/** Bulk orders item type */
export type BulkOrdersItem = {
  __typename?: 'BulkOrdersItem';
  createdAt: Scalars['DateTime']['output'];
  errorMessage?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  processedAt?: Maybe<Scalars['DateTime']['output']>;
  /** bulk orders item status. */
  status?: Maybe<BulkOrdersItemStatus>;
  updatedAt: Scalars['DateTime']['output'];
};

/** Bulk order items status */
export enum BulkOrdersItemStatus {
  Failed = 'Failed',
  Success = 'Success'
}

/** Buyer information. */
export type BuyerInformation = {
  __typename?: 'BuyerInformation';
  city?: Maybe<Scalars['String']['output']>;
  /** Company name provided by the customer. */
  companyName?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  /** Postal code provided by the customer. Returns `null` if `UpdateOrderInput.deliveryMethod` is set to other than `eTicket`. */
  postalCode?: Maybe<Scalars['String']['output']>;
  /** Tax number provided by the customer. */
  taxNumber?: Maybe<Scalars['String']['output']>;
  travelDeals?: Maybe<Scalars['String']['output']>;
};

/** Buyer information. */
export type BuyerInformationInput = {
  city?: InputMaybe<Scalars['String']['input']>;
  /** Company name provided by the customer. */
  companyName?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  /** Postal code provided by the customer. Pass `null` if `UpdateOrderInput.deliveryMethod` is set to other than `eTicket`. */
  postalCode?: InputMaybe<Scalars['String']['input']>;
  /** Tax Number provided by the customer. */
  taxNumber?: InputMaybe<Scalars['String']['input']>;
  travelDeals?: InputMaybe<Scalars['String']['input']>;
};

export type ChargeLineItem = {
  __typename?: 'ChargeLineItem';
  createdAt: Scalars['DateTime']['output'];
  lineItemChargedCents: Scalars['Float']['output'];
  lineItemCount: Scalars['Float']['output'];
  lineItemTotalCents: Scalars['Float']['output'];
  lineItemUnchargedCents: Scalars['Float']['output'];
  orderId: Scalars['String']['output'];
};

export type ChargeMonthSummaryOutput = {
  __typename?: 'ChargeMonthSummaryOutput';
  lineItems: Array<ChargeLineItem>;
};

export type ChargeSummaryOutput = {
  __typename?: 'ChargeSummaryOutput';
  month: Scalars['DateTime']['output'];
  totalCents: Scalars['Float']['output'];
  totalChargedCents: Scalars['Float']['output'];
  totalUnchargedCents: Scalars['Float']['output'];
};

export type CodeReportItem = {
  __typename?: 'CodeReportItem';
  amount: Scalars['Float']['output'];
  code: Scalars['String']['output'];
  redeemed: Scalars['Float']['output'];
  sold: Scalars['Float']['output'];
};

export type CodeReportOutput = {
  __typename?: 'CodeReportOutput';
  counts: Scalars['Float']['output'];
  items: Array<CodeReportItem>;
};

export type CompArgs = {
  __typename?: 'CompArgs';
  eventId: Scalars['String']['output'];
  exclude: Scalars['Boolean']['output'];
  kind: BroadcastMarketingFiltersV2Kind;
};

export type Competition = {
  __typename?: 'Competition';
  bannerImage?: Maybe<ExtendedFile>;
  competitionState: CompetitionState;
  competitionType: CompetitionType;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  endDate?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  isCompetitionRunning: Scalars['Boolean']['output'];
  isPublished: Scalars['Boolean']['output'];
  prizes?: Maybe<Array<CompetitionPrize>>;
  promoter?: Maybe<Array<CompetitionReward>>;
  referralRewardValue?: Maybe<Scalars['Int']['output']>;
  startDate?: Maybe<Scalars['DateTime']['output']>;
  termsAndConditions?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type CompetitionCustomerReporting = {
  __typename?: 'CompetitionCustomerReporting';
  competitionBannerImage?: Maybe<ExtendedFile>;
  competitionEndDate: Scalars['DateTime']['output'];
  competitionEventLogo?: Maybe<ExtendedFile>;
  competitionEventTitle: Scalars['String']['output'];
  competitionId: Scalars['String']['output'];
  competitionReferralLink?: Maybe<Scalars['String']['output']>;
  competitionSharePageLink?: Maybe<Scalars['String']['output']>;
  competitionTitle: Scalars['String']['output'];
  entries: Scalars['Int']['output'];
  eventId: Scalars['String']['output'];
  isCompetitionRunning: Scalars['Boolean']['output'];
  referralsMade: Scalars['Int']['output'];
};

export type CompetitionOnsaleOutput = {
  __typename?: 'CompetitionOnsaleOutput';
  conversionRate: Scalars['Float']['output'];
  hasSalesOutsideOfCompetition: Scalars['Boolean']['output'];
  newCustomers: Scalars['Float']['output'];
  pageViews: Scalars['Float']['output'];
  revenue: Scalars['Float']['output'];
  ticketsSold: Scalars['Float']['output'];
  totalEntries: Scalars['Float']['output'];
  totalOrders: Scalars['Float']['output'];
};

export type CompetitionPrize = {
  __typename?: 'CompetitionPrize';
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<ExtendedFile>;
  prizeOrder: Scalars['Float']['output'];
  quantity: Scalars['Float']['output'];
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type CompetitionPrizeInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Upload']['input']>;
  prizeOrder?: InputMaybe<Scalars['Int']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CompetitionPromoterInput = {
  actionType: Scalars['String']['input'];
  enabled: Scalars['Boolean']['input'];
  platform: Scalars['String']['input'];
  value: Scalars['Int']['input'];
};

export type CompetitionRegistrationOutput = {
  __typename?: 'CompetitionRegistrationOutput';
  conversionRate: Scalars['Float']['output'];
  /** Total page views for the event details page. */
  eventDetailsPageViews: Scalars['Float']['output'];
  eventPageConversionRate: Scalars['Float']['output'];
  newCustomers: Scalars['Float']['output'];
  pageViews: Scalars['Float']['output'];
  registrationPageConversionRate: Scalars['Float']['output'];
  /** Total page views for the registration sign up form page. */
  registrationPageViews: Scalars['Float']['output'];
  totalEntries: Scalars['Float']['output'];
  totalRegistrations: Scalars['Float']['output'];
};

export type CompetitionReportingInput = {
  competitionId: Scalars['String']['input'];
  eventId: Scalars['String']['input'];
};

export type CompetitionReportingOnsaleOutput = {
  __typename?: 'CompetitionReportingOnsaleOutput';
  actionEngagement?: Maybe<Array<ActionEngagementRecordOutput>>;
  competition: CompetitionOnsaleOutput;
  promoter: PromoterOnsaleOutput;
};

export type CompetitionReportingRegistrationOutput = {
  __typename?: 'CompetitionReportingRegistrationOutput';
  actionEngagement?: Maybe<Array<ActionEngagementRecordOutput>>;
  competition: CompetitionRegistrationOutput;
  promoter: PromoterRegistrationOutput;
};

export type CompetitionReward = {
  __typename?: 'CompetitionReward';
  actionType: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  isEnabled: Scalars['Boolean']['output'];
  platform: Scalars['String']['output'];
  socialLinkType?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  value: Scalars['Float']['output'];
};

export enum CompetitionState {
  Ended = 'ENDED',
  Running = 'RUNNING',
  Upcoming = 'UPCOMING'
}

/** Competition type. */
export enum CompetitionType {
  Onsale = 'ONSALE',
  Registration = 'REGISTRATION'
}

export type CompleteStripeOAuth = {
  __typename?: 'CompleteStripeOAuth';
  redirectUrl?: Maybe<Scalars['String']['output']>;
};

export type Coordinate = {
  __typename?: 'Coordinate';
  /** Latitude */
  lat: Scalars['Float']['output'];
  /** Longitude */
  lng: Scalars['Float']['output'];
};

export type CoordinateInput = {
  /** Latitude */
  lat: Scalars['Float']['input'];
  /** Longitude */
  lng: Scalars['Float']['input'];
};

export type CopyEmailInput = {
  copyFromId: Scalars['String']['input'];
  emailTypes: Array<EmailType>;
  idType: Scalars['String']['input'];
  targetId: Scalars['String']['input'];
};

export type CreateArtistInput = {
  /** The artist's follower count. */
  followerCount?: InputMaybe<Scalars['Float']['input']>;
  /** The artist's music genres. */
  genres?: InputMaybe<Array<CreateGenreInput>>;
  /** The artist's Flicket ID. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The artist's image URL. */
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  /** The artist's name. */
  name: Scalars['String']['input'];
  /** Where the artist data is from, .e.g. Spotify. */
  source: Scalars['String']['input'];
  /** The artist's source ID. */
  sourceId: Scalars['String']['input'];
};

export type CreateAutomationInput = {
  automationType: AutomationType;
  listId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  subject?: InputMaybe<Scalars['String']['input']>;
  targetReleaseId?: InputMaybe<Scalars['String']['input']>;
  targetSource: ReportingFilterSource;
  targetSourceId?: InputMaybe<Scalars['String']['input']>;
  templateId?: InputMaybe<Scalars['Float']['input']>;
  templateName?: InputMaybe<Scalars['String']['input']>;
  timeOfDay?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CreateCompetitionInput = {
  bannerImage?: InputMaybe<Scalars['Upload']['input']>;
  competitionType: CompetitionType;
  description?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  prizes?: InputMaybe<Array<CompetitionPrizeInput>>;
  promoter?: InputMaybe<Array<CompetitionPromoterInput>>;
  referralRewardValue?: InputMaybe<Scalars['Int']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  termsAndConditions?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Represents additional info required to host a digital event. */
export type CreateDigitalInfoInput = {
  additionalEmailInfo?: InputMaybe<AdditionalEmailInfoInput>;
  /** The Postmark email template that is used to send digital pass codes. */
  emailTemplateId?: InputMaybe<Scalars['String']['input']>;
  /** The url that digital pass codes are appended to in order to access the digital event/membership. */
  url: Scalars['String']['input'];
};

export type CreateEmailCustomizationInput = {
  emailType: EmailType;
  eventId?: InputMaybe<Scalars['String']['input']>;
  membershipId?: InputMaybe<Scalars['String']['input']>;
  pointItemId?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<EmailCustomizationStatus>;
};

export type CreateEventAddonInput = {
  /** Image banner specific for a ticket type on the print at home ticket */
  addonImage?: InputMaybe<Scalars['Upload']['input']>;
  /** The brief description of the addon. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Indicates whether naming the addon is possible or not. */
  enableNaming: Scalars['Boolean']['input'];
  /** The event id that is associated with the addon. */
  eventId: Scalars['String']['input'];
  /** Whether hide QR code on ticket. */
  hideQRCode?: InputMaybe<Scalars['Boolean']['input']>;
  /** Images for the ticket gallery */
  imageGallery?: InputMaybe<Array<ImageGalleryItemInput>>;
  insideFee?: InputMaybe<Scalars['Float']['input']>;
  /** The active status of the addon. */
  isActive: Scalars['Boolean']['input'];
  /** The name of the addon. */
  name: Scalars['String']['input'];
  namingFields: Array<FormFieldInput>;
  /** The price associated with the addon. */
  price: Scalars['Float']['input'];
  /** Maximum quantity to be sold for the addon. */
  quantity: Scalars['Float']['input'];
  /** The restrictions applied to the addon. */
  restrictions?: InputMaybe<Scalars['String']['input']>;
};

export type CreateEventDate = {
  doorsOpen?: InputMaybe<Scalars['String']['input']>;
  endDate: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  startDate: Scalars['String']['input'];
};

/** Creates a new event. */
export type CreateEventInput = {
  accessibility?: InputMaybe<Scalars['String']['input']>;
  /** The artists performing at the event. */
  artists?: InputMaybe<Array<CreateArtistInput>>;
  backgroundImage?: InputMaybe<Scalars['Upload']['input']>;
  backgroundImageFullPage?: InputMaybe<Scalars['Upload']['input']>;
  /** Booking fee. */
  bookingFee: Scalars['Float']['input'];
  /** Booking fee type. */
  bookingFeeType: FeeType;
  /** The fee the buyer pays for transferring a ticket. */
  buyerTransferringTicketFee?: InputMaybe<Scalars['Float']['input']>;
  /** Whether changing seats is available. */
  canChangeSeats?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether naming ticket is available. */
  canNameTicket?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether renaming ticket is available. */
  canRenameTicket?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether transfering ticket is available. */
  canTransferTicket?: InputMaybe<Scalars['Boolean']['input']>;
  canUsePoints?: InputMaybe<Scalars['Boolean']['input']>;
  /** The fee for changing seats for the event ticket. */
  changingSeatsFee?: InputMaybe<Scalars['Float']['input']>;
  /** Whether event is checking for vaccine passports on entry */
  checkForVaccinePass?: InputMaybe<Scalars['Boolean']['input']>;
  /** Event dates. */
  dates: Array<CreateEventDate>;
  /** Event description. */
  description?: InputMaybe<Scalars['String']['input']>;
  descriptionImage?: InputMaybe<Scalars['Upload']['input']>;
  /** Represents additional info required to host a digital event. */
  digitalInfo?: InputMaybe<CreateDigitalInfoInput>;
  /** Doors open time. */
  doorsOpen?: InputMaybe<Scalars['String']['input']>;
  emailNotification?: InputMaybe<Scalars['String']['input']>;
  enablePaymentPlans?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether release codes are visible on the event information page */
  enableReleaseCodes?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether the waitlist is visible on the event information page */
  enableWaitlist?: InputMaybe<Scalars['Boolean']['input']>;
  /** The kind of event. */
  eventKind?: InputMaybe<EventKind>;
  gaVenue?: InputMaybe<CreateGaEventVenueInput>;
  /** The payment gateways enabled for the event. */
  gateways?: InputMaybe<Array<Scalars['String']['input']>>;
  /** The genres of the event. */
  genres?: InputMaybe<Array<CreateGenreInput>>;
  hardCopyTicketBanner?: InputMaybe<Scalars['Upload']['input']>;
  hiddenFromPublic?: InputMaybe<Scalars['Boolean']['input']>;
  importantNotice?: InputMaybe<Scalars['String']['input']>;
  /** Inside fees for the event */
  insideFeeDetails?: InputMaybe<Array<InsideFeeDetailsInput>>;
  invoiceInformation?: InputMaybe<Scalars['String']['input']>;
  /** Event active status. */
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether the event is discoverable on BandsInTown */
  isDiscoverable?: InputMaybe<Scalars['Boolean']['input']>;
  /** Event featured status. */
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether the event should be marked as a festival in BandsInTown */
  isFestival?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether event is R-18. */
  isR18?: InputMaybe<Scalars['Boolean']['input']>;
  listedReleaseOptions?: InputMaybe<ListedReleaseOptionsInput>;
  logo?: InputMaybe<Scalars['Upload']['input']>;
  merchantReference?: InputMaybe<Scalars['String']['input']>;
  paymentPlanScheduleOptions?: InputMaybe<Array<ScheduleOptionInput>>;
  pixelId?: InputMaybe<Scalars['String']['input']>;
  presaleInformation?: InputMaybe<Scalars['String']['input']>;
  printBanner1?: InputMaybe<Scalars['Upload']['input']>;
  printBanner2?: InputMaybe<Scalars['Upload']['input']>;
  productUpsell?: InputMaybe<ProductUpsellInput>;
  redirectURL?: InputMaybe<Scalars['String']['input']>;
  /** Event season. */
  season?: InputMaybe<Scalars['String']['input']>;
  /** The fee the seller pays for transferring a ticket. */
  sellerTransferringTicketFee?: InputMaybe<Scalars['Float']['input']>;
  seoMetadata?: InputMaybe<SeoMetadataInput>;
  /** Shipping options. */
  shippingOptions?: InputMaybe<ShippingOptionsInput>;
  /** Display doors open time. */
  showDoorsOpen?: InputMaybe<Scalars['Boolean']['input']>;
  /** Display event end time. */
  showEndTime?: InputMaybe<Scalars['Boolean']['input']>;
  /** Display event start time. */
  showStartTime?: InputMaybe<Scalars['Boolean']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  termsAndConditions?: InputMaybe<Scalars['String']['input']>;
  thumbnail?: InputMaybe<Scalars['Upload']['input']>;
  ticketCover?: InputMaybe<TicketCoverInput>;
  /** Date at which tickets are viewable/printable from. */
  ticketsViewableFromDate?: InputMaybe<Scalars['String']['input']>;
  /** Event title. */
  title: Scalars['String']['input'];
  venue?: InputMaybe<Scalars['String']['input']>;
  /** The end date of the presale registration. */
  waitlistEndDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** The start date of the presale registration. */
  waitlistStartDate?: InputMaybe<Scalars['DateTime']['input']>;
  zonesAllocatedGates?: InputMaybe<Array<ZoneAllocatedGateInput>>;
};

export type CreateEventMultiBuyPromotionInput = {
  buyQuantity: Scalars['Float']['input'];
  buyTicketTypeId: Scalars['String']['input'];
  /** The event id that is associated with the promotion. */
  eventId: Scalars['String']['input'];
  getQuantity: Scalars['Float']['input'];
  getTicketTypeId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
};

export type CreateEventPromoCodeInput = {
  /** The unique code that represents the promotion. */
  code: Scalars['String']['input'];
  /** The discount amount of the promotion. */
  discountAmount: Scalars['Float']['input'];
  /** The discount type associated with the promotion. */
  discountType: DiscountType;
  /** The end date condition of the promotion. Returns `null` when inactive. */
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  eventAddons?: InputMaybe<Array<Scalars['String']['input']>>;
  eventId: Scalars['String']['input'];
  /** The maximum order amount condition of the promotion. Returns `null` when inactive. */
  maxOrderAmount?: InputMaybe<Scalars['Float']['input']>;
  /** The maximum amount of use condition of the promotion. Returns `null` when inactive. */
  maxUsage?: InputMaybe<Scalars['Float']['input']>;
  /** The minimum order amount condition of the promotion. Returns `null` when inactive. */
  minOrderAmount?: InputMaybe<Scalars['Float']['input']>;
  /** The start date condition of the promotion. Returns `null` when inactive. */
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  ticketTypes?: InputMaybe<Array<Scalars['String']['input']>>;
  type: EventPromoCodeType;
};

export type CreateGaEventVenueInput = {
  address?: InputMaybe<AddressInput>;
  locale: Scalars['String']['input'];
  location?: InputMaybe<CoordinateInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  timezone: Scalars['String']['input'];
};

export type CreateGenreInput = {
  /** The genres's Flicket ID. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The genre's name. */
  name: Scalars['String']['input'];
};

export type CreateHistoryInput = {
  /** The description of the history item. */
  description: Scalars['String']['input'];
  /** The reference id of the history item. */
  refId: Scalars['String']['input'];
  /** The reference name of the history item. */
  refName: HistoryReferenceType;
};

export type CreateIntegrationInput = {
  bnplEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  bnplTransactionFeePercent?: InputMaybe<Scalars['Float']['input']>;
  createAccount?: InputMaybe<Scalars['Boolean']['input']>;
  facebookPageId?: InputMaybe<Scalars['String']['input']>;
  facebookTempToken?: InputMaybe<Scalars['String']['input']>;
  facebookUserId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  paymentMethodType?: InputMaybe<Scalars['String']['input']>;
  publicKey?: InputMaybe<Scalars['String']['input']>;
  secretKey?: InputMaybe<Scalars['String']['input']>;
  transactionFee?: InputMaybe<Scalars['Float']['input']>;
  transactionFee2?: InputMaybe<Scalars['Float']['input']>;
  transactionFeeType?: InputMaybe<FeeType>;
  transactionFeeType2?: InputMaybe<FeeType>;
  type: IntegrationType;
  wcPxPostPublicKey?: InputMaybe<Scalars['String']['input']>;
  wcPxPostSecretKey?: InputMaybe<Scalars['String']['input']>;
  webhookUrl?: InputMaybe<Scalars['String']['input']>;
};

export type CreateMembershipAddonInput = {
  /** Image banner specific for a ticket type on the print at home ticket */
  addonImage?: InputMaybe<Scalars['Upload']['input']>;
  /** The brief description of the addon. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Indicates whether naming the addon is possible or not. */
  enableNaming: Scalars['Boolean']['input'];
  /** The active status of the addon. */
  isActive: Scalars['Boolean']['input'];
  /** The membership id that is associated with the addon. */
  membershipId: Scalars['String']['input'];
  /** The name of the addon. */
  name: Scalars['String']['input'];
  namingFields: Array<FormFieldInput>;
  /** The price associated with the addon. */
  price: Scalars['Float']['input'];
  /** Maximum quantity to be sold for the addon. */
  quantity: Scalars['Float']['input'];
  /** The restrictions applied to the addon. */
  restrictions?: InputMaybe<Scalars['String']['input']>;
};

export type CreateMembershipInput = {
  accessibility?: InputMaybe<Scalars['String']['input']>;
  backgroundImage?: InputMaybe<Scalars['Upload']['input']>;
  banner?: InputMaybe<Scalars['Upload']['input']>;
  /** The booking fee for the membership. */
  bookingFee: Scalars['Float']['input'];
  /** The booking fee type of the membership. */
  bookingFeeType: FeeType;
  /** Whether naming a membership is available. */
  canChangeSeats?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether naming a membership is available. */
  canNameMembership?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether renaming a membership is available. */
  canRenameMembership?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether individual event tickets can be transferred. */
  canTransferTickets?: InputMaybe<Scalars['Boolean']['input']>;
  canUsePoints?: InputMaybe<Scalars['Boolean']['input']>;
  /** The fee for changing seats for the membership. */
  changingSeatsFee?: InputMaybe<Scalars['Float']['input']>;
  /** The description of the membership. */
  description: Scalars['String']['input'];
  descriptionImage?: InputMaybe<Scalars['Upload']['input']>;
  /** Represents additional info required to host a digital membership. */
  digitalInfo?: InputMaybe<CreateDigitalInfoInput>;
  emailNotification?: InputMaybe<Scalars['String']['input']>;
  enableAutoRenew?: InputMaybe<Scalars['Boolean']['input']>;
  enablePaymentPlans?: InputMaybe<Scalars['Boolean']['input']>;
  /** The end date of the membership. */
  endDate: Scalars['DateTime']['input'];
  /** The payment gateways enabled for the membership. */
  gateways?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Flag to determine if the membership is hidden from the public */
  hiddenFromPublic?: InputMaybe<Scalars['Boolean']['input']>;
  importantNotice?: InputMaybe<Scalars['String']['input']>;
  invoiceInformation?: InputMaybe<Scalars['String']['input']>;
  /** The active status of the membership. */
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether the membership is ticketed. */
  isTicketed: Scalars['Boolean']['input'];
  /** The kind of membership. */
  membershipKind: MembershipKind;
  /** Name of the membership. */
  name: Scalars['String']['input'];
  paymentPlanScheduleOptions?: InputMaybe<Array<ScheduleOptionInput>>;
  /** The previous memberships related to the membership. */
  previousMemberships?: InputMaybe<Array<Scalars['String']['input']>>;
  printBanner1?: InputMaybe<Scalars['Upload']['input']>;
  printBanner2?: InputMaybe<Scalars['Upload']['input']>;
  productUpsell?: InputMaybe<ProductUpsellInput>;
  seoMetadata?: InputMaybe<SeoMetadataInput>;
  /** Shipping options. */
  shippingOptions?: InputMaybe<ShippingOptionsInput>;
  showSchedule?: InputMaybe<Scalars['Boolean']['input']>;
  /** The start date of the membership. */
  startDate: Scalars['DateTime']['input'];
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  termsAndConditions?: InputMaybe<Scalars['String']['input']>;
  thumbnail?: InputMaybe<Scalars['Upload']['input']>;
  ticketCover?: InputMaybe<MembershipTicketCoverInput>;
};

export type CreateMembershipMultiBuyPromotionInput = {
  buyMembershipTypeId: Scalars['String']['input'];
  buyQuantity: Scalars['Float']['input'];
  getMembershipTypeId: Scalars['String']['input'];
  getQuantity: Scalars['Float']['input'];
  /** The membership id that is associated with the promotion. */
  membershipId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
};

export type CreateMembershipPromoCodeInput = {
  /** The unique code that represents the promotion. */
  code: Scalars['String']['input'];
  /** The discount amount of the promotion. */
  discountAmount: Scalars['Float']['input'];
  /** The discount type associated with the promotion. */
  discountType: DiscountType;
  /** The end date condition of the promotion. Returns `null` when inactive. */
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** The maximum order amount condition of the promotion. Returns `null` when inactive. */
  maxOrderAmount?: InputMaybe<Scalars['Float']['input']>;
  /** The maximum amount of use condition of the promotion. Returns `null` when inactive. */
  maxUsage?: InputMaybe<Scalars['Float']['input']>;
  membershipAddons?: InputMaybe<Array<Scalars['String']['input']>>;
  membershipId: Scalars['String']['input'];
  membershipTypes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** The minimum order amount condition of the promotion. Returns `null` when inactive. */
  minOrderAmount?: InputMaybe<Scalars['Float']['input']>;
  /** The start date condition of the promotion. Returns `null` when inactive. */
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  type: MembershipPromoCodeType;
};

export type CreateMembershipTypeInput = {
  /** Restrictions for the membership type. */
  description?: InputMaybe<Scalars['String']['input']>;
  isGuestCard?: InputMaybe<Scalars['Boolean']['input']>;
  isHidden?: InputMaybe<Scalars['Boolean']['input']>;
  /** The kind of the membership type. */
  kind: MembershipTypeKind;
  maxPurchaseQuantity?: InputMaybe<Scalars['Float']['input']>;
  /** The associated membership of the membership type. */
  membershipId: Scalars['String']['input'];
  minPurchaseQuantity?: InputMaybe<Scalars['Float']['input']>;
  /** Name of the membership type. */
  name: Scalars['String']['input'];
  namingFields: Array<FormFieldInput>;
  /** The number of membership tickets that must be purchased together in this set. */
  quantitySet?: InputMaybe<Scalars['Float']['input']>;
  /** Restrictions for the membership type. */
  restrictions?: InputMaybe<Scalars['String']['input']>;
  /** The ticket fee. */
  ticketFee: Scalars['Float']['input'];
  /** The ticket fee type. */
  ticketFeeType: FeeType;
};

export type CreateOrderError = {
  message: Scalars['String']['output'];
};

export type CreateOrderErrorUnion = TicketNotAvailableError;

export type CreateOrderInput = {
  /** Access code id associated with the order. */
  accessCodeId?: InputMaybe<Scalars['String']['input']>;
  /** Seats.IO hold token. */
  holdToken?: InputMaybe<Scalars['String']['input']>;
  isCreatedFromRecoveredCart?: InputMaybe<Scalars['Boolean']['input']>;
  /** List of the order's line items. */
  lineItems: Array<LineItemInput>;
  /** Membership id associated with the order. */
  membershipId?: InputMaybe<Scalars['String']['input']>;
  /** Multi buy promotion id. */
  multiBuyId?: InputMaybe<Scalars['String']['input']>;
  /** Order type */
  orderType?: InputMaybe<OrderType>;
  posId?: InputMaybe<Scalars['String']['input']>;
  referralCode?: InputMaybe<Scalars['String']['input']>;
  referralId?: InputMaybe<Scalars['String']['input']>;
  /** Release id associated with the order. */
  releaseId?: InputMaybe<Scalars['String']['input']>;
  /** Release password id associated with the order. */
  releasePasswordId?: InputMaybe<Scalars['String']['input']>;
  transferFee?: InputMaybe<Scalars['Float']['input']>;
  /** User id can be provided for back-office orders */
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateOrganizationInput = {
  address: AddressInput;
  branding?: InputMaybe<BrandingInput>;
  currency?: InputMaybe<Scalars['String']['input']>;
  customTaxName?: InputMaybe<Scalars['String']['input']>;
  customTaxRate?: InputMaybe<Scalars['Float']['input']>;
  email: Scalars['String']['input'];
  helpLink?: InputMaybe<Scalars['String']['input']>;
  landingPage: LandingPage;
  marketing?: InputMaybe<MarketingInput>;
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  privacyPolicy?: InputMaybe<Scalars['String']['input']>;
  showMembershipRenewal?: InputMaybe<Scalars['Boolean']['input']>;
  showMemberships?: InputMaybe<Scalars['Boolean']['input']>;
  slug: Scalars['String']['input'];
  supportInfo?: InputMaybe<Scalars['String']['input']>;
  taxNumber?: InputMaybe<Scalars['String']['input']>;
  taxRate?: InputMaybe<Scalars['Float']['input']>;
  termsAndConditions?: InputMaybe<Scalars['String']['input']>;
};

export type CreateOrganizationOutput = {
  __typename?: 'CreateOrganizationOutput';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type CreatePaymentInput = {
  customFields?: InputMaybe<Array<CustomFieldInput>>;
  /** Payment gateway chosen by the customer (leave empty if paying with credits only). */
  gateway?: InputMaybe<Scalars['String']['input']>;
  gatewayOptions?: InputMaybe<GatewayOptions>;
  pointRedemptionAmount?: InputMaybe<Scalars['Float']['input']>;
  /** Whether the customer wants to initiate a reoccurring payment. */
  reoccurringPayment?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether the customer gets a hold order confirmation. */
  sendHoldOrderCustomerEmail?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether the customer receives a receipt by email. */
  skipOrderConfirmation?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether the customer opts-in for marketing & promotions. */
  usableForMarketing: Scalars['Boolean']['input'];
};

/** Represents the order creation result. */
export type CreatePaymentOutput = {
  __typename?: 'CreatePaymentOutput';
  /** The order. */
  order: Order;
  /** The payment creation result of the order. */
  result?: Maybe<PaymentResult>;
};

export type CreatePinPaymentCharge = {
  cardToken: Scalars['String']['input'];
  refId: Scalars['String']['input'];
};

export type CreatePointInput = {
  gatewayIds: Array<Scalars['String']['input']>;
  isEnabled: Scalars['Boolean']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  termsAndConditions?: InputMaybe<Scalars['String']['input']>;
};

export type CreatePointItemInput = {
  amount: Scalars['Float']['input'];
  backgroundImage?: InputMaybe<Scalars['Upload']['input']>;
  banner?: InputMaybe<Scalars['Upload']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  descriptionImage?: InputMaybe<Scalars['Upload']['input']>;
  isVisible: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  pointId: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  thumbnail?: InputMaybe<Scalars['Upload']['input']>;
};

export type CreatePosInput = {
  /** Booking fee. */
  bookingFee: Scalars['Float']['input'];
  /** Booking fee type. */
  bookingFeeType: FeeType;
  cashAmount?: InputMaybe<Scalars['Float']['input']>;
  deliveryOptions: Array<ShippingOption>;
  /** Whether receipts are turned on. */
  enableReceipts?: InputMaybe<Scalars['Boolean']['input']>;
  eventId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  paymentOptions: PosPaymentOptionsInput;
  releaseId: Scalars['String']['input'];
};

export type CreatePosUserInput = {
  accessCode: Scalars['String']['input'];
  eventId: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
};

export type CreatePurchaseRestrictionInput = {
  isAlwaysVisible?: InputMaybe<Scalars['Boolean']['input']>;
  isExclusive?: InputMaybe<Scalars['Boolean']['input']>;
  quantity: Scalars['Float']['input'];
  requiredEntities: Array<PurchaseRestrictionRequiredEntityInput>;
  restrictedId: Scalars['String']['input'];
  restrictedType: LineItemType;
};

export type CreateRedirectUrlInput = {
  /** Full URL path. */
  redirectURL: Scalars['String']['input'];
  /** Reference entity ID. */
  refId: Scalars['String']['input'];
  /** Type of entity this redirect is for. */
  refName: Scalars['String']['input'];
};

export type CreateReferralCampaignDto = {
  eventId?: InputMaybe<Scalars['String']['input']>;
  isActive: Scalars['Boolean']['input'];
  membershipId?: InputMaybe<Scalars['String']['input']>;
  referralOwnerRewardQuantity: Scalars['Float']['input'];
  referralOwnerRewardQuantityType: ReferralRewardQuantityType;
  referralOwnerRewardType: ReferralRewardType;
  referralReleaseId?: InputMaybe<Scalars['String']['input']>;
  referralUserRewardQuantity: Scalars['Float']['input'];
  referralUserRewardQuantityType: ReferralRewardQuantityType;
  referralUserRewardType: ReferralRewardType;
};

export type CreateReferralRewardsDto = {
  orderId: Scalars['String']['input'];
  referralCampaignId: Scalars['String']['input'];
  referralOwnerUserReferralId: Scalars['String']['input'];
  referralUserId: Scalars['String']['input'];
};

/** Creates a refund. */
export type CreateRefundInput = {
  /** Desired amount of the refund. */
  amount: Scalars['Float']['input'];
  gateway?: InputMaybe<RefundGateway>;
  /** Whether the refund is a manual one. */
  isManual?: InputMaybe<Scalars['Boolean']['input']>;
  /** Notes why the refund was created. */
  notes: Scalars['String']['input'];
  /** Order id for which the refund will be created. */
  orderId: Scalars['String']['input'];
  /** Whether to send a refund confirmation email. */
  sendEmail?: InputMaybe<Scalars['Boolean']['input']>;
  /** Tickets to realease (will also release child tickets). */
  ticketIds?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type CreateReleaseInput = {
  /** Can this release use Windcaves Account2Account functionality */
  allowAccount2Account?: InputMaybe<Scalars['Boolean']['input']>;
  /** Can customers create hold orders for this release */
  allowHoldOrders?: InputMaybe<Scalars['Boolean']['input']>;
  /** Are comps visible to public */
  allowPublicComp?: InputMaybe<Scalars['Boolean']['input']>;
  /** Request purchasers  */
  askForDietaryRequirements?: InputMaybe<Scalars['Boolean']['input']>;
  /** Ask how did you heard about us during the purchasing flow */
  askHowDidYouHearAboutUs?: InputMaybe<Scalars['Boolean']['input']>;
  channels?: InputMaybe<Array<Scalars['String']['input']>>;
  /** The end condition of the release. */
  endCondition: ReleaseEndCondition;
  /** The end date of the release. Pass null if the endCondition is set to other than `date`. */
  endConditionDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** The quantity limit of the release. Pass null if the endCondition is set to other than `quantity`. */
  endConditionQuantity?: InputMaybe<Scalars['Float']['input']>;
  event: Scalars['String']['input'];
  /** The status of the release. */
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  maxPurchaseQuantity?: InputMaybe<Scalars['Float']['input']>;
  minPurchaseQuantity?: InputMaybe<Scalars['Float']['input']>;
  /** Release name. */
  name: Scalars['String']['input'];
  /** The password for the unlisted release. Pass null if the release type is set to other than `unlisted`. */
  password?: InputMaybe<Scalars['String']['input']>;
  presaleHeader?: InputMaybe<Scalars['Upload']['input']>;
  /** The information of the unlisted release. Pass null if the `type` is set to other than `unlisted`. */
  presaleInformation?: InputMaybe<Scalars['String']['input']>;
  presaleLogo?: InputMaybe<Scalars['Upload']['input']>;
  /** The title of the unlisted release. Pass null if the `type` is set to other than `unlisted`. */
  presaleTitle?: InputMaybe<Scalars['String']['input']>;
  releaseEventAddons?: InputMaybe<Array<Scalars['String']['input']>>;
  /** The information that will be shown to customers on the ticketing page. */
  releaseNotes?: InputMaybe<Scalars['String']['input']>;
  /** The zones of the release. */
  releaseZones: Array<ReleaseZoneInput>;
  /** The slug for the unlisted release. Pass null if the release type is set to other than `unlisted`. */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** The start condition of the release. */
  startCondition: ReleaseStartCondition;
  /** The start date of the release. Pass null if the startCondition is set to other than `date`. */
  startConditionDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Release type. */
  type: ReleaseType;
};

export type CreateReleaseZoneInput = {
  admission: Scalars['Boolean']['input'];
  capacity?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  eventId: Scalars['String']['input'];
  /** Images for the ticket gallery */
  imageGallery?: InputMaybe<Array<ImageGalleryItemInput>>;
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
};

export type CreateResaleTicketTypeInput = {
  /** Booking fee. */
  bookingFee: Scalars['Float']['input'];
  /** Booking fee type. */
  bookingFeeType: FeeType;
  /** The event id that is associated with the ticket type. */
  event: Scalars['String']['input'];
  /** Ticket group name. */
  name: Scalars['String']['input'];
  /** Price for v2 event */
  price?: InputMaybe<Scalars['Float']['input']>;
  /** The ticket types that map to this resale ticket. */
  ticketTypes: Array<Scalars['String']['input']>;
};

export type CreateSmsBroadcastInput = {
  marketingFilters?: InputMaybe<Array<BroadcastMarketingFiltersV2Input>>;
  message: Scalars['String']['input'];
  /** If the input contains send time, then this is a scheduled SMS */
  scheduledAt?: InputMaybe<Scalars['DateTime']['input']>;
  status: BroadcastStatus;
  subject: Scalars['String']['input'];
  tags?: InputMaybe<Array<BroadcastTags>>;
  testPhoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export type CreateScoutCommunicationInput = {
  campaignId?: InputMaybe<Scalars['String']['input']>;
  includeOptedOutOfMarketing?: InputMaybe<Scalars['Boolean']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  listId?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  purpose: ScoutPurpose;
  scheduledAt?: InputMaybe<Scalars['DateTime']['input']>;
  segmentId?: InputMaybe<Scalars['String']['input']>;
  shouldUpdate?: InputMaybe<Scalars['Boolean']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  templateId?: InputMaybe<Scalars['Float']['input']>;
  trackReleaseId?: InputMaybe<Scalars['String']['input']>;
  trackSource?: InputMaybe<ReportingFilterSource>;
  trackSourceId?: InputMaybe<Scalars['String']['input']>;
  type: ScoutCommunicationType;
};

export type CreateScoutInput = {
  exclude?: InputMaybe<Array<FilterSelectionInput>>;
  name: Scalars['String']['input'];
  promoteTo: Array<FilterSelectionInput>;
};

export type CreateSeasonInput = {
  backgroundImageFullPage?: InputMaybe<Scalars['Upload']['input']>;
  /** Season description. */
  description: Scalars['String']['input'];
  displayOrder: Scalars['Float']['input'];
  /** Season active status. */
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Season name. */
  name: Scalars['String']['input'];
  thumbnail?: InputMaybe<Scalars['Upload']['input']>;
};

export type CreateSignupFormInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  heading: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreateTagInput = {
  name: Scalars['String']['input'];
};

export type CreateTemporaryPosUserInput = {
  eventId: Scalars['String']['input'];
  fullName: Scalars['String']['input'];
};

export type CreateTemporaryPosUserOutput = {
  __typename?: 'CreateTemporaryPosUserOutput';
  /** Access token to create a single temporary POS user */
  oneTimeAccessToken: Scalars['String']['output'];
  password: Scalars['String']['output'];
  user: User;
};

export type CreateTestEmailInput = {
  communicationId: Scalars['String']['input'];
  emails: Array<Scalars['String']['input']>;
  subject: Scalars['String']['input'];
  templateId: Scalars['Float']['input'];
};

export type CreateTicketTypeDate = {
  alternateEntryTime?: InputMaybe<Scalars['String']['input']>;
  eventDateId: Scalars['String']['input'];
};

export type CreateTicketTypeInput = {
  /** Booking fee. */
  bookingFee: Scalars['Float']['input'];
  /** Booking fee type. */
  bookingFeeType: FeeType;
  /** Event dates. */
  dates: Array<CreateTicketTypeDate>;
  /** Description of the ticket */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Doors open time. */
  doorsOpen?: InputMaybe<Scalars['String']['input']>;
  /** Custom entry dates for this ticket type. */
  entryDates?: InputMaybe<Array<InputMaybe<CreateEventDate>>>;
  /** The event id that is associated with the ticket type. */
  event: Scalars['String']['input'];
  /** The amount of people in a group. Returns null if the ticket type is not grouped. */
  groupAmount?: InputMaybe<Scalars['Float']['input']>;
  /** Images for the ticket gallery */
  imageGallery?: InputMaybe<Array<ImageGalleryItemInput>>;
  /** Mark a ticket type as high demand */
  inHighDemand: Scalars['Boolean']['input'];
  /** isActive for v2 event */
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** isComplimentary for v2 event */
  isComplimentary?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether the ticket type is grouped. */
  isGrouped?: InputMaybe<Scalars['Boolean']['input']>;
  /** The kind of the ticket type. */
  kind: TicketTypeKind;
  maxPurchaseQuantity?: InputMaybe<Scalars['Float']['input']>;
  minPurchaseQuantity?: InputMaybe<Scalars['Float']['input']>;
  /** Ticket group name. */
  name: Scalars['String']['input'];
  namingFields: Array<FormFieldInput>;
  onSaleConfig?: InputMaybe<TicketTypeOnSaleConfigInput>;
  /** Price for v2 event */
  price?: InputMaybe<Scalars['Float']['input']>;
  /** Print at home information for the ticket group. */
  printAtHomeInformation?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Float']['input']>;
  /** The number of tickets that must be purchased together in this set. */
  quantitySet?: InputMaybe<Scalars['Float']['input']>;
  /** releaseZoneId for v2 event */
  releaseZoneId?: InputMaybe<Scalars['String']['input']>;
  /** Restrictions for the ticket group. */
  restrictions?: InputMaybe<Scalars['String']['input']>;
  /** Display doors open time. */
  showDoorsOpen?: InputMaybe<Scalars['Boolean']['input']>;
  /** Display event end time. */
  showEndTime?: InputMaybe<Scalars['Boolean']['input']>;
  /** Display event start time. */
  showStartTime?: InputMaybe<Scalars['Boolean']['input']>;
  /** MMark a ticket type as sold out */
  soldOut: Scalars['Boolean']['input'];
  /** Per ticket stadium levy ticket fee. */
  stadiumLevyFee?: InputMaybe<Scalars['Float']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Image banner specific for a ticket type on the print at home ticket */
  ticketBanner?: InputMaybe<Scalars['Upload']['input']>;
  /** Image banner specific for a ticket type on the print at home ticket */
  ticketImage?: InputMaybe<Scalars['Upload']['input']>;
};

export type CreateUserInput = {
  accessEventIds?: InputMaybe<Array<Scalars['String']['input']>>;
  accessMembershipIds?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Billing address provided by the user. */
  billingAddress?: InputMaybe<PartialAddressInput>;
  birthDate?: InputMaybe<Scalars['DateTime']['input']>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  credits?: InputMaybe<Scalars['Float']['input']>;
  /** Elevate users privileges from user to admin. */
  elevatePrivileges?: InputMaybe<Scalars['Boolean']['input']>;
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  gender?: InputMaybe<Gender>;
  instagramUsername?: InputMaybe<Scalars['String']['input']>;
  lastName: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  /** To receive scanner login reminder emails. */
  receiveScannerEmail?: InputMaybe<Scalars['Boolean']['input']>;
  referralId?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<Array<Role>>;
  /** Shipping address provided by the user. */
  shippingAddress?: InputMaybe<PartialAddressInput>;
  /** Whether the shipping address matches the billing address. */
  shippingAddressMatchesBillingAddress?: InputMaybe<Scalars['Boolean']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  taxNumber?: InputMaybe<Scalars['String']['input']>;
  twoFactorAuthenticationSecret?: InputMaybe<Scalars['String']['input']>;
  usableForEmailMarketing?: InputMaybe<Scalars['Boolean']['input']>;
  usableForSMSMarketing?: InputMaybe<Scalars['Boolean']['input']>;
  userAcquisition?: InputMaybe<UserAcquisition>;
};

export type CreateVenueInput = {
  accessibilityInfo?: InputMaybe<Scalars['String']['input']>;
  address: AddressInput;
  capacity?: InputMaybe<Scalars['Int']['input']>;
  capacityUtilization?: InputMaybe<Scalars['Float']['input']>;
  gates?: InputMaybe<Array<GateInput>>;
  locale: Scalars['String']['input'];
  location?: InputMaybe<CoordinateInput>;
  name: Scalars['String']['input'];
  seating: VenueSeating;
  /** Seats.IO chart id. */
  seatsChartKey?: InputMaybe<Scalars['String']['input']>;
  timezone: Scalars['String']['input'];
  zones?: InputMaybe<Array<ZoneInput>>;
};

export type CurrentOrganizationOutput = {
  __typename?: 'CurrentOrganizationOutput';
  /** Address details. */
  address?: Maybe<Address>;
  branding: OrganizationOutputBranding;
  createdAt: Scalars['DateTime']['output'];
  /** Currency */
  currency?: Maybe<Scalars['String']['output']>;
  customFields: Array<CustomFieldOuput>;
  customTaxName?: Maybe<Scalars['String']['output']>;
  customTaxRate?: Maybe<Scalars['Float']['output']>;
  defaultI18nLanguage: Scalars['String']['output'];
  defaultLanguage: Scalars['String']['output'];
  /** Contact e-mail address. */
  email: Scalars['String']['output'];
  /** Beta features. */
  features?: Maybe<Array<Scalars['String']['output']>>;
  helpLink?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Landing page settings. */
  landingPage: LandingPage;
  locale: Scalars['String']['output'];
  /** Marketing settings. */
  marketing?: Maybe<Marketing>;
  /** Organization name. */
  name: Scalars['String']['output'];
  /** Contact phone. */
  phone: Scalars['String']['output'];
  platformChargeSettings?: Maybe<PlatformChargeSettings>;
  point?: Maybe<Point>;
  /** The privacy policy of the organistion */
  privacyPolicy?: Maybe<Scalars['String']['output']>;
  seekaConfig?: Maybe<SeekaOutput>;
  /** Shipping labels. */
  shippingLabels?: Maybe<ShippingLabels>;
  shopify?: Maybe<ShopifyIntegration>;
  /** Show memberships renewal banner. */
  showMembershipRenewal?: Maybe<Scalars['Boolean']['output']>;
  /** Show memberships in client navigation. */
  showMemberships: Scalars['Boolean']['output'];
  singleEvent?: Maybe<Event>;
  /** Organization slug. */
  slug: Scalars['String']['output'];
  /** The support information of the organistion */
  supportInfo?: Maybe<Scalars['String']['output']>;
  /** Tax calculation method. either inclusive or exclusive. */
  taxCalculationMethod: TaxCalculationMethod;
  /** Tax number */
  taxNumber?: Maybe<Scalars['String']['output']>;
  taxRate: Scalars['Float']['output'];
  /** The terms and conditions of the organistion */
  termsAndConditions?: Maybe<Scalars['String']['output']>;
  ticketCoverPlatformFeePercentage?: Maybe<Scalars['Float']['output']>;
  timezone: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CustomField = {
  __typename?: 'CustomField';
  fieldName: Scalars['String']['output'];
  fieldValue: Scalars['String']['output'];
  id?: Maybe<Scalars['String']['output']>;
};

export type CustomFieldInput = {
  fieldName: Scalars['String']['input'];
  fieldValue: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
};

export type CustomFieldOuput = {
  __typename?: 'CustomFieldOuput';
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
  /** Where the custom field input should appear. */
  targetArea: Array<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  value: Scalars['Boolean']['output'];
};

export type CustomSaleOutput = {
  __typename?: 'CustomSaleOutput';
  data?: Maybe<Scalars['JSON']['output']>;
};

export type CustomerCompetitionReportingInput = {
  customerId: Scalars['String']['input'];
};

export type CustomerReferralReportingInput = {
  customerId: Scalars['String']['input'];
};

export type CustomerReportingOverviewArgs = {
  __typename?: 'CustomerReportingOverviewArgs';
  abandonCart: PeReportStatistic;
  abandonCartRecovered: PeReportStatistic;
  addons: PeReportStatistic;
  addonsRevenue: PeReportStatistic;
  averageLTV: PeReportStatistic;
  averageOrderAmount: PeReportStatistic;
  averageOrderSize: PeReportStatistic;
  bookingFeeRevenue: PeReportStatistic;
  conversionRate: PeReportStatistic;
  credits: PeReportStatistic;
  discounts: PeReportStatistic;
  essentialEmailsSent: PeReportStatistic;
  essentialEmailsSentRate: PeReportStatistic;
  eventVisitors: PeReportStatistic;
  faceValueTotal: PeReportStatistic;
  faceValueWithBookingFeeTotal: PeReportStatistic;
  marketableAudience: PeReportStatistic;
  membershipFinancial: MembershipFinancial;
  membershipSales: MembershipSales;
  membershipsComp: PeReportStatistic;
  membershipsIssued: PeReportStatistic;
  membershipsRefund: PeReportStatistic;
  membershipsRenewed: PeReportStatistic;
  membershipsSold: PeReportStatistic;
  netSale: PeReportStatistic;
  newCustomerRegistrations: PeReportStatistic;
  newCustomers: PeReportStatistic;
  onsaleCompetitionEventPageConversionRate: PeReportStatistic;
  onsaleCompetitionEventPageViews: PeReportStatistic;
  onsaleCompetitionNewCustomers: PeReportStatistic;
  onsaleCompetitionTicketsSold: PeReportStatistic;
  onsaleCompetitionTotalCompetitionEntries: PeReportStatistic;
  onsaleCompetitionTotalOrders: PeReportStatistic;
  onsaleCompetitionTotalRevenue: PeReportStatistic;
  onsalePromoter: OnsalePromoter;
  ordersPartPaid: PeReportStatistic;
  overallAverageMembershipPrice: PeReportStatistic;
  overallAverageTicketPrice: PeReportStatistic;
  overallMembershipsPartPaid: PeReportStatistic;
  overallPartPaidMembershipRevenue: PeReportStatistic;
  overallPartPaidTicketRevenue: PeReportStatistic;
  overallTicketsPartPaid: PeReportStatistic;
  packagesSold: PeReportStatistic;
  paymentPlanTotalRevDue: PeReportStatistic;
  points: PeReportStatistic;
  pointsDistributed: PeReportStatistic;
  posFinancialData: PosFinancialData;
  posFloatData: PosFloatData;
  posSaleOverview: PosSaleOverview;
  refund: PeReportStatistic;
  registrationCompetitionEventDetailsPageViews: PeReportStatistic;
  registrationCompetitionEventPageConversionRate: PeReportStatistic;
  registrationCompetitionNewCustomers: PeReportStatistic;
  registrationCompetitionRegistrationPageConversionRate: PeReportStatistic;
  registrationCompetitionRegistrationPageViews: PeReportStatistic;
  registrationCompetitionTotalEntries: PeReportStatistic;
  registrationCompetitionTotalRegistrations: PeReportStatistic;
  registrationPromoterNewCustomers: PeReportStatistic;
  registrationPromoterReferralEntriesAwarded: PeReportStatistic;
  registrationPromoterRegistrationsViaReferral: PeReportStatistic;
  registrationRevenue: PeReportStatistic;
  registrationsNotConverted: PeReportStatistic;
  repeatPurchasers: PeReportStatistic;
  resaleFeeRevenue: PeReportStatistic;
  resaleMargin: PeReportStatistic;
  resold: PeReportStatistic;
  returningCustomers: PeReportStatistic;
  ticketCoverOrderTotal: PeReportStatistic;
  ticketCoverOrdersSold: PeReportStatistic;
  ticketProtectedRevenue: PeReportStatistic;
  ticketProtectionCost: PeReportStatistic;
  ticketProtectionMargin: PeReportStatistic;
  ticketProtectionRevenue: PeReportStatistic;
  ticketsPartPaid: PeReportStatistic;
  ticketsRefund: PeReportStatistic;
  totalCompsIssued: PeReportStatistic;
  totalCustomers: PeReportStatistic;
  totalOrders: PeReportStatistic;
  totalRegistrations: PeReportStatistic;
  totalTicketsIssued: PeReportStatistic;
  totalTicketsScanned: PeReportStatistic;
  totalTicketsScannedOut: PeReportStatistic;
  totalTicketsSold: PeReportStatistic;
};

export type DateRange = {
  __typename?: 'DateRange';
  endDate: Scalars['DateTime']['output'];
  startDate: Scalars['DateTime']['output'];
};

export type DefaultDateRange = {
  __typename?: 'DefaultDateRange';
  endDate?: Maybe<Scalars['DateTime']['output']>;
  startDate?: Maybe<Scalars['DateTime']['output']>;
};

export type DefaultDates = {
  __typename?: 'DefaultDates';
  endDate: Scalars['DateTime']['output'];
  startDate: Scalars['DateTime']['output'];
};

export type DeleteOneOutput = {
  __typename?: 'DeleteOneOutput';
  deletedId?: Maybe<Scalars['String']['output']>;
};

export type DeleteScoutUserInput = {
  ids: Array<Scalars['String']['input']>;
};

/** Represents additional info required to host a digital event/membership. */
export type DigitalInfo = {
  __typename?: 'DigitalInfo';
  /** Additional email info button text to be added in digital event/membership access emails. */
  additionalEmailButtonText?: Maybe<Scalars['String']['output']>;
  /** Additional email info button URL to be added in digital event/membership access emails. */
  additionalEmailButtonUrl?: Maybe<Scalars['String']['output']>;
  /** Additional email info HTML be added in digital event/membership access emails. */
  additionalEmailInfoHTML?: Maybe<Scalars['String']['output']>;
  /** Additional email info to be added in digital event/membership access emails. */
  additionalEmailInfoText?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  /** The Postmark email template that is used to send digital pass codes. */
  emailTemplateId?: Maybe<Scalars['String']['output']>;
  event?: Maybe<Event>;
  id: Scalars['ID']['output'];
  membership?: Maybe<Membership>;
  updatedAt: Scalars['DateTime']['output'];
  /** The url that digital pass codes are appended to in order to access the digital event/membership. */
  url: Scalars['String']['output'];
};

export type DigitalPassCodeStatusOutput = {
  __typename?: 'DigitalPassCodeStatusOutput';
  remainingPassCodes: Scalars['Int']['output'];
  totalPassCodes: Scalars['Int']['output'];
};

export enum DiscountType {
  Fixed = 'FIXED',
  Percentage = 'PERCENTAGE'
}

/** Duplicate an existing release. */
export type DuplicateSingleReleaseInput = {
  newSlug: Scalars['String']['input'];
  releaseId: Scalars['String']['input'];
  releaseType?: InputMaybe<Scalars['String']['input']>;
};

export type DynamicImageInput = {
  eventId?: InputMaybe<Scalars['String']['input']>;
  membershipId?: InputMaybe<Scalars['String']['input']>;
  pointItemId?: InputMaybe<Scalars['String']['input']>;
};

export type EmailCustomizationOutput = {
  __typename?: 'EmailCustomizationOutput';
  emailType: EmailType;
  id: Scalars['String']['output'];
  richTextTemplate?: Maybe<Scalars['JSON']['output']>;
  status: EmailCustomizationStatus;
  style: EmailStyle;
  subject?: Maybe<Scalars['JSON']['output']>;
};

/** If the customization is active or not. */
export enum EmailCustomizationStatus {
  Active = 'ACTIVE',
  Disabled = 'DISABLED',
  Draft = 'DRAFT'
}

export type EmailStyle = {
  __typename?: 'EmailStyle';
  backgroundColour: Scalars['String']['output'];
  bodyColour: Scalars['String']['output'];
  buttonColour: Scalars['String']['output'];
  headingColour: Scalars['String']['output'];
  linkColour: Scalars['String']['output'];
  paragraphColour: Scalars['String']['output'];
};

export type EmailStyleInput = {
  backgroundColour: Scalars['String']['input'];
  bodyColour: Scalars['String']['input'];
  buttonColour: Scalars['String']['input'];
  headingColour: Scalars['String']['input'];
  linkColour: Scalars['String']['input'];
  paragraphColour: Scalars['String']['input'];
};

/** The type of system email. */
export enum EmailType {
  AbandonedCart = 'ABANDONED_CART',
  CompetitionConfirmationMainSale = 'COMPETITION_CONFIRMATION_MAIN_SALE',
  CompetitionConfirmationRegistration = 'COMPETITION_CONFIRMATION_REGISTRATION',
  ComplimentaryOrderConfirmation = 'COMPLIMENTARY_ORDER_CONFIRMATION',
  ExhibitorLogin = 'EXHIBITOR_LOGIN',
  ExhibitorPostEvent = 'EXHIBITOR_POST_EVENT',
  OrderConfirmation = 'ORDER_CONFIRMATION',
  PointConfirmation = 'POINT_CONFIRMATION',
  RegistrationConfirmation = 'REGISTRATION_CONFIRMATION',
  ScannerAccessInstruction = 'SCANNER_ACCESS_INSTRUCTION',
  SendToAFriend = 'SEND_TO_A_FRIEND'
}

export type EmailUsherComplimentaryInput = {
  releaseId: Scalars['String']['input'];
  ticketTypeId: Scalars['String']['input'];
  ticketTypeName: Scalars['String']['input'];
};

export type EmailsOpenedArgs = {
  __typename?: 'EmailsOpenedArgs';
  broadcastIds: Array<Scalars['String']['output']>;
  exclude: Scalars['Boolean']['output'];
  kind: BroadcastMarketingFiltersV2Kind;
};

export type Event = {
  __typename?: 'Event';
  /** The accessibility info of the event */
  accessibility?: Maybe<Scalars['String']['output']>;
  addons: Array<EventAddon>;
  artists: Array<Artist>;
  backgroundImage?: Maybe<ExtendedFile>;
  backgroundImageFullPage?: Maybe<ExtendedFile>;
  /** Booking fee. */
  bookingFee: Scalars['Float']['output'];
  /** Booking fee type. */
  bookingFeeType: FeeType;
  /** The fee the buyer pays for transferring a ticket. */
  buyerTransferringTicketFee?: Maybe<Scalars['Float']['output']>;
  /** Whether changing seats is available. */
  canChangeSeats: Scalars['Boolean']['output'];
  /** Whether naming ticket is available. */
  canNameTicket: Scalars['Boolean']['output'];
  /** Whether renaming ticket is available. */
  canRenameTicket: Scalars['Boolean']['output'];
  /** Whether transfering ticket is available. */
  canTransferTicket: Scalars['Boolean']['output'];
  canUsePoints: Scalars['Boolean']['output'];
  capacity?: Maybe<Scalars['Int']['output']>;
  /** The fee for changing seats for the event ticket. */
  changingSeatsFee?: Maybe<Scalars['Float']['output']>;
  /** Featured status. */
  checkForVaccinePass: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  customFields: Array<CustomFieldOuput>;
  customTaxRate: Scalars['Float']['output'];
  /** Event dates. */
  dates: Array<EventDate>;
  defaultDateRange?: Maybe<DefaultDateRange>;
  /** Event description. */
  description: Scalars['String']['output'];
  descriptionImage?: Maybe<ExtendedFile>;
  digitalInfo?: Maybe<DigitalInfo>;
  digitalPassCodesStatus?: Maybe<DigitalPassCodeStatusOutput>;
  /** Email address that gets sent a notifcation every time an order is completed */
  emailNotification?: Maybe<Scalars['String']['output']>;
  /** Whether renaming ticket is available. */
  enableReleaseCodes: Scalars['Boolean']['output'];
  /** Whether the waitlist is visible on the event information page */
  enableWaitlist: Scalars['Boolean']['output'];
  /** Event end date. */
  endDate?: Maybe<Scalars['DateTime']['output']>;
  /** The kind of event */
  eventKind: EventKind;
  fees: OrderFee;
  gateways: Array<Integration>;
  /** The ID of the Google Wallet Event Class for this event */
  googleWalletEventClassId?: Maybe<Scalars['String']['output']>;
  hardCopyTicketBanner?: Maybe<ExtendedFile>;
  /** Event endDate has now lapsed, therefore it has ended. */
  hasEventEnded: Scalars['Boolean']['output'];
  hasPromoCodes: Scalars['Boolean']['output'];
  hasPublicRelease: Scalars['Boolean']['output'];
  hiddenFromPublic: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  /** Important notice section on the tickets */
  importantNotice?: Maybe<Scalars['String']['output']>;
  /** Inside fees for the event */
  insideFeeDetails?: Maybe<Array<InsideFeeDetails>>;
  /** The invoice info of the event */
  invoiceInformation?: Maybe<Scalars['String']['output']>;
  /** Event active status. */
  isActive: Scalars['Boolean']['output'];
  /** Whether the event is discoverable on BandsInTown */
  isDiscoverable: Scalars['Boolean']['output'];
  /** Featured status. */
  isFeatured: Scalars['Boolean']['output'];
  /** Whether the event is a festival */
  isFestival: Scalars['Boolean']['output'];
  /** Whether event is R-18. */
  isR18: Scalars['Boolean']['output'];
  isWaitlistAvailable: Scalars['Boolean']['output'];
  lastTicketsViewableEmailsSentAt?: Maybe<Scalars['DateTime']['output']>;
  listedRelease?: Maybe<Release>;
  logo?: Maybe<ExtendedFile>;
  merchantReferenceResult?: Maybe<Scalars['String']['output']>;
  multiBuyPromotions: Array<EventMultiBuyPromotion>;
  /** Whether to allow a ticket to be scanned in to multiple areas within a venue. */
  multiScanningEnabled: Scalars['Boolean']['output'];
  paymentPlanSettings?: Maybe<PaymentPlanSettings>;
  /** event level facebook pixel id */
  pixelId?: Maybe<Scalars['String']['output']>;
  /** The presale info of the event */
  presaleInformation?: Maybe<Scalars['String']['output']>;
  printBanner1?: Maybe<ExtendedFile>;
  printBanner2?: Maybe<ExtendedFile>;
  /** Once a customer has finished purchasing they can be redirected back to another URL to continuing their purchsing journey */
  redirectURL?: Maybe<Scalars['String']['output']>;
  /** The referral campaign associated with this event */
  referralCampaignId?: Maybe<Scalars['String']['output']>;
  releases: Array<Release>;
  /** The renaming fee for the event ticket. */
  renamingFee?: Maybe<Scalars['Float']['output']>;
  /** Event season. */
  season?: Maybe<Season>;
  /** Seats.io event key. */
  seatsEventKey?: Maybe<Scalars['String']['output']>;
  seekaConfig?: Maybe<SeekaOutput>;
  /** The fee the seller pays for transferring a ticket. */
  sellerTransferringTicketFee?: Maybe<Scalars['Float']['output']>;
  seoMetadata?: Maybe<SeoMetadata>;
  /** Shipping options. */
  shippingOptions?: Maybe<ShippingOptions>;
  /** Display event end time. */
  showEndTime: Scalars['Boolean']['output'];
  /** Display event start time. */
  showStartTime: Scalars['Boolean']['output'];
  soldTicketsCount?: Maybe<Scalars['Float']['output']>;
  soldTicketsCountToday?: Maybe<Scalars['Float']['output']>;
  soldTicketsCountYesterday?: Maybe<Scalars['Float']['output']>;
  /** Event start date. */
  startDate?: Maybe<Scalars['DateTime']['output']>;
  tags: Array<Tag>;
  taxCalculationMethod: TaxCalculationMethod;
  taxRate: Scalars['Float']['output'];
  /** The terms and conditions of the event */
  termsAndConditions?: Maybe<Scalars['String']['output']>;
  thumbnail?: Maybe<ExtendedFile>;
  ticketCover?: Maybe<EventTicketCover>;
  /** Whether sell to other fans on the waitlist is enabled. */
  ticketResaleEnabled: Scalars['Boolean']['output'];
  /** Whether to enable waitlist for tickets when sold out. */
  ticketResaleWaitlistEnabled: Scalars['Boolean']['output'];
  ticketTypes: Array<TicketType>;
  ticketsIssued: Scalars['Int']['output'];
  /** Date at which tickets are viewable/printable after. */
  ticketsViewableFromDate?: Maybe<Scalars['DateTime']['output']>;
  /** Event title. */
  title: Scalars['String']['output'];
  totalFaceValue?: Maybe<Scalars['Float']['output']>;
  totalRevenue?: Maybe<Scalars['Float']['output']>;
  totalTicketsFaceValue: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
  venue: Venue;
  venueAddress: Venue;
  /** The date the presale registration will no longer be visible on the event information page. */
  waitlistEndDate?: Maybe<Scalars['DateTime']['output']>;
  /** The date the presale registration will be visible on the event information page. */
  waitlistStartDate?: Maybe<Scalars['DateTime']['output']>;
  /** Allocated gates to venue zones */
  zonesAllocatedGates?: Maybe<Array<ZoneAllocatedGate>>;
};


export type EventTicketTypesArgs = {
  ticketTypeFilter?: InputMaybe<TicketTypeFilter>;
};

export enum EventAccessStatus {
  Allowed = 'ALLOWED',
  AllowedAdminPreview = 'ALLOWED_ADMIN_PREVIEW',
  Denied = 'DENIED',
  EventEnded = 'EVENT_ENDED',
  ShouldRedirect = 'SHOULD_REDIRECT'
}

export type EventAddon = {
  __typename?: 'EventAddon';
  addonAvailabilityStatus: TicketAvailabilityStatus;
  /** Image to be shown on the customer portal of the addon . Returns null if the not set. */
  addonImage?: Maybe<ExtendedFile>;
  createdAt: Scalars['DateTime']['output'];
  /** The brief description of the addon. */
  description?: Maybe<Scalars['String']['output']>;
  displayOrder: Scalars['Int']['output'];
  /** Indicates whether naming the addon is possible or not. */
  enableNaming: Scalars['Boolean']['output'];
  /** Whether hide QR code on ticket. */
  hideQRCode: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  /** Image gallery for ticket listing and sub-page. */
  imageGallery: Array<ImageGalleryItem>;
  /** Booking fee. */
  insideFee?: Maybe<Scalars['Float']['output']>;
  /** The active status of the addon. */
  isActive: Scalars['Boolean']['output'];
  maxPurchaseQuantity: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  namingFields: Array<FormField>;
  /** The price associated with the addon. */
  price: Scalars['Float']['output'];
  purchaseRestrictions: Array<PurchaseRestriction>;
  purchaseRestrictionsHelpText: Array<Scalars['String']['output']>;
  /** Maximum quantity to be sold for the addon. */
  quantity: Scalars['Float']['output'];
  /** Quantity allocated already */
  quantityAllocated: Scalars['Float']['output'];
  /** Quantity remaining via order created or canceled, does not take into account the order status */
  remaining: Scalars['Float']['output'];
  /** The restrictions applied to the addon. */
  restrictions?: Maybe<Scalars['String']['output']>;
  scannableGateIds: Array<Scalars['String']['output']>;
  totalSold?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type EventChannelOutput = {
  __typename?: 'EventChannelOutput';
  id: Scalars['String']['output'];
  isEnabled: Scalars['Boolean']['output'];
  label: Scalars['String']['output'];
};

export type EventConnection = {
  __typename?: 'EventConnection';
  edges: Array<EventEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** Represents a date in an event. */
export type EventDate = {
  __typename?: 'EventDate';
  /** Doors open time. */
  doorsOpen?: Maybe<Scalars['String']['output']>;
  endDate: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  startDate: Scalars['String']['output'];
};

export type EventEdge = {
  __typename?: 'EventEdge';
  cursor: Scalars['String']['output'];
  node: Event;
};

export type EventForCompetitionReportingEntity = {
  __typename?: 'EventForCompetitionReportingEntity';
  /** The accessibility info of the event */
  accessibility?: Maybe<Scalars['String']['output']>;
  addons: Array<EventAddon>;
  artists: Array<Artist>;
  backgroundImage?: Maybe<ExtendedFile>;
  backgroundImageFullPage?: Maybe<ExtendedFile>;
  /** Booking fee. */
  bookingFee: Scalars['Float']['output'];
  /** Booking fee type. */
  bookingFeeType: FeeType;
  /** The fee the buyer pays for transferring a ticket. */
  buyerTransferringTicketFee?: Maybe<Scalars['Float']['output']>;
  /** Whether changing seats is available. */
  canChangeSeats: Scalars['Boolean']['output'];
  /** Whether naming ticket is available. */
  canNameTicket: Scalars['Boolean']['output'];
  /** Whether renaming ticket is available. */
  canRenameTicket: Scalars['Boolean']['output'];
  /** Whether transfering ticket is available. */
  canTransferTicket: Scalars['Boolean']['output'];
  canUsePoints: Scalars['Boolean']['output'];
  capacity?: Maybe<Scalars['Int']['output']>;
  /** The fee for changing seats for the event ticket. */
  changingSeatsFee?: Maybe<Scalars['Float']['output']>;
  /** Featured status. */
  checkForVaccinePass: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  customFields: Array<CustomFieldOuput>;
  customTaxRate: Scalars['Float']['output'];
  /** Event dates. */
  dates: Array<EventDate>;
  defaultDateRange?: Maybe<DefaultDateRange>;
  /** Event description. */
  description: Scalars['String']['output'];
  descriptionImage?: Maybe<ExtendedFile>;
  digitalInfo?: Maybe<DigitalInfo>;
  digitalPassCodesStatus?: Maybe<DigitalPassCodeStatusOutput>;
  /** Email address that gets sent a notifcation every time an order is completed */
  emailNotification?: Maybe<Scalars['String']['output']>;
  /** Whether renaming ticket is available. */
  enableReleaseCodes: Scalars['Boolean']['output'];
  /** Whether the waitlist is visible on the event information page */
  enableWaitlist: Scalars['Boolean']['output'];
  /** Event end date. */
  endDate?: Maybe<Scalars['DateTime']['output']>;
  /** The kind of event */
  eventKind: EventKind;
  fees: OrderFee;
  gateways: Array<Integration>;
  /** The ID of the Google Wallet Event Class for this event */
  googleWalletEventClassId?: Maybe<Scalars['String']['output']>;
  /** Indicates if the event had or has a presale waitlist */
  hadOrHasPresaleWaitlist: Scalars['Boolean']['output'];
  hardCopyTicketBanner?: Maybe<ExtendedFile>;
  /** Event endDate has now lapsed, therefore it has ended. */
  hasEventEnded: Scalars['Boolean']['output'];
  hasPromoCodes: Scalars['Boolean']['output'];
  /** Indicates if the event had a public sales release */
  hasPublicRelease: Scalars['Boolean']['output'];
  hiddenFromPublic: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  /** Important notice section on the tickets */
  importantNotice?: Maybe<Scalars['String']['output']>;
  /** Inside fees for the event */
  insideFeeDetails?: Maybe<Array<InsideFeeDetails>>;
  /** The invoice info of the event */
  invoiceInformation?: Maybe<Scalars['String']['output']>;
  /** Event active status. */
  isActive: Scalars['Boolean']['output'];
  /** Whether the event is discoverable on BandsInTown */
  isDiscoverable: Scalars['Boolean']['output'];
  /** Featured status. */
  isFeatured: Scalars['Boolean']['output'];
  /** Whether the event is a festival */
  isFestival: Scalars['Boolean']['output'];
  /** Whether event is R-18. */
  isR18: Scalars['Boolean']['output'];
  isWaitlistAvailable: Scalars['Boolean']['output'];
  lastTicketsViewableEmailsSentAt?: Maybe<Scalars['DateTime']['output']>;
  listedRelease?: Maybe<Release>;
  logo?: Maybe<ExtendedFile>;
  merchantReferenceResult?: Maybe<Scalars['String']['output']>;
  multiBuyPromotions: Array<EventMultiBuyPromotion>;
  /** Whether to allow a ticket to be scanned in to multiple areas within a venue. */
  multiScanningEnabled: Scalars['Boolean']['output'];
  paymentPlanSettings?: Maybe<PaymentPlanSettings>;
  /** event level facebook pixel id */
  pixelId?: Maybe<Scalars['String']['output']>;
  /** The presale info of the event */
  presaleInformation?: Maybe<Scalars['String']['output']>;
  printBanner1?: Maybe<ExtendedFile>;
  printBanner2?: Maybe<ExtendedFile>;
  /** Once a customer has finished purchasing they can be redirected back to another URL to continuing their purchsing journey */
  redirectURL?: Maybe<Scalars['String']['output']>;
  /** The referral campaign associated with this event */
  referralCampaignId?: Maybe<Scalars['String']['output']>;
  releases: Array<Release>;
  /** The renaming fee for the event ticket. */
  renamingFee?: Maybe<Scalars['Float']['output']>;
  /** Event season. */
  season?: Maybe<Season>;
  /** Seats.io event key. */
  seatsEventKey?: Maybe<Scalars['String']['output']>;
  seekaConfig?: Maybe<SeekaOutput>;
  /** The fee the seller pays for transferring a ticket. */
  sellerTransferringTicketFee?: Maybe<Scalars['Float']['output']>;
  seoMetadata?: Maybe<SeoMetadata>;
  /** Shipping options. */
  shippingOptions?: Maybe<ShippingOptions>;
  /** Display event end time. */
  showEndTime: Scalars['Boolean']['output'];
  /** Display event start time. */
  showStartTime: Scalars['Boolean']['output'];
  soldTicketsCount?: Maybe<Scalars['Float']['output']>;
  soldTicketsCountToday?: Maybe<Scalars['Float']['output']>;
  soldTicketsCountYesterday?: Maybe<Scalars['Float']['output']>;
  /** Event start date. */
  startDate?: Maybe<Scalars['DateTime']['output']>;
  tags: Array<Tag>;
  taxCalculationMethod: TaxCalculationMethod;
  taxRate: Scalars['Float']['output'];
  /** The terms and conditions of the event */
  termsAndConditions?: Maybe<Scalars['String']['output']>;
  thumbnail?: Maybe<ExtendedFile>;
  ticketCover?: Maybe<EventTicketCover>;
  /** Whether sell to other fans on the waitlist is enabled. */
  ticketResaleEnabled: Scalars['Boolean']['output'];
  /** Whether to enable waitlist for tickets when sold out. */
  ticketResaleWaitlistEnabled: Scalars['Boolean']['output'];
  ticketTypes: Array<TicketType>;
  ticketsIssued: Scalars['Int']['output'];
  /** Date at which tickets are viewable/printable after. */
  ticketsViewableFromDate?: Maybe<Scalars['DateTime']['output']>;
  /** Event title. */
  title: Scalars['String']['output'];
  totalFaceValue?: Maybe<Scalars['Float']['output']>;
  totalRevenue?: Maybe<Scalars['Float']['output']>;
  totalTicketsFaceValue: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
  venue: Venue;
  venueAddress: Venue;
  /** The date the presale registration will no longer be visible on the event information page. */
  waitlistEndDate?: Maybe<Scalars['DateTime']['output']>;
  /** The date the presale registration will be visible on the event information page. */
  waitlistStartDate?: Maybe<Scalars['DateTime']['output']>;
  /** Allocated gates to venue zones */
  zonesAllocatedGates?: Maybe<Array<ZoneAllocatedGate>>;
};


export type EventForCompetitionReportingEntityTicketTypesArgs = {
  ticketTypeFilter?: InputMaybe<TicketTypeFilter>;
};

export type EventForecastOutput = {
  __typename?: 'EventForecastOutput';
  eventId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  /** The array of possible forecasting scenarios */
  scenarios?: Maybe<Array<ForecastScenario>>;
  /** The zones and forecasted seat count attributes */
  zones?: Maybe<Array<EventForecastZoneOutput>>;
};

/** Object to hold the zoneId and the seat allocation forecasts */
export type EventForecastZone = {
  __typename?: 'EventForecastZone';
  /** How many seats are forecast to be comps */
  comps: Scalars['Int']['output'];
  /** How many seats are forecast to be contingency */
  contingency: Scalars['Int']['output'];
  /** The zone id of for the seats forecast. */
  zoneId?: Maybe<Scalars['String']['output']>;
};

/** Object to hold the zoneId and the seat allocation forecasts */
export type EventForecastZoneOutput = {
  __typename?: 'EventForecastZoneOutput';
  /** How many seats are forecast to be comps */
  comps: Scalars['Int']['output'];
  /** How many seats are forecast to be contingency */
  contingency: Scalars['Int']['output'];
  /** Sales statistics if available */
  sales?: Maybe<FinancialSales>;
  /** The zone id of for the seats forecast. */
  zoneId?: Maybe<Scalars['String']['output']>;
};

export type EventInformation = {
  __typename?: 'EventInformation';
  dates: Array<EventDate>;
  hasEventEnded?: Maybe<Scalars['Boolean']['output']>;
  hasOnsaleCompetition: Scalars['Boolean']['output'];
  hasRegistration: Scalars['Boolean']['output'];
  hasRegistrationCompetition: Scalars['Boolean']['output'];
  id: Scalars['String']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isSeated: Scalars['Boolean']['output'];
  location?: Maybe<Scalars['String']['output']>;
  logo?: Maybe<ExtendedFile>;
  title: Scalars['String']['output'];
};

/** Ticket kind for ticket type. */
export enum EventKind {
  Digital = 'DIGITAL',
  Exhibition = 'EXHIBITION',
  Standard = 'STANDARD'
}

export type EventLayoutOutput = {
  __typename?: 'EventLayoutOutput';
  defaultDateRange: DateRange;
  event?: Maybe<EventInformation>;
};

export type EventMultiBuyPromotion = {
  __typename?: 'EventMultiBuyPromotion';
  buyQuantity: Scalars['Float']['output'];
  buyTicketType: TicketType;
  createdAt: Scalars['DateTime']['output'];
  enabled: Scalars['Boolean']['output'];
  getQuantity: Scalars['Float']['output'];
  getTicketType: TicketType;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
  used: Scalars['Float']['output'];
};

export type EventOrderByInput = {
  createdAt?: InputMaybe<OrderByDirection>;
  endDate?: InputMaybe<OrderByDirection>;
  isFeatured?: InputMaybe<OrderByDirection>;
  startDate?: InputMaybe<OrderByDirection>;
  updatedAt?: InputMaybe<OrderByDirection>;
};

export type EventOrdersOnlineOutput = {
  __typename?: 'EventOrdersOnlineOutput';
  addons: Scalars['Float']['output'];
  baseTickets: Scalars['Float']['output'];
  bookingFees: Scalars['Float']['output'];
  creditsUsed: Scalars['Float']['output'];
  deliveryFees: Scalars['Float']['output'];
  orderIdsOnline: Array<OrderIdsOnlineOutput>;
  refundedAmount: Scalars['Float']['output'];
  ticketFees: Scalars['Float']['output'];
  totalCount: Scalars['Float']['output'];
  transactionFees: Scalars['Float']['output'];
};

export type EventPromoCode = {
  __typename?: 'EventPromoCode';
  /** The unique code that represents the promotion. */
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  /** The discount amount of the promotion. */
  discountAmount: Scalars['Float']['output'];
  /** The discount type associated with the promotion. */
  discountType: DiscountType;
  enabled: Scalars['Boolean']['output'];
  /** The end date condition of the promotion. Returns `null` when inactive. */
  endDate?: Maybe<Scalars['DateTime']['output']>;
  /** Event addon ids for promo code. */
  eventAddons: Array<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** The maximum order amount condition of the promotion. Returns `null` when inactive. */
  maxOrderAmount?: Maybe<Scalars['Float']['output']>;
  /** The maximum amount of use condition of the promotion. Returns `null` when inactive. */
  maxUsage?: Maybe<Scalars['Int']['output']>;
  /** The minimum order amount condition of the promotion. Returns `null` when inactive. */
  minOrderAmount?: Maybe<Scalars['Float']['output']>;
  /** The start date condition of the promotion. Returns `null` when inactive. */
  startDate?: Maybe<Scalars['DateTime']['output']>;
  /** Ticket type ids for promo code. */
  ticketTypes: Array<Scalars['String']['output']>;
  /** The type of the promotion which determines on which items the promotion will be applied. */
  type: EventPromoCodeType;
  updatedAt: Scalars['DateTime']['output'];
  /** The total amount of usage of the promotion. */
  used?: Maybe<Scalars['Int']['output']>;
};

export enum EventPromoCodeType {
  Addons = 'ADDONS',
  Event = 'EVENT',
  EventAndAddons = 'EVENT_AND_ADDONS'
}

export type EventRedirectQueryParams = {
  __typename?: 'EventRedirectQueryParams';
  code?: Maybe<Scalars['String']['output']>;
  eventId?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
};

export type EventSocialPage = {
  __typename?: 'EventSocialPage';
  isEnabled: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  url?: Maybe<Scalars['String']['output']>;
};

export type EventSocialPageInput = {
  isEnabled: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  url?: InputMaybe<Scalars['String']['input']>;
};

export type EventTicketCover = {
  __typename?: 'EventTicketCover';
  createdAt: Scalars['DateTime']['output'];
  disabledAt?: Maybe<Scalars['DateTime']['output']>;
  enabledAt?: Maybe<Scalars['DateTime']['output']>;
  /** Event that the ticket cover is configured for */
  event: Event;
  id: Scalars['ID']['output'];
  /** Is ticket cover enabled */
  isEnabled: Scalars['Boolean']['output'];
  /** Platform fee as percentage of ticket price */
  platformFeePercentage: Scalars['Float']['output'];
  /** Promoter fee as percentage of ticket price */
  promoterFeePercentage: Scalars['Float']['output'];
  /** Ticket cover purchase behaviour */
  purchaseBehaviour: TicketCoverPurchaseBehaviour;
  /** Total fee as percentage of ticket price */
  totalFeePercentage: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type EventWhereInput = {
  /** Event end date. */
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  includeHidden?: InputMaybe<Scalars['Boolean']['input']>;
  /** Event active status. */
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Event featured status. */
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * If this is set to true,
   *     then we will left join release and check whether this event contains a outlet release.
   */
  isOutlet?: InputMaybe<Scalars['Boolean']['input']>;
  pos?: InputMaybe<Scalars['Boolean']['input']>;
  /** Fuzzy search query. */
  q?: InputMaybe<Scalars['String']['input']>;
  seasonId?: InputMaybe<Scalars['String']['input']>;
  seating?: InputMaybe<VenueSeating>;
  /** Event start date. */
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EventsByIdInput = {
  eventIds: Array<Scalars['String']['input']>;
};

export type EventsWithAccessControlInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  eventId: Scalars['String']['input'];
  releaseId?: InputMaybe<Scalars['String']['input']>;
  releaseSlug?: InputMaybe<Scalars['String']['input']>;
};

export type EventsWithAccessControlOutput = {
  __typename?: 'EventsWithAccessControlOutput';
  accessType: EventAccessStatus;
  event?: Maybe<Event>;
  isAdmin: Scalars['Boolean']['output'];
  redirect?: Maybe<EventRedirectQueryParams>;
  release?: Maybe<Release>;
};

export type ExhibitorContextOutput = {
  __typename?: 'ExhibitorContextOutput';
  event: Event;
  organization: CurrentOrganizationOutput;
  profile: ExpoExhibitorSessionProfileOutput;
};

export type ExpoAttendee = {
  __typename?: 'ExpoAttendee';
  birthDate?: Maybe<Scalars['DateTime']['output']>;
  companyName?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Array<CustomField>>;
  email: Scalars['String']['output'];
  eventId: Scalars['String']['output'];
  exhibitorId: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Gender>;
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  optInToMarketing?: Maybe<Scalars['Boolean']['output']>;
  organizationId: Scalars['String']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  ticketId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type ExpoAttendeeInput = {
  birthDate?: InputMaybe<Scalars['DateTime']['input']>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  customFields?: InputMaybe<Array<ExpoCustomFieldInput>>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Gender>;
  id?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  optInToMarketing?: InputMaybe<Scalars['Boolean']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  ticketId?: InputMaybe<Scalars['String']['input']>;
  ticketNumber?: InputMaybe<Scalars['String']['input']>;
};

export type ExpoAttendeeTicketOutput = {
  __typename?: 'ExpoAttendeeTicketOutput';
  attendeeId?: Maybe<Scalars['String']['output']>;
  ticket: Ticket;
};

export type ExpoCustomFieldInput = {
  fieldName: Scalars['String']['input'];
  fieldValue: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
};

export type ExpoEventForLogin = {
  __typename?: 'ExpoEventForLogin';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

/** Represents a business who is exhibiting at an event. Multiple users may be logged in as an Exhibitor. */
export type ExpoExhibitor = {
  __typename?: 'ExpoExhibitor';
  allowCustomQuestions: Scalars['Boolean']['output'];
  attendeeCount: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  eventId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  organizationId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ExpoExhibitorLoginInput = {
  exhibitorId: Scalars['String']['input'];
  exhibitorSecret: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ExpoExhibitorSessionProfileOutput = {
  __typename?: 'ExpoExhibitorSessionProfileOutput';
  allowCustomQuestions: Scalars['Boolean']['output'];
  email: Scalars['String']['output'];
  exhibitorName: Scalars['String']['output'];
  safeModeEnabled: Scalars['Boolean']['output'];
  scannerName?: Maybe<Scalars['String']['output']>;
};

export type ExpoNamingField = {
  __typename?: 'ExpoNamingField';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  label: Scalars['String']['output'];
  name: Scalars['String']['output'];
  orderKey: Scalars['Float']['output'];
  required: Scalars['Boolean']['output'];
  type: ExpoNamingFieldType;
  updatedAt: Scalars['DateTime']['output'];
};

export type ExpoNamingFieldInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  label: Scalars['String']['input'];
  orderKey: Scalars['Float']['input'];
  required: Scalars['Boolean']['input'];
  type: ExpoNamingFieldType;
};

export enum ExpoNamingFieldType {
  BirthDate = 'BirthDate',
  CompanyName = 'CompanyName',
  CustomText = 'CustomText',
  Email = 'Email',
  FirstName = 'FirstName',
  Gender = 'Gender',
  LastName = 'LastName',
  OptInToMarketing = 'OptInToMarketing',
  PhoneNumber = 'PhoneNumber',
  PostalCode = 'PostalCode'
}

export type ExportFilterCategory = {
  __typename?: 'ExportFilterCategory';
  columns: Array<ExportFilterColumn>;
  key: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type ExportFilterCategoryOutput = {
  __typename?: 'ExportFilterCategoryOutput';
  categories: Array<ExportFilterCategory>;
};

export type ExportFilterColumn = {
  __typename?: 'ExportFilterColumn';
  default?: Maybe<Scalars['Boolean']['output']>;
  key: Scalars['String']['output'];
  name: Scalars['String']['output'];
  tooltip?: Maybe<StatisticTooltip>;
};

export type ExportFilterColumnsInput = {
  exportType: ExportType;
  scanType?: InputMaybe<ScanExportType>;
  source: ReportingFilterSource;
  sourceId?: InputMaybe<Scalars['ID']['input']>;
};

export enum ExportType {
  AbandonedCart = 'ABANDONED_CART',
  Addon = 'ADDON',
  Customer = 'CUSTOMER',
  Membership = 'MEMBERSHIP',
  Order = 'ORDER',
  Registration = 'REGISTRATION',
  ScanLog = 'SCAN_LOG',
  Ticket = 'TICKET',
  Transaction = 'TRANSACTION'
}

export type ExtendedFile = {
  __typename?: 'ExtendedFile';
  directory: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  metaData?: Maybe<MetaData>;
  originalFileName?: Maybe<Scalars['String']['output']>;
  storage: StorageType;
};

export type FaceValueOverviewOutput = {
  __typename?: 'FaceValueOverviewOutput';
  avgOrderItemsCount: Scalars['Float']['output'];
  totalFaceValue: Scalars['Float']['output'];
};

export type FacebookPageListsInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};

export type FailedImportItem = {
  __typename?: 'FailedImportItem';
  index: Scalars['Float']['output'];
  message?: Maybe<Scalars['String']['output']>;
};

export type FansWouldPay = {
  __typename?: 'FansWouldPay';
  mean: Scalars['Float']['output'];
  median: Scalars['Float']['output'];
};

export type Fee = {
  __typename?: 'Fee';
  id?: Maybe<Scalars['String']['output']>;
  isOptional: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  order: Scalars['Int']['output'];
  type: FeeType;
  value: Scalars['Float']['output'];
};

/** The valid values for fee types. */
export enum FeeType {
  FlatRate = 'FlatRate',
  Percentage = 'Percentage'
}

export type FilterArgs = {
  __typename?: 'FilterArgs';
  exclude: Scalars['Boolean']['output'];
  kind: BroadcastMarketingFiltersV2Kind;
};

export type FilterSelection = {
  __typename?: 'FilterSelection';
  eventIds?: Maybe<Array<Scalars['String']['output']>>;
  eventTitlesForWaitlist?: Maybe<Array<Scalars['String']['output']>>;
  eventTypes?: Maybe<Array<ScoutEventType>>;
  gender?: Maybe<Array<Gender>>;
  maxAge?: Maybe<Scalars['Float']['output']>;
  membershipTypes?: Maybe<Array<Scalars['String']['output']>>;
  minAge?: Maybe<Scalars['Float']['output']>;
  regions?: Maybe<Array<Scalars['String']['output']>>;
  releaseIds?: Maybe<Array<Scalars['String']['output']>>;
  seasonIds?: Maybe<Array<Scalars['String']['output']>>;
  ticketTypeKinds?: Maybe<Array<TicketTypeKind>>;
  totalEventsPurchasedTo?: Maybe<Scalars['Float']['output']>;
  userTagIds?: Maybe<Array<Scalars['String']['output']>>;
  zones?: Maybe<Array<Scalars['String']['output']>>;
};

export type FilterSelectionInput = {
  eventIds?: InputMaybe<Array<Scalars['String']['input']>>;
  eventTitlesForWaitlist?: InputMaybe<Array<Scalars['String']['input']>>;
  eventTypes?: InputMaybe<Array<ScoutEventType>>;
  gender?: InputMaybe<Array<Gender>>;
  maxAge?: InputMaybe<Scalars['Float']['input']>;
  membershipTypes?: InputMaybe<Array<Scalars['String']['input']>>;
  minAge?: InputMaybe<Scalars['Float']['input']>;
  regions?: InputMaybe<Array<Scalars['String']['input']>>;
  releaseIds?: InputMaybe<Array<Scalars['String']['input']>>;
  seasonIds?: InputMaybe<Array<Scalars['String']['input']>>;
  ticketTypeKinds?: InputMaybe<Array<TicketTypeKind>>;
  totalEventsPurchasedTo?: InputMaybe<Scalars['Float']['input']>;
  userTagIds?: InputMaybe<Array<Scalars['String']['input']>>;
  zones?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type FinancialGatewayGraphOutput = {
  __typename?: 'FinancialGatewayGraphOutput';
  integrations: Array<FinancialGraphIntegration>;
  transactions: Scalars['Float']['output'];
};

export type FinancialGraphIntegration = {
  __typename?: 'FinancialGraphIntegration';
  name: Scalars['String']['output'];
  transactions: Scalars['Float']['output'];
};

export type FinancialOverviewOutput = {
  __typename?: 'FinancialOverviewOutput';
  avgOrderAmount: Scalars['Float']['output'];
  avgOrderItemsCount: Scalars['Float']['output'];
  discounts: Scalars['Float']['output'];
  netSales: Scalars['Float']['output'];
  planTotalOutstanding: Scalars['Float']['output'];
  planTotalPaid: Scalars['Float']['output'];
  resaleFees: Scalars['Float']['output'];
  resaleMargin: Scalars['Float']['output'];
  ticketCoverCost: Scalars['Float']['output'];
  ticketCoverMargin: Scalars['Float']['output'];
  ticketCoverOrderTotal: Scalars['Float']['output'];
  ticketCoverRevenue: Scalars['Float']['output'];
};

export type FinancialReportingOverviewOutput = {
  __typename?: 'FinancialReportingOverviewOutput';
  financial: Array<PeReportStatistic>;
};

export type FinancialSales = {
  __typename?: 'FinancialSales';
  allHolds?: Maybe<Scalars['Float']['output']>;
  /** This is the sum of membershipRenewalHolds and holdByMembershipCount */
  allMembershipHolds: Scalars['Float']['output'];
  allMembershipHoldsPercentage?: Maybe<Scalars['Float']['output']>;
  available: Scalars['String']['output'];
  availablePercentage?: Maybe<Scalars['Float']['output']>;
  baseRevenue?: Maybe<Scalars['Float']['output']>;
  buyerTransferFees?: Maybe<Scalars['Float']['output']>;
  capacity: Scalars['String']['output'];
  channelHolds: Scalars['Int']['output'];
  comps?: Maybe<Scalars['Float']['output']>;
  compsPercentage?: Maybe<Scalars['Float']['output']>;
  holdByMembershipCount?: Maybe<Scalars['Float']['output']>;
  holdByMembershipCountPercentage?: Maybe<Scalars['Float']['output']>;
  isAdmissionZone?: Maybe<Scalars['Boolean']['output']>;
  issued?: Maybe<Scalars['Float']['output']>;
  membershipRenewalHolds?: Maybe<Scalars['Float']['output']>;
  membershipRenewalHoldsPercentage?: Maybe<Scalars['Float']['output']>;
  partPaidMemberships?: Maybe<Scalars['Float']['output']>;
  partPaidMembershipsPercentage?: Maybe<Scalars['Float']['output']>;
  partPaidRevenue?: Maybe<Scalars['Float']['output']>;
  partPaidTickets?: Maybe<Scalars['Float']['output']>;
  partPaidTicketsPercentage?: Maybe<Scalars['Float']['output']>;
  refunds?: Maybe<Scalars['Float']['output']>;
  sellableCapacity: Scalars['String']['output'];
  sellerTransferFees?: Maybe<Scalars['Float']['output']>;
  sourceId?: Maybe<Scalars['String']['output']>;
  sourceName?: Maybe<Scalars['String']['output']>;
  ticketHolds?: Maybe<Scalars['Float']['output']>;
  ticketIssued?: Maybe<Scalars['Float']['output']>;
  ticketSold?: Maybe<Scalars['Float']['output']>;
  ticketSoldPercentage: Scalars['String']['output'];
  ticketsRefunded?: Maybe<Scalars['Float']['output']>;
  totalBookingFee?: Maybe<Scalars['Float']['output']>;
  totalExclusiveTax?: Maybe<Scalars['Float']['output']>;
  totalHoldsPercentage?: Maybe<Scalars['Float']['output']>;
  totalMembershipTicketCount: Scalars['Float']['output'];
  totalMembershipTicketPercentage?: Maybe<Scalars['Float']['output']>;
  totalNotForSaleCount: Scalars['Float']['output'];
  totalNotForSalePercentage?: Maybe<Scalars['Float']['output']>;
  totalWithBookingFees?: Maybe<Scalars['Float']['output']>;
  transfers?: Maybe<Scalars['Float']['output']>;
  transfersPending?: Maybe<Scalars['Float']['output']>;
  types: Array<FinancialSalesType>;
  venueCapacity: Scalars['Float']['output'];
  /** This is the sourceId for seasons filter */
  zoneId: Scalars['String']['output'];
  zoneName: Scalars['String']['output'];
};

export type FinancialSalesType = {
  __typename?: 'FinancialSalesType';
  /** This is the sum of membershipRenewalHolds and holdByMembershipCount */
  allMembershipHolds?: Maybe<Scalars['Float']['output']>;
  available?: Maybe<Scalars['String']['output']>;
  baseRevenue: Scalars['Float']['output'];
  buyerTransferFees: Scalars['Float']['output'];
  capacity?: Maybe<Scalars['String']['output']>;
  channel?: Maybe<Scalars['String']['output']>;
  channelHolds?: Maybe<Scalars['Int']['output']>;
  comps: Scalars['Float']['output'];
  discounts?: Maybe<Scalars['Float']['output']>;
  holdByMembershipCount?: Maybe<Scalars['Float']['output']>;
  /** Only defined on zone level for seasons filter  */
  isAdmissionZone?: Maybe<Scalars['Boolean']['output']>;
  isCompTicketType?: Maybe<Scalars['Boolean']['output']>;
  isMembership?: Maybe<Scalars['Boolean']['output']>;
  /** Only defined on zone level for seasons filter  */
  isTotalAddon?: Maybe<Scalars['Boolean']['output']>;
  /** This is the sum of ticketIssued and membershipTicketCount */
  issued: Scalars['Float']['output'];
  /**
   * This value should only exist on FinancialSalesType when
   *     the filter is the seasons filter and the source ID is all memberships.
   *     It should only exist on the zone level.
   */
  membershipRenewalHolds?: Maybe<Scalars['Float']['output']>;
  name: Scalars['String']['output'];
  partPaidMemberships: Scalars['Float']['output'];
  partPaidRevenue: Scalars['Float']['output'];
  partPaidTickets: Scalars['Float']['output'];
  posTickets?: Maybe<Scalars['Float']['output']>;
  refunds: Scalars['Float']['output'];
  release?: Maybe<Scalars['String']['output']>;
  sellerTransferFees: Scalars['Float']['output'];
  ticketHolds: Scalars['Float']['output'];
  ticketIssued: Scalars['Float']['output'];
  ticketSold: Scalars['Float']['output'];
  /**
   *
   *       Booking fee is a range when the type is percentage and ticket type fee is a range.
   *       If the price only has one value, the array will only have one value.
   *       Otherwise, the array will have two values, the first being the lowest price and the second being the highest price.
   *
   */
  ticketTypeBookingFeeRange?: Maybe<Array<Scalars['Float']['output']>>;
  /**
   *
   *       Ticket type price is a range since the price can be different for different releases and sections.
   *       If the price is the same for all releases and sections, the array will only have one value.
   *       Otherwise, the array will have two values, the first being the lowest price and the second being the highest price.
   *
   */
  ticketTypePriceRange?: Maybe<Array<Scalars['Float']['output']>>;
  ticketsRefunded: Scalars['Float']['output'];
  totalBookingFee: Scalars['Float']['output'];
  totalDiscounts?: Maybe<Scalars['Float']['output']>;
  totalExclusiveTax: Scalars['Float']['output'];
  totalMembershipTicketCount?: Maybe<Scalars['Float']['output']>;
  totalWithBookingFees: Scalars['Float']['output'];
  transfers: Scalars['Float']['output'];
  transfersPending: Scalars['Float']['output'];
};

export type FindAutomationsInput = {
  automationType?: InputMaybe<Scalars['String']['input']>;
  isActive: Scalars['Boolean']['input'];
};

export type FindExhibitorInput = {
  eventId: Scalars['String']['input'];
  id: Scalars['String']['input'];
};

export type FindScoutsInput = {
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ForecastScenario = {
  __typename?: 'ForecastScenario';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
  /** The zones and forecasted seat count attributes */
  zones?: Maybe<Array<ForecastScenarioZone>>;
};

/** Object to hold the zoneId and the seat allocation forecasts */
export type ForecastScenarioZone = {
  __typename?: 'ForecastScenarioZone';
  /** Array of ticket type ids and the forecast cost and spilt of ticket sales */
  ticketTypes: Array<ScenarioZoneTicketType>;
  /** The zone id of for the seats forecast. */
  zoneId?: Maybe<Scalars['String']['output']>;
};

export type ForecastZoneInput = {
  /** How many seats are forecast to be comped. */
  comps: Scalars['Float']['input'];
  /** How many seats are forecast to be comped. */
  contingency: Scalars['Float']['input'];
  /** The zone related to this input */
  zoneId: Scalars['String']['input'];
};

export type FormField = {
  __typename?: 'FormField';
  defaultValue?: Maybe<Scalars['String']['output']>;
  field: Scalars['String']['output'];
  id?: Maybe<Scalars['String']['output']>;
  isCustom?: Maybe<Scalars['Boolean']['output']>;
  isRequired?: Maybe<Scalars['Boolean']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  options?: Maybe<Array<Scalars['String']['output']>>;
  type?: Maybe<Scalars['String']['output']>;
};

export type FormFieldInput = {
  defaultValue?: InputMaybe<Scalars['String']['input']>;
  field: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  isCustom?: InputMaybe<Scalars['Boolean']['input']>;
  isRequired?: InputMaybe<Scalars['Boolean']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  options?: InputMaybe<Array<Scalars['String']['input']>>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type GalleryImage = {
  __typename?: 'GalleryImage';
  aspectRatio?: Maybe<Scalars['Float']['output']>;
  metaData?: Maybe<MetaData>;
  src?: Maybe<Scalars['String']['output']>;
};

export type GalleryImageInput = {
  aspectRatio?: InputMaybe<Scalars['Float']['input']>;
  metaData?: InputMaybe<MetaDataInput>;
  src?: InputMaybe<Scalars['String']['input']>;
};

export type Gate = {
  __typename?: 'Gate';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

/** The gate belonging to a venue */
export type GateInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type GatewayOptions = {
  isBNPL?: InputMaybe<Scalars['Boolean']['input']>;
  /** A unique id to specify a variation for a payment gateway. */
  variantId?: InputMaybe<Scalars['String']['input']>;
};

/** Amount remaining that can be automatically refunded through the payment gateway */
export type GatewayRefundableAmount = {
  __typename?: 'GatewayRefundableAmount';
  integrationName: Scalars['String']['output'];
  /** The amount that is availble to be refunded automatically through the gateway  */
  refundableAmount: Scalars['Float']['output'];
  /** The amount that has already been refunded through this gateway. */
  refundedAmount: Scalars['Float']['output'];
};

/** The valid values for gender. */
export enum Gender {
  Female = 'Female',
  Male = 'Male',
  Other = 'Other'
}

export type GenderBreakDownData = {
  __typename?: 'GenderBreakDownData';
  female: Scalars['Int']['output'];
  male: Scalars['Int']['output'];
  other: Scalars['Int']['output'];
};

export type GenderBreakDownOutput = {
  __typename?: 'GenderBreakDownOutput';
  reportData: GenderBreakDownData;
  reportType: ReportType;
  shouldHide: Scalars['Boolean']['output'];
};

export type Genre = {
  __typename?: 'Genre';
  id: Scalars['ID']['output'];
  /** Name of the genre */
  name: Scalars['String']['output'];
};

export type GetAllCustomizationInput = {
  eventId?: InputMaybe<Scalars['String']['input']>;
  membershipId?: InputMaybe<Scalars['String']['input']>;
};

export type GetHistoryByCustomerIdInput = {
  /** Id of order. Used when looking at a customers order */
  orderId?: InputMaybe<Scalars['String']['input']>;
  /** An array of the reference name of the history item. */
  refName?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Id of customers. Not the id of admins. */
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type GetReportSchedulesInput = {
  eventId?: InputMaybe<Scalars['String']['input']>;
  membershipId?: InputMaybe<Scalars['String']['input']>;
  type: ReportScheduleType;
};

export type GetUserEntriesInput = {
  competitionId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

/** Google Analytics report type */
export enum GoogleAnalyticsReportType {
  Age = 'AGE',
  Device = 'DEVICE',
  Gender = 'GENDER',
  TrafficSource = 'TRAFFIC_SOURCE'
}

export type GoogleAnalyticsReportingFilterInput = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  seasonId?: InputMaybe<Scalars['String']['input']>;
  source: ReportingFilterSource;
  sourceId?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  type: GoogleAnalyticsReportType;
};

export type GrantCompetitionRewardInput = {
  actionType: Scalars['String']['input'];
  competitionId: Scalars['String']['input'];
  orderId?: InputMaybe<Scalars['String']['input']>;
  platform: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type GrantRewardOutput = {
  __typename?: 'GrantRewardOutput';
  actionType: Scalars['String']['output'];
  platform: Scalars['String']['output'];
  value: Scalars['Int']['output'];
};

export type GraphDateItem = {
  __typename?: 'GraphDateItem';
  date: Scalars['DateTime']['output'];
  items: Array<GraphItem>;
};

export enum GraphFilterType {
  AddOns = 'ADD_ONS',
  Memberships = 'MEMBERSHIPS',
  Overall = 'OVERALL',
  Package = 'PACKAGE',
  Tickets = 'TICKETS'
}

export type GraphItem = {
  __typename?: 'GraphItem';
  key?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  value: Scalars['Float']['output'];
};

export type GraphOutput = {
  __typename?: 'GraphOutput';
  dates: Array<GraphDateItem>;
};

export type GraphRangeItem = {
  __typename?: 'GraphRangeItem';
  end: Scalars['String']['output'];
  start: Scalars['String']['output'];
  value: Scalars['Float']['output'];
};

export type GraphTextItem = {
  __typename?: 'GraphTextItem';
  description: Scalars['String']['output'];
  identifier: Scalars['String']['output'];
  items: Array<GraphItem>;
};

/** Grey scale options. */
export enum GreyScale {
  Cool = 'Cool',
  Neutral = 'Neutral',
  Warm = 'Warm'
}

export type HandleInstagramCodeInput = {
  code: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type HeardAboutUsBreakDownOutput = {
  __typename?: 'HeardAboutUsBreakDownOutput';
  count?: Maybe<Scalars['Float']['output']>;
  heardAboutUs?: Maybe<Scalars['String']['output']>;
};

/** Heard about us type */
export enum HeardAboutUsType {
  Billboard = 'Billboard',
  Email = 'Email',
  InternetSearch = 'InternetSearch',
  Other = 'Other',
  Radio = 'Radio',
  SocialMedia = 'SocialMedia',
  WordOfMouth = 'WordOfMouth'
}

export type HighestValueCustomersOutput = {
  __typename?: 'HighestValueCustomersOutput';
  name?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** Represents information about an history item. */
export type History = {
  __typename?: 'History';
  createdAt: Scalars['DateTime']['output'];
  /** History item description. */
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  order?: Maybe<Order>;
  refName: Scalars['String']['output'];
  scoutCommunication?: Maybe<Scout>;
  ticket?: Maybe<Ticket>;
  updatedAt: Scalars['DateTime']['output'];
  /** The user who make this history, should get this value from @CurrentUser */
  user?: Maybe<User>;
};

export type HistoryConnection = {
  __typename?: 'HistoryConnection';
  edges: Array<HistoryEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type HistoryEdge = {
  __typename?: 'HistoryEdge';
  cursor: Scalars['String']['output'];
  node: History;
};

export type HistoryOrderByInput = {
  createdAt?: InputMaybe<OrderByDirection>;
};

/** The valid reference types for history items. */
export enum HistoryReferenceType {
  Competition = 'Competition',
  Order = 'Order',
  Scan = 'Scan',
  ScoutUser = 'ScoutUser',
  User = 'User'
}

export type HoldBestAvailableSeatsInput = {
  categories: Array<Scalars['Int']['input']>;
  holdToken: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
};

export type HoldBestAvailableSeatsOutput = {
  __typename?: 'HoldBestAvailableSeatsOutput';
  nextToEachOther: Scalars['Boolean']['output'];
  objects: Array<Scalars['String']['output']>;
};

export type I18nOutput = {
  __typename?: 'I18nOutput';
  data: Scalars['JSON']['output'];
};

/** Image gallery item */
export type ImageGalleryItem = {
  __typename?: 'ImageGalleryItem';
  cropped?: Maybe<GalleryImage>;
  id: Scalars['String']['output'];
  original?: Maybe<GalleryImage>;
  title?: Maybe<Scalars['String']['output']>;
};

/** Image gallery item */
export type ImageGalleryItemInput = {
  cropped?: InputMaybe<GalleryImageInput>;
  id: Scalars['String']['input'];
  original?: InputMaybe<GalleryImageInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ImportExhibitorAlreadyExistsResultOutput = {
  __typename?: 'ImportExhibitorAlreadyExistsResultOutput';
  email: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type ImportExhibitorInput = {
  eventId: Scalars['String']['input'];
  file: Scalars['Upload']['input'];
};

export type ImportExhibitorOutput = {
  __typename?: 'ImportExhibitorOutput';
  duplicates: Array<ImportExhibitorAlreadyExistsResultOutput>;
  failed: Array<ImportExhibitorParseFailedResultOutput>;
  importedCount: Scalars['Int']['output'];
};

export type ImportExhibitorParseFailedResultOutput = {
  __typename?: 'ImportExhibitorParseFailedResultOutput';
  reason: Scalars['String']['output'];
  rowData: Scalars['String']['output'];
};

export type ImportInput = {
  file: Scalars['Upload']['input'];
};

export type ImportOutput = {
  __typename?: 'ImportOutput';
  /** Returns information about failed lines. */
  failed: Array<FailedImportItem>;
};

/** Import user item */
export type ImportUserItem = {
  __typename?: 'ImportUserItem';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  message?: Maybe<Scalars['String']['output']>;
  processedAt?: Maybe<Scalars['DateTime']['output']>;
  /** import user item status */
  status?: Maybe<ImportUserItemStatus>;
  updatedAt: Scalars['DateTime']['output'];
};

export enum ImportUserItemStatus {
  Failed = 'Failed',
  Success = 'Success'
}

export type InitScout = {
  __typename?: 'InitScout';
  events: Array<Event>;
  membershipTypes: Array<MembershipType>;
  seasons: Array<Season>;
  userTags: Array<Tag>;
  zones: Array<Zone>;
};

/** Inside fee and range. */
export type InsideFeeDetails = {
  __typename?: 'InsideFeeDetails';
  insideFee: Scalars['Float']['output'];
  priceRangeFrom: Scalars['Float']['output'];
  priceRangeTo: Scalars['Float']['output'];
};

/** Inside fee and range. */
export type InsideFeeDetailsInput = {
  insideFee: Scalars['Float']['input'];
  priceRangeFrom: Scalars['Float']['input'];
  priceRangeTo: Scalars['Float']['input'];
};

export type InsightsOverviewOutput = {
  __typename?: 'InsightsOverviewOutput';
  addressableAudience?: Maybe<Scalars['Float']['output']>;
  customerValue?: Maybe<Scalars['Float']['output']>;
  customers?: Maybe<Scalars['Float']['output']>;
  netSales?: Maybe<Scalars['Float']['output']>;
  newReferredCustomers?: Maybe<Scalars['Float']['output']>;
  numberOfOrders?: Maybe<Scalars['Float']['output']>;
  ordersPerUser?: Maybe<Scalars['Float']['output']>;
  referralLinksCreated?: Maybe<Scalars['Float']['output']>;
  repeatPurchasers?: Maybe<Scalars['Float']['output']>;
  ticketsCount?: Maybe<Scalars['Float']['output']>;
};

export type Integration = {
  __typename?: 'Integration';
  /** External secret key (should not be shared) */
  apiKey?: Maybe<Scalars['String']['output']>;
  bnplEnabled?: Maybe<Scalars['Boolean']['output']>;
  bnplTransactionFeePercent?: Maybe<Scalars['Float']['output']>;
  createdAt: Scalars['DateTime']['output'];
  facebookPageId?: Maybe<Scalars['String']['output']>;
  facebookUserId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Integration name */
  name: Scalars['String']['output'];
  /** If payment gateways have different option types this field is used to specify which one to force */
  paymentMethodType?: Maybe<Scalars['String']['output']>;
  /** External public key (can be used in customer frontend) */
  publicKey?: Maybe<Scalars['String']['output']>;
  /** Internal API key (should not be shared) */
  secretKey?: Maybe<Scalars['String']['output']>;
  stripeConnectAccount?: Maybe<StripeConnectAccount>;
  /** Transaction fee. */
  transactionFee?: Maybe<Scalars['Float']['output']>;
  /** Transaction fee(only for stripe). Users can input both fixed and percentage fee for stripe(0.3$+2%). */
  transactionFee2?: Maybe<Scalars['Float']['output']>;
  /** Transaction fee type. */
  transactionFeeType?: Maybe<FeeType>;
  /** Transaction fee type(only for stripe). Users can input both fixed and percentage fee for stripe(0.3$+2%). */
  transactionFeeType2?: Maybe<FeeType>;
  /** Integration type */
  type: IntegrationType;
  updatedAt: Scalars['DateTime']['output'];
  /** External public key for Windcave PxPost. */
  wcPxPostPublicKey?: Maybe<Scalars['String']['output']>;
  /** External secret key for Windcave PxPost. */
  wcPxPostSecretKey?: Maybe<Scalars['String']['output']>;
  /** Webhook URL to point integration to */
  webhookUrl?: Maybe<Scalars['String']['output']>;
};

/** Integration group. */
export enum IntegrationGroup {
  Accounting = 'ACCOUNTING',
  Crm = 'CRM',
  Ecommerce = 'ECOMMERCE',
  Marketing = 'MARKETING',
  Payment = 'PAYMENT',
  Social = 'SOCIAL'
}

/** Integration type. */
export enum IntegrationType {
  AccountingXero = 'ACCOUNTING_XERO',
  CrmAdobe = 'CRM_ADOBE',
  CrmCustom = 'CRM_CUSTOM',
  CrmKore = 'CRM_KORE',
  CrmUssegment = 'CRM_USSEGMENT',
  EcommerceShopify = 'ECOMMERCE_SHOPIFY',
  MarketingDatorama = 'MARKETING_DATORAMA',
  MarketingMailchimp = 'MARKETING_MAILCHIMP',
  MarketingMessageMedia = 'MARKETING_MESSAGE_MEDIA',
  PaymentAfterpay = 'PAYMENT_AFTERPAY',
  PaymentLaybuy = 'PAYMENT_LAYBUY',
  PaymentMpaisa = 'PAYMENT_MPAISA',
  PaymentPin = 'PAYMENT_PIN',
  PaymentStripe = 'PAYMENT_STRIPE',
  PaymentWindcave = 'PAYMENT_WINDCAVE',
  ReportingShopify = 'REPORTING_SHOPIFY',
  SocialInstagram = 'SOCIAL_INSTAGRAM'
}

export type IntegrationWhereInput = {
  group?: InputMaybe<IntegrationGroup>;
};

export type InternationalPhoneNumberOutput = {
  __typename?: 'InternationalPhoneNumberOutput';
  country: Scalars['String']['output'];
  number: Scalars['String']['output'];
};

export type ItemFee = {
  __typename?: 'ItemFee';
  fees: Array<Fee>;
  id: Scalars['String']['output'];
  isComp: Scalars['Boolean']['output'];
};

export type JoinWaitlistInput = {
  customFields?: InputMaybe<Array<CustomFieldInput>>;
  email: Scalars['String']['input'];
  eventId: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  referralCode?: InputMaybe<Scalars['String']['input']>;
  usableForMarketing: Scalars['Boolean']['input'];
  userAcquisition?: InputMaybe<UserAcquisition>;
};

/** Landing page options. */
export enum LandingPage {
  MultiEvent = 'MultiEvent',
  SingleEvent = 'SingleEvent',
  Tours = 'Tours'
}

/** Order line items */
export type LineItem = {
  __typename?: 'LineItem';
  createdAt: Scalars['DateTime']['output'];
  /** The amount of custom taxes per item */
  customTaxAmount?: Maybe<Scalars['Float']['output']>;
  customTaxRate?: Maybe<Scalars['Float']['output']>;
  /** Event addon. Only available for addon line items. */
  eventAddon?: Maybe<EventAddon>;
  id: Scalars['ID']['output'];
  isComp: Scalars['Boolean']['output'];
  /** Membership addon. Only available for addon line items. */
  membershipAddon?: Maybe<MembershipAddon>;
  /** Membership type. Only available for membership type line items. */
  membershipType?: Maybe<MembershipType>;
  /** Item name. */
  name: Scalars['String']['output'];
  /** Original price of the line item without any discounts applied. */
  originalPrice: Scalars['Float']['output'];
  pointItem?: Maybe<PointItem>;
  /** Price of the line item with discounts applied. */
  price: Scalars['Float']['output'];
  /** Item quantity. */
  quantity: Scalars['Float']['output'];
  /** The release associated with the line item. Returns null if the line item is not bound to a release. */
  release?: Maybe<Release>;
  /** Seat label. Only available for ticket type line items. */
  seatLabel?: Maybe<Scalars['String']['output']>;
  /** Seat section. Only available for ticket type line items. */
  seatSection?: Maybe<Scalars['String']['output']>;
  seatSectionEntity?: Maybe<Section>;
  /** Seat tags. Only available for ticket type line items. */
  seatTags?: Maybe<Array<Scalars['String']['output']>>;
  /** Seat type. Only available for seated events. */
  seatType?: Maybe<SeatType>;
  /** Seat zone. Only available for ticket type line items. */
  seatZone?: Maybe<Scalars['String']['output']>;
  seatZoneEntity?: Maybe<Zone>;
  /** This is the stadium levy fee amount for the line item. */
  stadiumLevyFee?: Maybe<Scalars['Float']['output']>;
  taxAmount: Scalars['Float']['output'];
  /** Tax calculation method. either inclusive or exclusive. */
  taxCalculationMethod?: Maybe<TaxCalculationMethod>;
  /** Tax rate applied to the item. */
  taxRate: Scalars['Float']['output'];
  /** Item ticket fee. */
  ticketFee?: Maybe<Scalars['Float']['output']>;
  /** Ticket fee amount (for 1 ticket) */
  ticketFeeAmount?: Maybe<Scalars['Float']['output']>;
  /** Ticket fee type. */
  ticketFeeType?: Maybe<FeeType>;
  /** Ticket type. Only available for ticket type line items. */
  ticketType?: Maybe<TicketType>;
  /** Total amount: quantity * (price + ticketFee + levyFee) */
  total: Scalars['Float']['output'];
  /** Total per unit amount: price + ticketFee + levyFee */
  totalPerUnit: Scalars['Float']['output'];
  type: LineItemType;
  updatedAt: Scalars['DateTime']['output'];
};

/** Action to perform on line item */
export enum LineItemAction {
  Complete = 'COMPLETE',
  Delete = 'DELETE',
  Update = 'UPDATE'
}

export type LineItemActionInput = {
  /** Action to perform on the line item. */
  action: LineItemAction;
  /** ID of the line item in the order. */
  id: Scalars['String']['input'];
  /** New ticket or membership type ID (only relevant for `UPDATE`). */
  ticketOrMembershipTypeId?: InputMaybe<Scalars['String']['input']>;
};

export type LineItemConnection = {
  __typename?: 'LineItemConnection';
  edges: Array<LineItemEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LineItemEdge = {
  __typename?: 'LineItemEdge';
  cursor: Scalars['String']['output'];
  node: LineItem;
};

export type LineItemInput = {
  /** Addon id. Only applicable for `addon` line items. */
  addonId?: InputMaybe<Scalars['String']['input']>;
  /** Membership type. Only applicable for `membership` line items. */
  membershipTypeId?: InputMaybe<Scalars['String']['input']>;
  pointItemId?: InputMaybe<Scalars['String']['input']>;
  /** Previous ticket. Only applicable for seat changes and membership renewals */
  previousTicketId?: InputMaybe<Scalars['String']['input']>;
  /** Price of the line item with discounts applied. Only used for ticket transfers. */
  price?: InputMaybe<Scalars['Float']['input']>;
  /** Line item quantity. */
  quantity: Scalars['Float']['input'];
  /** Seat label. Only applicable seated venues in combination with for `ticket` and `membership` line items. */
  seatLabel?: InputMaybe<Scalars['String']['input']>;
  /** Seat section. Only available for ticket type line items. */
  seatSection?: InputMaybe<Scalars['String']['input']>;
  /** Seat tags. Only available for ticket type line items. */
  seatTags?: InputMaybe<Array<Scalars['String']['input']>>;
  seatType?: InputMaybe<Scalars['String']['input']>;
  /** Seat zone. Only applicable to non-seated venues in combination for `ticket` and `membership` line items. */
  seatZone?: InputMaybe<Scalars['String']['input']>;
  /** Ticket transfer id. Only applicable for `ticket` line items in a ticket transfer order. */
  ticketTransferId?: InputMaybe<Scalars['String']['input']>;
  /** Ticket type. Only applicable for `ticket` line items. */
  ticketTypeId?: InputMaybe<Scalars['String']['input']>;
  /** Item type. */
  type: LineItemType;
};

export type LineItemToCompleteInput = {
  /** ID of the line item in the order. */
  id: Scalars['String']['input'];
  /** Quantity of tickets to keep on each line item. */
  quantity: Scalars['Int']['input'];
};

export enum LineItemType {
  Addon = 'Addon',
  Membership = 'Membership',
  MembershipSingleEventTicket = 'MembershipSingleEventTicket',
  Point = 'Point',
  Ticket = 'Ticket'
}

export type LineItemsToCompleteInput = {
  /** Quantity of tickets to keep on each line item. */
  items: Array<LineItemToCompleteInput>;
  /** Selected payment method if order status is paid (allowed: cash, eftpos, invoice, other). */
  method: PaymentProvider;
  /** Will not send order confirmation email if set */
  skipOrderConfirmation: Scalars['Boolean']['input'];
};

export type LinkedAccountRegisterInput = {
  email: Scalars['String']['input'];
  newAccountPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type LinkedAccountUser = {
  __typename?: 'LinkedAccountUser';
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  hasVerifiedEmail: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  organizationSlugs: Array<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type ListedReleaseOptionsInput = {
  askForDietaryRequirements?: InputMaybe<Scalars['Boolean']['input']>;
  askHowDidYouHearAboutUs?: InputMaybe<Scalars['Boolean']['input']>;
  endCondition?: InputMaybe<ReleaseEndCondition>;
  endConditionDate?: InputMaybe<Scalars['DateTime']['input']>;
  endConditionQuantity?: InputMaybe<Scalars['Float']['input']>;
  startCondition?: InputMaybe<ReleaseStartCondition>;
  startConditionDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type LocationArgs = {
  __typename?: 'LocationArgs';
  exclude: Scalars['Boolean']['output'];
  kind: BroadcastMarketingFiltersV2Kind;
  list: Array<Scalars['String']['output']>;
  locationFilterType: LocationFilterTypes;
};

export enum LocationFilterTypes {
  Country = 'COUNTRY',
  District = 'DISTRICT',
  Locality = 'LOCALITY',
  Region = 'REGION',
  State = 'STATE'
}

export type LocationOutput = {
  __typename?: 'LocationOutput';
  amount?: Maybe<Scalars['Float']['output']>;
  city: Scalars['String']['output'];
  count: Scalars['String']['output'];
};

export type LocationOutputV2 = {
  __typename?: 'LocationOutputV2';
  faceValueTicketRevenue: Scalars['Float']['output'];
  faceValueTicketRevenuePercentage: Scalars['Float']['output'];
  label: Scalars['String']['output'];
  membershipSoldCount: Scalars['Float']['output'];
  membershipSoldPercentage: Scalars['Float']['output'];
  orderAmount: Scalars['Float']['output'];
  orderAmountPercentage: Scalars['Float']['output'];
  orderCount: Scalars['Float']['output'];
  orderCountPercentage: Scalars['Float']['output'];
  ticketSoldCount: Scalars['Float']['output'];
  ticketSoldPercentage: Scalars['Float']['output'];
  userCount: Scalars['Float']['output'];
  userCountPercentage: Scalars['Float']['output'];
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  posId?: InputMaybe<Scalars['String']['input']>;
};

/** Organization marketing settings. */
export type Marketing = {
  __typename?: 'Marketing';
  /** Google Tag Manager ID */
  gtmId?: Maybe<Scalars['String']['output']>;
  /** Facebook Pixel ID */
  pixelId?: Maybe<Scalars['String']['output']>;
};

export type MarketingFiltersInput = {
  criteria?: InputMaybe<BroadcastFilterCriteria>;
  filterType: BroadcastFilterType;
  ids: Array<Scalars['String']['input']>;
};

/** Organization marketing settings. */
export type MarketingInput = {
  /** Google Tag Manager ID */
  gtmId?: InputMaybe<Scalars['String']['input']>;
  /** Facebook Pixel ID */
  pixelId?: InputMaybe<Scalars['String']['input']>;
};

export type MarketingPreferenceUnsubscribeOutput = {
  __typename?: 'MarketingPreferenceUnsubscribeOutput';
  id: Scalars['String']['output'];
};

export type Membership = {
  __typename?: 'Membership';
  accessCodes: Array<AccessCode>;
  /** The accessibility info of the membership */
  accessibility?: Maybe<Scalars['String']['output']>;
  addons: Array<MembershipAddon>;
  backgroundImage?: Maybe<ExtendedFile>;
  /** The banner associated with the membership. */
  banner?: Maybe<ExtendedFile>;
  /** The booking fee for the membership. */
  bookingFee: Scalars['Float']['output'];
  /** The booking fee type of the membership. */
  bookingFeeType: FeeType;
  /** Whether naming a membership is available. */
  canChangeSeats: Scalars['Boolean']['output'];
  /** Whether naming a membership is available. */
  canNameMembership: Scalars['Boolean']['output'];
  /** Whether renaming a membership is available. */
  canRenameMembership: Scalars['Boolean']['output'];
  canTransferTickets: Scalars['Boolean']['output'];
  canUsePoints: Scalars['Boolean']['output'];
  /** The fee for changing seats for the membership. */
  changingSeatsFee?: Maybe<Scalars['Float']['output']>;
  createdAt: Scalars['DateTime']['output'];
  customTaxRate: Scalars['Float']['output'];
  defaultDateRange?: Maybe<DateRange>;
  /** The description of the membership. */
  description: Scalars['String']['output'];
  descriptionImage?: Maybe<ExtendedFile>;
  digitalInfo?: Maybe<DigitalInfo>;
  digitalPassCodesStatus?: Maybe<DigitalPassCodeStatusOutput>;
  /** Email address that gets sent a notifcation every time an order is completed */
  emailNotification?: Maybe<Scalars['String']['output']>;
  enableAutoRenew: Scalars['Boolean']['output'];
  /** The end date of the membership. */
  endDate: Scalars['DateTime']['output'];
  events?: Maybe<Array<Event>>;
  fees: OrderFee;
  /** The payment gateways enabled for the event. */
  gateways?: Maybe<Array<Integration>>;
  /** The ID of the Google Wallet Event Class for this membership */
  googleWalletEventClassId?: Maybe<Scalars['String']['output']>;
  hasAccessCodes: Scalars['Boolean']['output'];
  hasPromoCodes: Scalars['Boolean']['output'];
  /** Flag to determine if the membership is hidden from the public */
  hiddenFromPublic: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  /** Important notice section on the tickets */
  importantNotice?: Maybe<Scalars['String']['output']>;
  /** The accessibility info of the membership */
  invoiceInformation?: Maybe<Scalars['String']['output']>;
  /** The active status of the membership. */
  isActive: Scalars['Boolean']['output'];
  /** Whether the membership is ticketed */
  isTicketed: Scalars['Boolean']['output'];
  /** Flag to issue the value of the membership as credit on sale */
  issueCreditOnSale: Scalars['Boolean']['output'];
  membershipHoldersCount?: Maybe<Scalars['Float']['output']>;
  membershipKind: MembershipKind;
  membershipZones: Array<MembershipZone>;
  multiBuyPromotions: Array<MembershipMultiBuyPromotion>;
  /** Name of the membership. */
  name: Scalars['String']['output'];
  paymentPlanSettings?: Maybe<PaymentPlanSettings>;
  previousMemberships: Array<Membership>;
  printBanner1?: Maybe<ExtendedFile>;
  printBanner2?: Maybe<ExtendedFile>;
  /** The referral campaign associated with this membership */
  referralCampaignId?: Maybe<Scalars['String']['output']>;
  releasedRenewalHolds: Scalars['Boolean']['output'];
  /** The renaming fee for the membership. */
  renamingFee?: Maybe<Scalars['Float']['output']>;
  renewalMembership?: Maybe<Membership>;
  season?: Maybe<Season>;
  seekaConfig?: Maybe<SeekaOutput>;
  seoMetadata?: Maybe<SeoMetadata>;
  /** Shipping options of the membership. */
  shippingOptions?: Maybe<ShippingOptions>;
  /** Whether the schedule is shown on the customer portal */
  showSchedule?: Maybe<Scalars['Boolean']['output']>;
  /** The start date of the membership. */
  startDate: Scalars['DateTime']['output'];
  tags: Array<Tag>;
  taxCalculationMethod: TaxCalculationMethod;
  taxRate: Scalars['Float']['output'];
  /** The terms and conditions of the membership */
  termsAndConditions?: Maybe<Scalars['String']['output']>;
  /** The thumbnail associated with the membership. */
  thumbnail?: Maybe<ExtendedFile>;
  ticketCover?: Maybe<MembershipTicketCover>;
  types: Array<MembershipType>;
  updatedAt: Scalars['DateTime']['output'];
  /** The venue associated with the membership. */
  venue?: Maybe<Venue>;
};


export type MembershipTypesArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
};

export type MembershipAddon = {
  __typename?: 'MembershipAddon';
  /** Image to be shown on the customer portal of the addon . Returns null if the not set. */
  addonImage?: Maybe<ExtendedFile>;
  createdAt: Scalars['DateTime']['output'];
  /** The brief description of the addon. */
  description?: Maybe<Scalars['String']['output']>;
  displayOrder: Scalars['Int']['output'];
  /** Indicates whether naming the addon is possible or not. */
  enableNaming: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  /** The active status of the addon. */
  isActive: Scalars['Boolean']['output'];
  maxPurchaseQuantity: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  namingFields: Array<FormField>;
  /** The price associated with the addon. */
  price: Scalars['Float']['output'];
  /** Maximum quantity to be sold for the addon. */
  quantity: Scalars['Float']['output'];
  /** Quantity allocated already */
  quantityAllocated: Scalars['Float']['output'];
  /** Quantity remaining via order created or canceled, does not take into account the order status */
  remaining: Scalars['Float']['output'];
  /** The restrictions applied to the addon. */
  restrictions?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type MembershipArgs = {
  __typename?: 'MembershipArgs';
  exclude: Scalars['Boolean']['output'];
  kind: BroadcastMarketingFiltersV2Kind;
  membershipIds: Array<Scalars['String']['output']>;
};

export type MembershipAutoRenewal = {
  __typename?: 'MembershipAutoRenewal';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  membership: Membership;
  membershipId: Scalars['String']['output'];
  /** Mappings for previous memberships used by renewal process */
  membershipMappings: Array<MembershipRenewalMapping>;
  organizationId: Scalars['String']['output'];
  reminderDate?: Maybe<Scalars['DateTime']['output']>;
  renewalDate?: Maybe<Scalars['DateTime']['output']>;
  /** Current step of the auto renewal process */
  renewalStep: MembershipAutoRenewalStep;
  updatedAt: Scalars['DateTime']['output'];
};

export type MembershipAutoRenewalInput = {
  membershipId: Scalars['String']['input'];
  membershipMappings: Array<MembershipRenewalMappingInput>;
  reminderDate?: InputMaybe<Scalars['DateTime']['input']>;
  renewalDate: Scalars['DateTime']['input'];
  /** Current step of the auto renewal process */
  renewalStep: MembershipAutoRenewalStep;
};

export type MembershipAutoRenewalOutput = {
  __typename?: 'MembershipAutoRenewalOutput';
  autoRenewal?: Maybe<MembershipAutoRenewal>;
};

export enum MembershipAutoRenewalStep {
  Reminded = 'Reminded',
  Renewed = 'Renewed',
  Scheduled = 'Scheduled'
}

export type MembershipConnection = {
  __typename?: 'MembershipConnection';
  edges: Array<MembershipEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MembershipEdge = {
  __typename?: 'MembershipEdge';
  cursor: Scalars['String']['output'];
  node: Membership;
};

export type MembershipFinancial = {
  __typename?: 'MembershipFinancial';
  averageOrderAmount: PeReportStatistic;
  avgOrderItemsCount: PeReportStatistic;
  discounts: PeReportStatistic;
  netSales: PeReportStatistic;
  partPaidRevenue: PeReportStatistic;
  planTotalOutstanding: PeReportStatistic;
};

export type MembershipInformation = {
  __typename?: 'MembershipInformation';
  banner?: Maybe<ExtendedFile>;
  endDate: Scalars['String']['output'];
  id: Scalars['String']['output'];
  location?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  startDate: Scalars['String']['output'];
};

export enum MembershipKind {
  Digital = 'Digital',
  Standard = 'Standard'
}

export type MembershipLayoutOutput = {
  __typename?: 'MembershipLayoutOutput';
  defaultDateRange: DateRange;
  membership?: Maybe<MembershipInformation>;
};

export type MembershipMultiBuyPromotion = {
  __typename?: 'MembershipMultiBuyPromotion';
  buyMembershipType?: Maybe<MembershipType>;
  buyQuantity: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  enabled: Scalars['Boolean']['output'];
  getMembershipType?: Maybe<MembershipType>;
  getQuantity: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
  used: Scalars['Float']['output'];
};

export type MembershipOrderByInput = {
  createdAt?: InputMaybe<OrderByDirection>;
  endDate?: InputMaybe<OrderByDirection>;
  startDate?: InputMaybe<OrderByDirection>;
  updatedAt?: InputMaybe<OrderByDirection>;
};

export type MembershipPromoCode = {
  __typename?: 'MembershipPromoCode';
  /** The unique code that represents the promotion. */
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  /** The discount amount of the promotion. */
  discountAmount: Scalars['Float']['output'];
  /** The discount type associated with the promotion. */
  discountType: DiscountType;
  enabled: Scalars['Boolean']['output'];
  /** The end date condition of the promotion. Returns `null` when inactive. */
  endDate?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  /** The maximum order amount condition of the promotion. Returns `null` when inactive. */
  maxOrderAmount?: Maybe<Scalars['Float']['output']>;
  /** The maximum amount of use condition of the promotion. Returns `null` when inactive. */
  maxUsage?: Maybe<Scalars['Int']['output']>;
  membershipAddons: Array<Scalars['String']['output']>;
  membershipTypes: Array<Scalars['String']['output']>;
  /** The minimum order amount condition of the promotion. Returns `null` when inactive. */
  minOrderAmount?: Maybe<Scalars['Float']['output']>;
  /** The start date condition of the promotion. Returns `null` when inactive. */
  startDate?: Maybe<Scalars['DateTime']['output']>;
  /** The type of the promotion which determines on which items the promotion will be applied. */
  type: MembershipPromoCodeType;
  updatedAt: Scalars['DateTime']['output'];
  /** The total amount of usage of the promotion. */
  used?: Maybe<Scalars['Int']['output']>;
};

export enum MembershipPromoCodeType {
  Addons = 'ADDONS',
  Membership = 'MEMBERSHIP',
  MembershipAndAddons = 'MEMBERSHIP_AND_ADDONS'
}

export type MembershipRenewalMapping = {
  __typename?: 'MembershipRenewalMapping';
  membershipId: Scalars['String']['output'];
  membershipTypeMappings?: Maybe<Array<MembershipTypeMapping>>;
};

export type MembershipRenewalMappingInput = {
  membershipId: Scalars['String']['input'];
  membershipTypeMappings?: InputMaybe<Array<MembershipTypeMappingInput>>;
};

export type MembershipSales = {
  __typename?: 'MembershipSales';
  membershipsIssued: PeReportStatistic;
  membershipsRenewed: PeReportStatistic;
  membershipsSold: PeReportStatistic;
};

/** Represents a membership type in a seating zone. */
export type MembershipSeatingZoneType = {
  __typename?: 'MembershipSeatingZoneType';
  /** The active status of the zone ticket. Defaults to `false`. */
  isActive: Scalars['Boolean']['output'];
  /** The membership type id of the membership zone. */
  membershipTypeId: Scalars['String']['output'];
  /** The price of the zone ticket. Returns null if `pricingLevel` of the parent is set to other than `zone`. */
  price?: Maybe<Scalars['Float']['output']>;
  purchaseRestrictions: Array<PurchaseRestriction>;
  purchaseRestrictionsHelpText?: Maybe<Array<Scalars['String']['output']>>;
  /** The sections of the zone ticket. Returns null if `pricingLevel` of the parent is set to other than `section`. */
  sections?: Maybe<Array<ZonePricingTypeSection>>;
};

export type MembershipSubscription = {
  __typename?: 'MembershipSubscription';
  /** Billing details of the subscription */
  billingDetails: MembershipSubscriptionBillingDetails;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  lastOrder: Order;
  /** Last order id */
  lastOrderId: Scalars['String']['output'];
  latestRenewalId?: Maybe<Scalars['String']['output']>;
  /** Number of membership tickets */
  membershipTicketCount: Scalars['Float']['output'];
  renewals: Array<MembershipSubscriptionRenewal>;
  stripeSubscriptionId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  /** User id */
  userId: Scalars['String']['output'];
};

export type MembershipSubscriptionBillingDetails = {
  __typename?: 'MembershipSubscriptionBillingDetails';
  cardBrand: Scalars['String']['output'];
  cardExpiryMonth: Scalars['Float']['output'];
  cardExpiryYear: Scalars['Float']['output'];
  cardLast4: Scalars['String']['output'];
  emailAddress: Scalars['String']['output'];
};

export type MembershipSubscriptionPortalOutput = {
  __typename?: 'MembershipSubscriptionPortalOutput';
  url?: Maybe<Scalars['String']['output']>;
};

export type MembershipSubscriptionRenewal = {
  __typename?: 'MembershipSubscriptionRenewal';
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt: Scalars['DateTime']['output'];
  currentMembershipId: Scalars['String']['output'];
  currentOrderId?: Maybe<Scalars['String']['output']>;
  dueAt?: Maybe<Scalars['DateTime']['output']>;
  failedAt?: Maybe<Scalars['DateTime']['output']>;
  failureReason?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  membershipSubscriptionId: Scalars['String']['output'];
  previousMembershipId: Scalars['String']['output'];
  previousOrderId: Scalars['String']['output'];
  remindedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Current state of the subscription */
  subscriptionState?: Maybe<MembershipSubscriptionState>;
  updatedAt: Scalars['DateTime']['output'];
};

export enum MembershipSubscriptionState {
  Cancelled = 'Cancelled',
  Overdue = 'Overdue',
  Paid = 'Paid',
  Pending = 'Pending',
  Scheduled = 'Scheduled'
}

export type MembershipTicketCover = {
  __typename?: 'MembershipTicketCover';
  createdAt: Scalars['DateTime']['output'];
  disabledAt?: Maybe<Scalars['DateTime']['output']>;
  enabledAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  /** Is ticket cover enabled */
  isEnabled?: Maybe<Scalars['Boolean']['output']>;
  /** Membership that the ticket cover is configured for */
  membership: Membership;
  /** Platform fee as percentage of ticket price */
  platformFeePercentage: Scalars['Float']['output'];
  /** Promoter fee as percentage of ticket price */
  promoterFeePercentage: Scalars['Float']['output'];
  /** Ticket cover purchase behaviour */
  purchaseBehaviour: TicketCoverPurchaseBehaviour;
  /** Total fee as percentage of ticket price */
  totalFeePercentage?: Maybe<Scalars['Float']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type MembershipTicketCoverInput = {
  /** Whether ticket cover is enabled */
  isEnabled: Scalars['Boolean']['input'];
  /** Promoter fee as percentage of ticket price */
  promoterFeePercentage: Scalars['Float']['input'];
  /** Ticket cover purchase behaviour */
  purchaseBehaviour: TicketCoverPurchaseBehaviour;
};

export type MembershipType = {
  __typename?: 'MembershipType';
  accessCodes?: Maybe<Array<AccessCode>>;
  createdAt: Scalars['DateTime']['output'];
  /** Restrictions for the membership type. */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isGuestCard: Scalars['Boolean']['output'];
  isHidden: Scalars['Boolean']['output'];
  /** The kind of the membership type. */
  kind: MembershipTypeKind;
  maxPurchaseQuantity?: Maybe<Scalars['Int']['output']>;
  membership: Membership;
  minPurchaseQuantity?: Maybe<Scalars['Int']['output']>;
  /** Name of the membership type. */
  name: Scalars['String']['output'];
  namingFields: Array<FormField>;
  /** Number of membership tickets that must be purchased in this set. */
  quantitySet?: Maybe<Scalars['Int']['output']>;
  /** Restrictions for the membership type. */
  restrictions?: Maybe<Scalars['String']['output']>;
  /** The ticket fee. */
  ticketFee: Scalars['Float']['output'];
  /** The ticket fee type. */
  ticketFeeType: FeeType;
  updatedAt: Scalars['DateTime']['output'];
};

export type MembershipTypeEventTransferPrice = {
  __typename?: 'MembershipTypeEventTransferPrice';
  createdAt: Scalars['DateTime']['output'];
  event: Event;
  id: Scalars['ID']['output'];
  maxSalePrice: Scalars['Float']['output'];
  membership: Membership;
  membershipType: MembershipType;
  membershipZone: MembershipZone;
  updatedAt: Scalars['DateTime']['output'];
};

/** Membership kind for membership type. */
export enum MembershipTypeKind {
  Addon = 'ADDON',
  ComplimentaryNamed = 'COMPLIMENTARY_NAMED',
  ComplimentaryUnnamed = 'COMPLIMENTARY_UNNAMED',
  Standard = 'STANDARD'
}

export type MembershipTypeMapping = {
  __typename?: 'MembershipTypeMapping';
  newMembershipTypeId: Scalars['String']['output'];
  previousMembershipTypeId: Scalars['String']['output'];
};

export type MembershipTypeMappingInput = {
  newMembershipTypeId: Scalars['String']['input'];
  previousMembershipTypeId: Scalars['String']['input'];
};

export type MembershipTypePurchaseTotal = {
  __typename?: 'MembershipTypePurchaseTotal';
  membershipType: MembershipType;
  total: Scalars['Int']['output'];
};

export type MembershipTypeTransferPriceInput = {
  eventId: Scalars['String']['input'];
  maxSalePrice: Scalars['Float']['input'];
};

export type MembershipWhereInput = {
  /** Membership active status. */
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Fuzzy search query. */
  q?: InputMaybe<Scalars['String']['input']>;
  seasonId?: InputMaybe<Scalars['String']['input']>;
};

export type MembershipZone = {
  __typename?: 'MembershipZone';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  /** The active status of the zone. Defaults to `false`. */
  isActive: Scalars['Boolean']['output'];
  /** The list of ticket types of the release zone. */
  membershipTypes: Array<MembershipSeatingZoneType>;
  /** The pricing level of the zone. Will be set to `zone` for non-seated events. */
  pricingLevel: ZonePricingLevel;
  updatedAt: Scalars['DateTime']['output'];
  zone: Zone;
};

/** The zone belonging to a release zone */
export type MembershipZoneZoneInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

/** Represents the overview of mentions. */
export type MentionOverview = {
  __typename?: 'MentionOverview';
  commentMentionCount: Scalars['Float']['output'];
  mediaMentionCount: Scalars['Float']['output'];
  storyMentionCount: Scalars['Float']['output'];
};

export type MentionOverviewInput = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MetaData = {
  __typename?: 'MetaData';
  height?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type MetaDataInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MinTicketTypePricesForEventOutput = {
  __typename?: 'MinTicketTypePricesForEventOutput';
  price: Scalars['Float']['output'];
  ticketTypeId: Scalars['String']['output'];
};

export type MoneyStatistic = {
  __typename?: 'MoneyStatistic';
  label: Scalars['String']['output'];
  tooltip?: Maybe<StatisticTooltip>;
  value: Scalars['Float']['output'];
};

export type MultiBuyPromotionUnion = EventMultiBuyPromotion | MembershipMultiBuyPromotion;

export type Mutation = {
  __typename?: 'Mutation';
  addAccessCodesToMembership: Array<AccessCode>;
  addAuditLog: Scalars['Boolean']['output'];
  addExhibitor: ExpoExhibitor;
  addForecastScenario: EventForecastOutput;
  addGatesToScannableGatesId: EventAddon;
  addGatesToZoneAndEvent: Event;
  addPosTransaction: PosTransaction;
  addReminderToScoutCommunicationUser: Scalars['Boolean']['output'];
  addUnsubscribeReason: User;
  addUnsubscribeReasonV2: Scalars['Boolean']['output'];
  applyPromoCodeToOrder: Order;
  assignScoutCommunicationUsersToAgent: Scalars['Boolean']['output'];
  assignTwoFactorAuthenticationSecret: TwoFactorAuthenticationSetupResult;
  authenticateWithTwoFactor: User;
  broadcastReportingLinkOpened: Scalars['Boolean']['output'];
  broadcastReportingOrderCreated: Scalars['Boolean']['output'];
  broadcastReportingSetAsSpamFromUser: Scalars['Boolean']['output'];
  bulkCreateOrUpdateAttendee: Scalars['Boolean']['output'];
  cancelOrder: Order;
  cancelPendingTicketTransfer: Scalars['Boolean']['output'];
  clearReminderFromScoutCommunicationUser: Scalars['Boolean']['output'];
  completePreprintTicketOrder: Order;
  completeShopifySetup: Scalars['Boolean']['output'];
  completeStripeOAuthSetup: CompleteStripeOAuth;
  completeStripeSetup: Integration;
  /** Copies the templates from another event or membership */
  copyEmail: Scalars['Boolean']['output'];
  createAutomation: Automation;
  createBulkOrders: Scalars['Boolean']['output'];
  createCompetition: Competition;
  createEvent: Event;
  createEventAddon: EventAddon;
  createEventMultiBuyPromotion: EventMultiBuyPromotion;
  createEventPromoCode: EventPromoCode;
  createHistory: History;
  createIntegration: Integration;
  createMembership: Membership;
  createMembershipAddon: MembershipAddon;
  createMembershipMultiBuyPromotion: MembershipMultiBuyPromotion;
  createMembershipPromoCode: MembershipPromoCode;
  createMembershipType: MembershipType;
  createOrUpdateAccessCodeRelease: AccessCodeReleaseOutput;
  createOrUpdateAttendee: ExpoAttendee;
  createOrUpdateMembershipAutoRenewal: MembershipAutoRenewal;
  createOrUpdateNamingField: NamingFieldOutput;
  createOrUpdatePosRelease: Release;
  createOrUpdatePresale: PresaleReleaseOutput;
  createOrUpdateShopifySettings: ShopifySettings;
  createOrder: OrderCreateOutput;
  createOrderToTrackingCodeAssociation: Scalars['Boolean']['output'];
  createOrganization: CreateOrganizationOutput;
  createPayment: CreatePaymentOutput;
  createPinPaymentCharge: PinPaymentChargeResponse;
  createPoint: Point;
  createPointItem: PointItem;
  createPos: Pos;
  createPosUser: User;
  createPurchaseRestriction: PurchaseRestriction;
  createRedirectUrl: RedirectUrl;
  createReferralCampaign: ReferralCampaign;
  createReferralRewards: Array<ReferralReward>;
  createRefund: Refund;
  createRelease: Release;
  createReleaseZone: ReleaseZone;
  createReportSchedule: ReportSchedule;
  createResaleTicketType: TicketType;
  createSMSBroadcast: SmsBroadcastSaveOutput;
  createScout: Scout;
  createScoutCommunication: ScoutCommunication;
  createSeason: Season;
  createShortUrl: ShortUrl;
  createTag: Tag;
  createTemporaryPosUser: CreateTemporaryPosUserOutput;
  createTestEmail: Scalars['Boolean']['output'];
  createTicketType: TicketType;
  createTrackingCode: Scalars['Boolean']['output'];
  /** Creates a user. */
  createUser: User;
  createUsherTicketType: TicketType;
  createVenue: Venue;
  deleteAccessCode: AccessCodeReleaseOutput;
  deleteAccessCodesFromMembership: Scalars['Boolean']['output'];
  deleteAttendee: Scalars['Boolean']['output'];
  deleteBroadcast: DeleteOneOutput;
  deleteCompetition: Scalars['Boolean']['output'];
  deleteEventAddon: DeleteOneOutput;
  deleteEventMultiBuyPromotion: DeleteOneOutput;
  deleteEventPromoCode: DeleteOneOutput;
  deleteExhibitor: Scalars['Boolean']['output'];
  deleteForecastScenario: EventForecastOutput;
  deleteIntegration: Scalars['Boolean']['output'];
  deleteMembershipAddon: DeleteOneOutput;
  deleteMembershipAutoRenewalOrders: Scalars['Boolean']['output'];
  deleteMembershipMultiBuyPromotion: DeleteOneOutput;
  deleteMembershipPromoCode: DeleteOneOutput;
  deleteMembershipType: DeleteOneOutput;
  deleteNamingField: Scalars['Boolean']['output'];
  deletePresale: Scalars['Boolean']['output'];
  deletePurchaseRestriction: DeleteOneOutput;
  deleteRelease: DeleteOneOutput;
  deleteReleaseZone: Scalars['Boolean']['output'];
  deleteReportSchedule: Scalars['Boolean']['output'];
  deleteResaleTicketType: Scalars['Boolean']['output'];
  deleteSMSBroadcast: DeleteOneOutput;
  deleteScoutUsers: Scalars['Boolean']['output'];
  /** Delete yourself. */
  deleteSelf: DeleteOneOutput;
  deleteTag: Scalars['Boolean']['output'];
  deleteTicketType: DeleteOneOutput;
  deleteTrackingCode: Scalars['Boolean']['output'];
  /** Deletes a user. */
  deleteUser: DeleteOneOutput;
  deleteUsherTicketType: Scalars['Boolean']['output'];
  deleteVenue: DeleteOneOutput;
  disableAccessCodesForMembership: Scalars['Boolean']['output'];
  disableUsherTicketType: Scalars['Boolean']['output'];
  duplicateEvent: Scalars['String']['output'];
  duplicateMembership: Scalars['String']['output'];
  duplicateSingleRelease: Release;
  emailCustomizationEnable: EmailCustomizationOutput;
  emailCustomizationGetOrCreate: EmailCustomizationOutput;
  emailCustomizationSendTest: Scalars['Boolean']['output'];
  emailCustomizationUpdate: EmailCustomizationOutput;
  enableAccessCodesForMembership: Scalars['Boolean']['output'];
  enablePresale: Scalars['Boolean']['output'];
  enableSafeMode: Scalars['Boolean']['output'];
  enableTwoFactorAuthentication: Scalars['Boolean']['output'];
  enableXeroIntegration: Scalars['Boolean']['output'];
  exhibitorLogin: ExpoExhibitor;
  exhibitorLogout: Scalars['Boolean']['output'];
  expireOrder: Order;
  expoCreateOrUpdateNamingField: ExpoNamingField;
  expoDeleteNamingField: Scalars['Boolean']['output'];
  finishPosTransaction: Order;
  generateXeroInvoiceForOrder: Scalars['String']['output'];
  getMagicLink: Scalars['String']['output'];
  grantCompetitionReward?: Maybe<CompetitionReward>;
  handleInstagramCode: Scalars['String']['output'];
  hideResaleTicketTypeFromPublic: Scalars['Boolean']['output'];
  holdBestAvailableSeats: HoldBestAvailableSeatsOutput;
  holdCustomerOrder: Order;
  /** Sends invitations to existing users based on CSV file. */
  importAndInviteUsers: ImportOutput;
  importDigitalPassCodesForEvent: Scalars['Boolean']['output'];
  importDigitalPassCodesForMembership: Scalars['Boolean']['output'];
  importExhibitors: ImportExhibitorOutput;
  importReleasePasswords: Scalars['Boolean']['output'];
  importUsers: Scalars['Boolean']['output'];
  initiateLinkedAccountRegistration: Scalars['Boolean']['output'];
  invalidateExhibitorCredentials: ExpoExhibitor;
  joinResaleWaitlist: ResaleWaitlistOutput;
  joinWaitlist: Waitlist;
  linkedAccountLogin: LinkedAccountUser;
  linkedAccountRegister: LinkedAccountUser;
  listTicketForResale: Scalars['Boolean']['output'];
  login: User;
  logout: Scalars['Boolean']['output'];
  nameExhibitorSession: ExpoExhibitorSessionProfileOutput;
  onTrackingCodeVisit: Scalars['Boolean']['output'];
  pauseReportSchedule: ReportSchedule;
  posAutoscan: Scalars['Boolean']['output'];
  posTerminalCancel: Scalars['Boolean']['output'];
  posTerminalConnect: Scalars['Boolean']['output'];
  posTerminalDisconnect: Scalars['Boolean']['output'];
  posTerminalIdentify: Scalars['Boolean']['output'];
  redeemTicket: ScanTicketOutput;
  register: Scalars['Boolean']['output'];
  releaseAllMembershipHolds?: Maybe<Scalars['Boolean']['output']>;
  releaseClaimsForNextMembership: Array<Ticket>;
  releaseSeats: Order;
  removePosTransaction: Order;
  removePromoCodeFromOrder: Order;
  removeTwoFactorAuthenticationSecret: Scalars['Boolean']['output'];
  reorderTicketTypes: ReleaseZone;
  reorderZones: Array<Zone>;
  requestDeleteAccount: Scalars['Boolean']['output'];
  requestMagicLink: Scalars['Boolean']['output'];
  requestResetPassword: Scalars['Boolean']['output'];
  requestTicketTransfer: Scalars['Boolean']['output'];
  resendExhibitorLoginEmail: ResendExhibitorLoginEmailOutputUnion;
  resendUsherTicket: Scalars['Boolean']['output'];
  resetPassword: Scalars['Boolean']['output'];
  resubscribe: User;
  resubscribeV2: Scalars['Boolean']['output'];
  rollIntegrationApiKey: Integration;
  scanTicket: ScanTicketOutput;
  scanTicketBulk: Array<ScanTicketOutput>;
  scanVaccinePass: Scalars['Boolean']['output'];
  sendBroadcast: Scalars['Boolean']['output'];
  sendDownloadAttendeesEmail: Scalars['Boolean']['output'];
  sendInternalOrderReceipt: SendOrderConfirmationOutput;
  sendMemberRenewalEmail: Scalars['Boolean']['output'];
  sendOrderConfirmation: SendOrderConfirmationOutput;
  sendScannerEmail: ScannerEmailOutput;
  sendTicket: Scalars['Boolean']['output'];
  sendTwoFactorCodeViaSMSMessage: Scalars['Boolean']['output'];
  /** Sends an invite to an existing user. */
  sendUserInvite: User;
  setPasswordForNewUser: Scalars['Boolean']['output'];
  setPosReleasePaymentOptions: ReleasePosPaymentOptions;
  setPromoterSettings: PromoterSettingsOutput;
  setXeroConfiguration: XeroConfigurationOutput;
  signupFormCreate: SignupForm;
  signupFormDelete: Scalars['Boolean']['output'];
  signupFormUpdate: SignupForm;
  socialAuth: User;
  splitGroupOrder: Order;
  splitHoldOrder: Order;
  tagEntities: Array<Scalars['String']['output']>;
  testUrl?: Maybe<Scalars['String']['output']>;
  toggleCanRename: Scalars['Boolean']['output'];
  toggleMultiScanning: Scalars['Boolean']['output'];
  toggleNamingFields: Scalars['Boolean']['output'];
  unhideResaleTicketTypeFromPublic: Scalars['Boolean']['output'];
  unlistTicketForResale: Scalars['Boolean']['output'];
  unpublishCompetition: Competition;
  unsubscribe: MarketingPreferenceUnsubscribeOutput;
  unsubscribeFromMarketing: User;
  updateAccessCode: AccessCodeOutput;
  updateAndPublishCompetition: Competition;
  updateAutomation: Automation;
  updateCompetition: Competition;
  updateCreditsForUser: User;
  updateEvent: Event;
  updateEventAddon: EventAddon;
  updateEventMultiBuyPromotion: EventMultiBuyPromotion;
  updateEventPromoCode: EventPromoCode;
  updateExhibitor: ExpoExhibitor;
  updateForecast: EventForecastOutput;
  updateHoldOrder: Order;
  updateIntegration: Integration;
  updateMembership: Membership;
  updateMembershipAccessCode: AccessCode;
  updateMembershipAddon: MembershipAddon;
  updateMembershipMultiBuyPromotion: MembershipMultiBuyPromotion;
  updateMembershipPromoCode: MembershipPromoCode;
  updateMembershipType: MembershipType;
  updateOrder: Order;
  updateOrderStatus: Order;
  updateOrganization: Organization;
  updateOrganizationById: Organization;
  updatePassword: Scalars['Boolean']['output'];
  updatePoint: Point;
  updatePointItem: PointItem;
  updatePosUser: User;
  /** Updates the current user. */
  updateProfile: User;
  updatePurchaseRestriction: PurchaseRestriction;
  updateReferralCampaign: ReferralCampaign;
  updateRelease: Release;
  updateReleaseZone: ReleaseZone;
  updateReportSchedule: ReportSchedule;
  updateResaleTicketType: TicketType;
  updateSMSBroadcast: SmsBroadcastSaveOutput;
  updateScout: Scout;
  updateScoutCommunication: ScoutCommunication;
  updateScoutCommunicationUser: ScoutCommunicationUser;
  updateScoutUsers: Scalars['Boolean']['output'];
  updateSeason: Season;
  updateTag: Tag;
  updateTicketCoverForOrder: Order;
  updateTicketHolder: Ticket;
  updateTicketResaleConfig: Event;
  updateTicketType: TicketType;
  /** Updates a user. */
  updateUser: User;
  updateUsherTicketTypeName: TicketType;
  updateVenue: Venue;
  updateVenueCapacity: Scalars['Boolean']['output'];
  /** Update zones based on seatsChartKey. */
  updateVenueZones: Venue;
  uploadImage: Scalars['JSON']['output'];
  upsertAdobeIntegration: AdobeExperiencePlatformIntegration;
  upsertMembershipTypeEventTransferPrices: Array<MembershipTypeEventTransferPrice>;
  validateReleasePassword: ReleasePassword;
  validateReleasePasswordOrRelease: Release;
  verifyMagicLink: VerifyMagicLinkOutput;
  verifyPinPayment3DS: PinPaymentChargeResponse;
  verifyToken: VerifyMagicLinkOutput;
};


export type MutationAddAccessCodesToMembershipArgs = {
  id: Scalars['String']['input'];
  input: Array<AddAccessCodesToMembershipInput>;
};


export type MutationAddAuditLogArgs = {
  input: AddAuditLogInput;
};


export type MutationAddExhibitorArgs = {
  input: AddExhibitorInput;
};


export type MutationAddForecastScenarioArgs = {
  id: Scalars['String']['input'];
};


export type MutationAddGatesToScannableGatesIdArgs = {
  eventId: Scalars['String']['input'];
  input: AddGatesToEventAddonInput;
};


export type MutationAddGatesToZoneAndEventArgs = {
  eventId: Scalars['String']['input'];
  input: AddGatesToZoneInput;
};


export type MutationAddPosTransactionArgs = {
  id: Scalars['String']['input'];
  input: AddPosTransactionInput;
};


export type MutationAddReminderToScoutCommunicationUserArgs = {
  id: Scalars['String']['input'];
  input: AddReminderToScoutCommunicationUserInput;
};


export type MutationAddUnsubscribeReasonArgs = {
  input: AddUnsubscribeReasonInput;
};


export type MutationAddUnsubscribeReasonV2Args = {
  input: AddUnsubscribeReasonV2Input;
};


export type MutationApplyPromoCodeToOrderArgs = {
  id: Scalars['String']['input'];
  input: ApplyPromoCode;
};


export type MutationAssignScoutCommunicationUsersToAgentArgs = {
  input: AssignScoutCommunicationUsersToAgentInput;
};


export type MutationAuthenticateWithTwoFactorArgs = {
  input: TwoFactorAuthenticationCodeInput;
};


export type MutationBroadcastReportingLinkOpenedArgs = {
  input: BroadcastReportingInputBase;
};


export type MutationBroadcastReportingOrderCreatedArgs = {
  input: BroadcastReportingOrderInput;
};


export type MutationBroadcastReportingSetAsSpamFromUserArgs = {
  input: BroadcastReportingInputBase;
};


export type MutationBulkCreateOrUpdateAttendeeArgs = {
  input: BulkExpoAttendeeInput;
};


export type MutationCancelOrderArgs = {
  id: Scalars['String']['input'];
};


export type MutationCancelPendingTicketTransferArgs = {
  ticketId: Scalars['String']['input'];
};


export type MutationClearReminderFromScoutCommunicationUserArgs = {
  id: Scalars['String']['input'];
};


export type MutationCompletePreprintTicketOrderArgs = {
  id: Scalars['String']['input'];
  input: LineItemsToCompleteInput;
};


export type MutationCompleteShopifySetupArgs = {
  input: ShopifySetupInput;
};


export type MutationCompleteStripeOAuthSetupArgs = {
  code: Scalars['String']['input'];
  state: Scalars['String']['input'];
};


export type MutationCompleteStripeSetupArgs = {
  id: Scalars['String']['input'];
};


export type MutationCopyEmailArgs = {
  input: CopyEmailInput;
};


export type MutationCreateAutomationArgs = {
  input: CreateAutomationInput;
};


export type MutationCreateBulkOrdersArgs = {
  createdById: Scalars['String']['input'];
  input: ImportInput;
};


export type MutationCreateCompetitionArgs = {
  eventId: Scalars['String']['input'];
  input: CreateCompetitionInput;
};


export type MutationCreateEventArgs = {
  input: CreateEventInput;
};


export type MutationCreateEventAddonArgs = {
  input: CreateEventAddonInput;
};


export type MutationCreateEventMultiBuyPromotionArgs = {
  input: CreateEventMultiBuyPromotionInput;
};


export type MutationCreateEventPromoCodeArgs = {
  input: CreateEventPromoCodeInput;
};


export type MutationCreateHistoryArgs = {
  input: CreateHistoryInput;
};


export type MutationCreateIntegrationArgs = {
  input: CreateIntegrationInput;
};


export type MutationCreateMembershipArgs = {
  input: CreateMembershipInput;
};


export type MutationCreateMembershipAddonArgs = {
  input: CreateMembershipAddonInput;
};


export type MutationCreateMembershipMultiBuyPromotionArgs = {
  input: CreateMembershipMultiBuyPromotionInput;
};


export type MutationCreateMembershipPromoCodeArgs = {
  input: CreateMembershipPromoCodeInput;
};


export type MutationCreateMembershipTypeArgs = {
  input: CreateMembershipTypeInput;
};


export type MutationCreateOrUpdateAccessCodeReleaseArgs = {
  input: AccessCodeReleaseInput;
};


export type MutationCreateOrUpdateAttendeeArgs = {
  input: ExpoAttendeeInput;
};


export type MutationCreateOrUpdateMembershipAutoRenewalArgs = {
  input: MembershipAutoRenewalInput;
};


export type MutationCreateOrUpdateNamingFieldArgs = {
  input: NamingFieldInput;
};


export type MutationCreateOrUpdatePosReleaseArgs = {
  input: PosReleaseInput;
};


export type MutationCreateOrUpdatePresaleArgs = {
  input: PresaleReleaseInput;
};


export type MutationCreateOrUpdateShopifySettingsArgs = {
  input: ShopifySettingsInput;
};


export type MutationCreateOrderArgs = {
  input: CreateOrderInput;
};


export type MutationCreateOrderToTrackingCodeAssociationArgs = {
  input: TrackingCodeOrderInput;
};


export type MutationCreateOrganizationArgs = {
  input: CreateOrganizationInput;
};


export type MutationCreatePaymentArgs = {
  id: Scalars['String']['input'];
  input: CreatePaymentInput;
};


export type MutationCreatePinPaymentChargeArgs = {
  input: CreatePinPaymentCharge;
};


export type MutationCreatePointArgs = {
  input: CreatePointInput;
};


export type MutationCreatePointItemArgs = {
  input: CreatePointItemInput;
};


export type MutationCreatePosArgs = {
  input: CreatePosInput;
};


export type MutationCreatePosUserArgs = {
  input: CreatePosUserInput;
};


export type MutationCreatePurchaseRestrictionArgs = {
  input: CreatePurchaseRestrictionInput;
};


export type MutationCreateRedirectUrlArgs = {
  input: CreateRedirectUrlInput;
};


export type MutationCreateReferralCampaignArgs = {
  campaign: CreateReferralCampaignDto;
};


export type MutationCreateReferralRewardsArgs = {
  rewards: CreateReferralRewardsDto;
};


export type MutationCreateRefundArgs = {
  input: CreateRefundInput;
};


export type MutationCreateReleaseArgs = {
  input: CreateReleaseInput;
};


export type MutationCreateReleaseZoneArgs = {
  input: CreateReleaseZoneInput;
};


export type MutationCreateReportScheduleArgs = {
  input: ReportScheduleInput;
};


export type MutationCreateResaleTicketTypeArgs = {
  input: CreateResaleTicketTypeInput;
};


export type MutationCreateSmsBroadcastArgs = {
  input: CreateSmsBroadcastInput;
};


export type MutationCreateScoutArgs = {
  input: CreateScoutInput;
};


export type MutationCreateScoutCommunicationArgs = {
  input: CreateScoutCommunicationInput;
};


export type MutationCreateSeasonArgs = {
  input: CreateSeasonInput;
};


export type MutationCreateShortUrlArgs = {
  url: Scalars['String']['input'];
};


export type MutationCreateTagArgs = {
  input: CreateTagInput;
};


export type MutationCreateTemporaryPosUserArgs = {
  input: CreateTemporaryPosUserInput;
};


export type MutationCreateTestEmailArgs = {
  input: CreateTestEmailInput;
};


export type MutationCreateTicketTypeArgs = {
  input: CreateTicketTypeInput;
};


export type MutationCreateTrackingCodeArgs = {
  input: TrackingCodeCreateInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
  sendInvite: Scalars['Boolean']['input'];
};


export type MutationCreateUsherTicketTypeArgs = {
  createTicketAndOrderInput: UsherComplimetaryCreateInput;
};


export type MutationCreateVenueArgs = {
  input: CreateVenueInput;
};


export type MutationDeleteAccessCodeArgs = {
  accessCode?: InputMaybe<Scalars['String']['input']>;
  releaseId: Scalars['String']['input'];
};


export type MutationDeleteAccessCodesFromMembershipArgs = {
  id: Scalars['String']['input'];
  input: BulkActionAccessCodesFromMembershipInput;
};


export type MutationDeleteAttendeeArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteBroadcastArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteCompetitionArgs = {
  competitionId: Scalars['String']['input'];
};


export type MutationDeleteEventAddonArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteEventMultiBuyPromotionArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteEventPromoCodeArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteExhibitorArgs = {
  input: FindExhibitorInput;
};


export type MutationDeleteForecastScenarioArgs = {
  forecastId: Scalars['String']['input'];
  id: Scalars['String']['input'];
};


export type MutationDeleteIntegrationArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteMembershipAddonArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteMembershipAutoRenewalOrdersArgs = {
  membershipId: Scalars['String']['input'];
};


export type MutationDeleteMembershipMultiBuyPromotionArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteMembershipPromoCodeArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteMembershipTypeArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteNamingFieldArgs = {
  fieldId: Scalars['String']['input'];
};


export type MutationDeletePresaleArgs = {
  releaseId: Scalars['String']['input'];
};


export type MutationDeletePurchaseRestrictionArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteReleaseArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteReleaseZoneArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteReportScheduleArgs = {
  reportScheduleId: Scalars['String']['input'];
};


export type MutationDeleteResaleTicketTypeArgs = {
  resaleTicketTypeId: Scalars['String']['input'];
};


export type MutationDeleteSmsBroadcastArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteScoutUsersArgs = {
  input: DeleteScoutUserInput;
};


export type MutationDeleteTagArgs = {
  entityId: Scalars['String']['input'];
  tagId: Scalars['String']['input'];
};


export type MutationDeleteTicketTypeArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteTrackingCodeArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteUsherTicketTypeArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteVenueArgs = {
  id: Scalars['String']['input'];
};


export type MutationDisableAccessCodesForMembershipArgs = {
  id: Scalars['String']['input'];
  input: BulkActionAccessCodesFromMembershipInput;
};


export type MutationDisableUsherTicketTypeArgs = {
  id: Scalars['String']['input'];
};


export type MutationDuplicateEventArgs = {
  id: Scalars['String']['input'];
};


export type MutationDuplicateMembershipArgs = {
  id: Scalars['String']['input'];
};


export type MutationDuplicateSingleReleaseArgs = {
  input: DuplicateSingleReleaseInput;
};


export type MutationEmailCustomizationEnableArgs = {
  id: Scalars['String']['input'];
};


export type MutationEmailCustomizationGetOrCreateArgs = {
  input: CreateEmailCustomizationInput;
};


export type MutationEmailCustomizationSendTestArgs = {
  input: SendTestEmailInput;
};


export type MutationEmailCustomizationUpdateArgs = {
  id: Scalars['String']['input'];
  input: UpdateEmailCustomizationInput;
};


export type MutationEnableAccessCodesForMembershipArgs = {
  id: Scalars['String']['input'];
  input: BulkActionAccessCodesFromMembershipInput;
};


export type MutationEnablePresaleArgs = {
  isEnabled: Scalars['Boolean']['input'];
  releaseId: Scalars['String']['input'];
};


export type MutationEnableTwoFactorAuthenticationArgs = {
  input: TwoFactorAuthenticationCodeInput;
};


export type MutationEnableXeroIntegrationArgs = {
  input: XeroCallbackInput;
};


export type MutationExhibitorLoginArgs = {
  input: ExpoExhibitorLoginInput;
};


export type MutationExpireOrderArgs = {
  id: Scalars['String']['input'];
};


export type MutationExpoCreateOrUpdateNamingFieldArgs = {
  input: ExpoNamingFieldInput;
};


export type MutationExpoDeleteNamingFieldArgs = {
  id: Scalars['String']['input'];
};


export type MutationFinishPosTransactionArgs = {
  autoScan?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type MutationGenerateXeroInvoiceForOrderArgs = {
  orderId: Scalars['String']['input'];
};


export type MutationGetMagicLinkArgs = {
  input: RequestMagicLinkInput;
};


export type MutationGrantCompetitionRewardArgs = {
  input: GrantCompetitionRewardInput;
};


export type MutationHandleInstagramCodeArgs = {
  input: HandleInstagramCodeInput;
};


export type MutationHideResaleTicketTypeFromPublicArgs = {
  resaleTicketTypeId: Scalars['String']['input'];
};


export type MutationHoldBestAvailableSeatsArgs = {
  id: Scalars['String']['input'];
  input: HoldBestAvailableSeatsInput;
};


export type MutationHoldCustomerOrderArgs = {
  id: Scalars['String']['input'];
};


export type MutationImportAndInviteUsersArgs = {
  input: ImportInput;
};


export type MutationImportDigitalPassCodesForEventArgs = {
  eventId: Scalars['String']['input'];
  input: ImportInput;
};


export type MutationImportDigitalPassCodesForMembershipArgs = {
  input: ImportInput;
  membershipId: Scalars['String']['input'];
};


export type MutationImportExhibitorsArgs = {
  input: ImportExhibitorInput;
};


export type MutationImportReleasePasswordsArgs = {
  id: Scalars['String']['input'];
  input: ImportInput;
};


export type MutationImportUsersArgs = {
  input: ImportInput;
};


export type MutationInitiateLinkedAccountRegistrationArgs = {
  input: LoginInput;
};


export type MutationInvalidateExhibitorCredentialsArgs = {
  input: FindExhibitorInput;
};


export type MutationJoinResaleWaitlistArgs = {
  input: ResaleWaitlistInput;
};


export type MutationJoinWaitlistArgs = {
  input: JoinWaitlistInput;
};


export type MutationLinkedAccountLoginArgs = {
  input: LoginInput;
};


export type MutationLinkedAccountRegisterArgs = {
  input: LinkedAccountRegisterInput;
};


export type MutationListTicketForResaleArgs = {
  ticketId: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationNameExhibitorSessionArgs = {
  name: Scalars['String']['input'];
};


export type MutationOnTrackingCodeVisitArgs = {
  input: TrackingCodeVisitInput;
};


export type MutationPauseReportScheduleArgs = {
  pause: Scalars['Boolean']['input'];
  reportScheduleId: Scalars['String']['input'];
};


export type MutationPosAutoscanArgs = {
  orderId: Scalars['String']['input'];
};


export type MutationPosTerminalCancelArgs = {
  posId: Scalars['String']['input'];
};


export type MutationPosTerminalConnectArgs = {
  posId: Scalars['String']['input'];
  registrationCode: Scalars['String']['input'];
};


export type MutationPosTerminalDisconnectArgs = {
  posId: Scalars['String']['input'];
};


export type MutationPosTerminalIdentifyArgs = {
  posId: Scalars['String']['input'];
};


export type MutationRedeemTicketArgs = {
  input: RedeemTicketInput;
};


export type MutationRegisterArgs = {
  input: RegisterInput;
};


export type MutationReleaseAllMembershipHoldsArgs = {
  id: Scalars['String']['input'];
};


export type MutationReleaseClaimsForNextMembershipArgs = {
  ids: Scalars['String']['input'];
};


export type MutationReleaseSeatsArgs = {
  input: ReleaseSeatsInput;
};


export type MutationRemovePosTransactionArgs = {
  id: Scalars['String']['input'];
  posTransactionId: Scalars['String']['input'];
};


export type MutationRemovePromoCodeFromOrderArgs = {
  id: Scalars['String']['input'];
};


export type MutationReorderTicketTypesArgs = {
  input: ReorderTicketTypeInput;
};


export type MutationReorderZonesArgs = {
  input: ReorderZoneInput;
};


export type MutationRequestDeleteAccountArgs = {
  input: RequestMagicLinkInput;
};


export type MutationRequestMagicLinkArgs = {
  input: RequestMagicLinkInput;
};


export type MutationRequestResetPasswordArgs = {
  input: RequestResetPasswordInput;
};


export type MutationRequestTicketTransferArgs = {
  input: RequestTicketTransferInput;
};


export type MutationResendExhibitorLoginEmailArgs = {
  email: Scalars['String']['input'];
  eventId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationResendUsherTicketArgs = {
  input: EmailUsherComplimentaryInput;
};


export type MutationResetPasswordArgs = {
  input: ResetPasswordInput;
};


export type MutationResubscribeArgs = {
  userId: Scalars['String']['input'];
};


export type MutationResubscribeV2Args = {
  sendId: Scalars['String']['input'];
};


export type MutationRollIntegrationApiKeyArgs = {
  id: Scalars['String']['input'];
};


export type MutationScanTicketArgs = {
  eventId: Scalars['String']['input'];
  input: ScanTicketInput;
};


export type MutationScanTicketBulkArgs = {
  input: ScanTicketBulkInput;
};


export type MutationScanVaccinePassArgs = {
  payload: Scalars['String']['input'];
  ticketId: Scalars['String']['input'];
};


export type MutationSendBroadcastArgs = {
  input: SendBroadcastInput;
};


export type MutationSendDownloadAttendeesEmailArgs = {
  email: Scalars['String']['input'];
};


export type MutationSendInternalOrderReceiptArgs = {
  id: Scalars['String']['input'];
};


export type MutationSendMemberRenewalEmailArgs = {
  id: Scalars['String']['input'];
};


export type MutationSendOrderConfirmationArgs = {
  id: Scalars['String']['input'];
  input: SendOrderConfirmationInput;
};


export type MutationSendScannerEmailArgs = {
  userId: Scalars['String']['input'];
};


export type MutationSendTicketArgs = {
  email: Scalars['String']['input'];
  ticketIds: Array<Scalars['String']['input']>;
};


export type MutationSendUserInviteArgs = {
  id: Scalars['String']['input'];
};


export type MutationSetPasswordForNewUserArgs = {
  input: SetPasswordForNewUserInput;
};


export type MutationSetPosReleasePaymentOptionsArgs = {
  input: SetPosPaymentOptionsInput;
  releaseId: Scalars['String']['input'];
};


export type MutationSetPromoterSettingsArgs = {
  input: PromoterSettingsInput;
};


export type MutationSetXeroConfigurationArgs = {
  input: XeroConfigurationInput;
};


export type MutationSignupFormCreateArgs = {
  input: CreateSignupFormInput;
};


export type MutationSignupFormDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationSignupFormUpdateArgs = {
  id: Scalars['String']['input'];
  input: CreateSignupFormInput;
};


export type MutationSocialAuthArgs = {
  input: SocialAuthInput;
};


export type MutationSplitGroupOrderArgs = {
  id: Scalars['String']['input'];
  input: SplitOrderInput;
};


export type MutationSplitHoldOrderArgs = {
  id: Scalars['String']['input'];
  input: SplitOrderInput;
};


export type MutationTagEntitiesArgs = {
  input: TagEntitiesInput;
};


export type MutationTestUrlArgs = {
  url: Scalars['String']['input'];
};


export type MutationToggleCanRenameArgs = {
  eventId: Scalars['String']['input'];
  isEnabled: Scalars['Boolean']['input'];
};


export type MutationToggleMultiScanningArgs = {
  eventId: Scalars['String']['input'];
  multiScanningEnabled: Scalars['Boolean']['input'];
};


export type MutationToggleNamingFieldsArgs = {
  eventId: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
};


export type MutationUnhideResaleTicketTypeFromPublicArgs = {
  resaleTicketTypeId: Scalars['String']['input'];
};


export type MutationUnlistTicketForResaleArgs = {
  ticketId: Scalars['String']['input'];
};


export type MutationUnpublishCompetitionArgs = {
  competitionId: Scalars['String']['input'];
};


export type MutationUnsubscribeArgs = {
  sendId: Scalars['String']['input'];
};


export type MutationUnsubscribeFromMarketingArgs = {
  userId: Scalars['String']['input'];
};


export type MutationUpdateAccessCodeArgs = {
  input: AccessCodeInput;
  releaseId: Scalars['String']['input'];
};


export type MutationUpdateAndPublishCompetitionArgs = {
  eventId: Scalars['String']['input'];
  input: PublishCompetitionInput;
};


export type MutationUpdateAutomationArgs = {
  id: Scalars['String']['input'];
  input: UpdateAutomationInput;
};


export type MutationUpdateCompetitionArgs = {
  competitionId: Scalars['String']['input'];
  input: CreateCompetitionInput;
};


export type MutationUpdateCreditsForUserArgs = {
  input: UpdateCreditsInput;
  userId: Scalars['String']['input'];
};


export type MutationUpdateEventArgs = {
  id: Scalars['String']['input'];
  input: UpdateEventInput;
  sendTicketViewableEmails?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateEventAddonArgs = {
  id: Scalars['String']['input'];
  input: UpdateEventAddonInput;
};


export type MutationUpdateEventMultiBuyPromotionArgs = {
  id: Scalars['String']['input'];
  input: UpdateEventMultiBuyPromotionInput;
};


export type MutationUpdateEventPromoCodeArgs = {
  id: Scalars['String']['input'];
  input: UpdateEventPromoCodeInput;
};


export type MutationUpdateExhibitorArgs = {
  input: UpdateExhibitorInput;
};


export type MutationUpdateForecastArgs = {
  id: Scalars['String']['input'];
  input: UpdateForecastInput;
};


export type MutationUpdateHoldOrderArgs = {
  id: Scalars['String']['input'];
  input: UpdateHoldOrderInput;
};


export type MutationUpdateIntegrationArgs = {
  id: Scalars['String']['input'];
  input: UpdateIntegrationInput;
};


export type MutationUpdateMembershipArgs = {
  id: Scalars['String']['input'];
  input: UpdateMembershipInput;
};


export type MutationUpdateMembershipAccessCodeArgs = {
  id: Scalars['String']['input'];
  input: UpsertAccessCodeInput;
  membershipId: Scalars['String']['input'];
};


export type MutationUpdateMembershipAddonArgs = {
  id: Scalars['String']['input'];
  input: UpdateMembershipAddonInput;
};


export type MutationUpdateMembershipMultiBuyPromotionArgs = {
  id: Scalars['String']['input'];
  input: UpdateMembershipMultiBuyPromotionInput;
};


export type MutationUpdateMembershipPromoCodeArgs = {
  id: Scalars['String']['input'];
  input: UpdateMembershipPromoCodeInput;
};


export type MutationUpdateMembershipTypeArgs = {
  id: Scalars['String']['input'];
  input: UpdateMembershipTypeInput;
};


export type MutationUpdateOrderArgs = {
  id: Scalars['String']['input'];
  input: UpdateOrderInput;
};


export type MutationUpdateOrderStatusArgs = {
  id: Scalars['String']['input'];
  input: UpdateOrderStatusInput;
};


export type MutationUpdateOrganizationArgs = {
  input: UpdateOrganizationInput;
};


export type MutationUpdateOrganizationByIdArgs = {
  id: Scalars['String']['input'];
  input: UpdateOrganizationInput;
};


export type MutationUpdatePasswordArgs = {
  input: UpdatePasswordInput;
};


export type MutationUpdatePointArgs = {
  input: UpdatePointInput;
};


export type MutationUpdatePointItemArgs = {
  id: Scalars['String']['input'];
  input: UpdatePointItemInput;
};


export type MutationUpdatePosUserArgs = {
  id: Scalars['String']['input'];
  input: UpdatePosUserInput;
};


export type MutationUpdateProfileArgs = {
  input: UpdateProfileInput;
};


export type MutationUpdatePurchaseRestrictionArgs = {
  id: Scalars['String']['input'];
  input: CreatePurchaseRestrictionInput;
};


export type MutationUpdateReferralCampaignArgs = {
  campaign: UpdateReferralCampaignDto;
};


export type MutationUpdateReleaseArgs = {
  id: Scalars['String']['input'];
  input: UpdateReleaseInput;
};


export type MutationUpdateReleaseZoneArgs = {
  id: Scalars['String']['input'];
  input: UpdateReleaseZoneInput;
};


export type MutationUpdateReportScheduleArgs = {
  input: ReportScheduleInput;
  reportScheduleId: Scalars['String']['input'];
};


export type MutationUpdateResaleTicketTypeArgs = {
  input: CreateResaleTicketTypeInput;
  resaleTicketTypeId: Scalars['String']['input'];
};


export type MutationUpdateSmsBroadcastArgs = {
  input: UpdateSmsBroadcastInput;
};


export type MutationUpdateScoutArgs = {
  id: Scalars['String']['input'];
  input: UpdateScoutInput;
};


export type MutationUpdateScoutCommunicationArgs = {
  id: Scalars['String']['input'];
  input: UpdateScoutCommunicationInput;
};


export type MutationUpdateScoutCommunicationUserArgs = {
  id: Scalars['String']['input'];
  input: UpdateScoutCommunicationUserInput;
};


export type MutationUpdateScoutUsersArgs = {
  id: Scalars['String']['input'];
};


export type MutationUpdateSeasonArgs = {
  id: Scalars['String']['input'];
  input: UpdateSeasonInput;
};


export type MutationUpdateTagArgs = {
  id: Scalars['String']['input'];
  input: UpdateTagInput;
};


export type MutationUpdateTicketCoverForOrderArgs = {
  id: Scalars['String']['input'];
  input: UpdateOrderTicketCoverInput;
};


export type MutationUpdateTicketHolderArgs = {
  id: Scalars['String']['input'];
  input: UpdateTicketHolderInput;
};


export type MutationUpdateTicketResaleConfigArgs = {
  input: UpdateResaleConfigInput;
};


export type MutationUpdateTicketTypeArgs = {
  id: Scalars['String']['input'];
  input: UpdateTicketTypeInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['String']['input'];
  input: UpdateUserInput;
};


export type MutationUpdateUsherTicketTypeNameArgs = {
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type MutationUpdateVenueArgs = {
  id: Scalars['String']['input'];
  input: UpdateVenueInput;
};


export type MutationUpdateVenueCapacityArgs = {
  capacity?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['String']['input'];
};


export type MutationUpdateVenueZonesArgs = {
  id: Scalars['String']['input'];
};


export type MutationUploadImageArgs = {
  file: ImportInput;
};


export type MutationUpsertAdobeIntegrationArgs = {
  input: AdobeExperiencePlatformIntegrationInput;
};


export type MutationUpsertMembershipTypeEventTransferPricesArgs = {
  id: Scalars['String']['input'];
  input: Array<UpdateMembershipTypeEventTransferPriceInput>;
};


export type MutationValidateReleasePasswordArgs = {
  id: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationValidateReleasePasswordOrReleaseArgs = {
  eventId: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationVerifyMagicLinkArgs = {
  input: VerifyEmailInput;
};


export type MutationVerifyPinPayment3DsArgs = {
  input: VerifyPinPayment3Ds;
};


export type MutationVerifyTokenArgs = {
  input: VerifyEmailInput;
};

export type MyEventsOrderByInput = {
  startDate?: InputMaybe<OrderByDirection>;
};

export type MyEventsWhereInput = {
  /** Event end date. */
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter on tickets that are (not) related to a membership ticket. */
  hasParentTicket?: InputMaybe<Scalars['Boolean']['input']>;
  /** Event start date. */
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MyLoggedInOrganizationsOutput = {
  __typename?: 'MyLoggedInOrganizationsOutput';
  id: Scalars['String']['output'];
  isLinked: Scalars['Boolean']['output'];
  logoUrl?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
};

export type NamingFieldInput = {
  allTickets: Scalars['Boolean']['input'];
  eventId: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  label: Scalars['String']['input'];
  options?: InputMaybe<Array<Scalars['String']['input']>>;
  orderKey: Scalars['Float']['input'];
  required: Scalars['Boolean']['input'];
  specificTicketTypes: Array<AccessCodeTicketInput>;
  type: NamingFieldType;
};

export type NamingFieldOutput = {
  __typename?: 'NamingFieldOutput';
  allTickets: Scalars['Boolean']['output'];
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
  name: Scalars['String']['output'];
  options?: Maybe<Array<Scalars['String']['output']>>;
  orderKey: Scalars['Float']['output'];
  required: Scalars['Boolean']['output'];
  specificTicketTypes: Array<PublicReleaseTicketOutput>;
  type: NamingFieldType;
};

export enum NamingFieldType {
  BirthDate = 'BIRTH_DATE',
  CompanyName = 'COMPANY_NAME',
  CustomCheckbox = 'CUSTOM_CHECKBOX',
  CustomSelect = 'CUSTOM_SELECT',
  CustomText = 'CUSTOM_TEXT',
  Email = 'EMAIL',
  FirstName = 'FIRST_NAME',
  Gender = 'GENDER',
  LastName = 'LAST_NAME',
  PhoneNumber = 'PHONE_NUMBER',
  PostalCode = 'POSTAL_CODE',
  UsableForEmailMarketing = 'USABLE_FOR_EMAIL_MARKETING',
  UsableForSmsMarketing = 'USABLE_FOR_SMS_MARKETING'
}

export enum NotificationType {
  Email = 'Email',
  Sms = 'SMS'
}

export type NumberStatistic = {
  __typename?: 'NumberStatistic';
  label: Scalars['String']['output'];
  tooltip?: Maybe<StatisticTooltip>;
  value: Scalars['Float']['output'];
};

export type OnsalePromoter = {
  __typename?: 'OnsalePromoter';
  onsalePromoterCompetition: OnsalePromoterCompetition;
  onsalePromoterOutsideCompetition: OnsalePromoterOutsideCompetition;
};

export type OnsalePromoterCompetition = {
  __typename?: 'OnsalePromoterCompetition';
  onsalePromoterNewCustomersReferred: PeReportStatistic;
  onsalePromoterOrdersViaReferral: PeReportStatistic;
  onsalePromoterReferrerEntriesAwarded: PeReportStatistic;
  onsalePromoterRevenueViaReferral: PeReportStatistic;
};

export type OnsalePromoterOutsideCompetition = {
  __typename?: 'OnsalePromoterOutsideCompetition';
  onsalePromoterOutsideDiscountValue: PeReportStatistic;
  onsalePromoterOutsideNewCustomersReferred: PeReportStatistic;
  onsalePromoterOutsideOrdersViaReferral: PeReportStatistic;
  onsalePromoterOutsideReferrerPointsAwarded: PeReportStatistic;
  onsalePromoterOutsideRevenueViaReferral: PeReportStatistic;
};

export type Order = {
  __typename?: 'Order';
  /** The access code associated with the order. Returns null if the order is not bound to an access code. */
  accessCode?: Maybe<AccessCode>;
  amountDue: Scalars['Float']['output'];
  /** Billing address provided by the customer. */
  billingAddress?: Maybe<Address>;
  /** Booking fee (amount or percentage based on type). */
  bookingFee: Scalars['Float']['output'];
  /** Calculated booking fee. */
  bookingFeeAmount: Scalars['Float']['output'];
  bookingFeeType: FeeType;
  /** Buyer details. */
  buyerInformation?: Maybe<BuyerInformation>;
  /** Amount of credits detucted from the total for changing the seats */
  changingSeatsCredits?: Maybe<Scalars['Float']['output']>;
  /** Fee for changing seats. */
  changingSeatsFee?: Maybe<Scalars['Float']['output']>;
  /** Channel associated with the order. */
  channel: OrderChannel;
  /** The ip address of the client that is associated with this order. */
  clientIp: Scalars['String']['output'];
  compReason?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  /** Order is created by */
  createdBy?: Maybe<User>;
  currency: Scalars['String']['output'];
  customTaxAmount?: Maybe<Scalars['Float']['output']>;
  customTaxRate?: Maybe<Scalars['Float']['output']>;
  defaultGateway?: Maybe<Integration>;
  /** Delivery fee (based on delivery method). */
  deliveryFee?: Maybe<Scalars['Float']['output']>;
  /** The delivery method chosen by the customer. */
  deliveryMethod?: Maybe<ShippingOption>;
  /** How the customer heard about the items they are purchasing */
  dietaryRequirements?: Maybe<Scalars['String']['output']>;
  /** The event associated with the order. Returns null if the order is not bound to an event. */
  event?: Maybe<Event>;
  expiresInSeconds: Scalars['Float']['output'];
  /** Time after which the order will be automatically expired */
  expiryDate?: Maybe<Scalars['DateTime']['output']>;
  /** The payment provider which processed the last transaction. */
  gateway?: Maybe<PaymentIntegrationOutput>;
  /** Whether the hardcopy tickets have been printed for an order */
  hardCopyTicketsPrinted: Scalars['Boolean']['output'];
  /** How the customer heard about the items they are purchasing */
  heardAboutUs?: Maybe<HeardAboutUsType>;
  /** Heard about us details when heardAboutUs is other */
  heardAboutUsDetails?: Maybe<Scalars['String']['output']>;
  history: HistoryConnection;
  id: Scalars['ID']['output'];
  /** Indicates if the order is a full comp order (all tickets are comps). */
  isComp: Scalars['Boolean']['output'];
  /** If the order is created from order abandoned email. */
  isCreatedFromRecoveredCart: Scalars['Boolean']['output'];
  /** Indicates if the order has been handled on success (e.g. ticket creation). */
  isHandled: Scalars['Boolean']['output'];
  /** List of the order's line items. */
  lineItems: LineItemConnection;
  /** The membership associated with the order. Returns null if the order is not bound to a membership. */
  membership?: Maybe<Membership>;
  membershipSubscriptionId?: Maybe<Scalars['String']['output']>;
  multiBuyPromotion?: Maybe<MultiBuyPromotionUnion>;
  /** Timestamp when order confirmation has been sent. */
  orderConfirmationSentAt?: Maybe<Scalars['DateTime']['output']>;
  orderNumber: Scalars['String']['output'];
  orderPlan?: Maybe<OrderPlan>;
  orderTicketCover?: Maybe<OrderTicketCover>;
  orderType: OrderType;
  /** Indicated whether the order has been paid with a subscription. */
  paidWithSubscription: Scalars['Boolean']['output'];
  /** Last used payment gateway. */
  paymentGateway?: Maybe<PaymentProvider>;
  point?: Maybe<Point>;
  /** The pointItem associated with the order. Returns null if the order is not bound to a pointItem. */
  pointItem?: Maybe<PointItem>;
  pos?: Maybe<Pos>;
  posTransactions: PosTransactionConnection;
  promoCode?: Maybe<PromoCodeUnion>;
  /** Used to link an order to the referral code that was used to create the order. Currently only used for competitions but will eventually be used for all referrals. */
  referralCode?: Maybe<ReferralCode>;
  /** Amount of referral discount applied to the order. Used when there is a flat amount applied to the order */
  referralDiscountAmount?: Maybe<Scalars['Float']['output']>;
  /** Used to link an order to the referrer user that refered the order creator */
  referralId?: Maybe<Scalars['String']['output']>;
  /** Details about how the order can be refunded based on payment methods and how much has already been refunded */
  refundableState: RefundableState;
  /** Total amount of refunds. */
  refundedAmount: Scalars['Float']['output'];
  refunds: Array<Refund>;
  /** The release associated with the order. Returns null if the order is not bound to a release. */
  release?: Maybe<Release>;
  /** The release password associated with the order. Returns null if the order is not bound to a release password. */
  releasePassword?: Maybe<ReleasePassword>;
  /** Shipping address provided by the customer. */
  shippingAddress?: Maybe<Address>;
  /** Whether the shipping address matches the billing address. */
  shippingAddressMatchesBillingAddress: Scalars['Boolean']['output'];
  /** Current status of the order. */
  status: OrderStatus;
  /** The payment method used in the last transaction. E.g. credit card, Afterpay, etc. */
  stripePaymentMethod?: Maybe<StripePaymentMethod>;
  /** Subtotal: total - taxAmount */
  subtotal: Scalars['Float']['output'];
  tax?: Maybe<OrderTax>;
  /** Tax calculation method. either inclusive or exclusive. */
  taxCalculationMethod?: Maybe<TaxCalculationMethod>;
  taxRate?: Maybe<Scalars['Float']['output']>;
  /** The created tickets for the order. Only returns the membership tickets (including add-on tickets) for memberships. */
  tickets: Array<Ticket>;
  /** Order total (including fees and taxes). */
  total: Scalars['Float']['output'];
  /** Tax rate: taxRate * total */
  totalTax: Scalars['Float']['output'];
  /** Transaction fee. */
  transactionFee?: Maybe<Scalars['Float']['output']>;
  /** Transaction fee. */
  transactionFee2?: Maybe<Scalars['Float']['output']>;
  /** Calculated transaction fee. */
  transactionFeeAmount?: Maybe<Scalars['Float']['output']>;
  /** Transaction fee type. */
  transactionFeeType?: Maybe<FeeType>;
  /** Transaction fee type. */
  transactionFeeType2?: Maybe<FeeType>;
  /** The status of the latest transaction status. */
  transactionStatus?: Maybe<OrderTransactionStatus>;
  transactions: OrderTransactionConnection;
  /** Fee charged for ticket transfer. */
  transferFee?: Maybe<Scalars['Float']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  /** This is a snapshot value when an order is created, used to update usableForMarketing on user */
  usableForMarketing?: Maybe<Scalars['Boolean']['output']>;
  /** Amount of credits used in the order */
  usedCredits?: Maybe<Scalars['Float']['output']>;
  usedPoints: Scalars['Float']['output'];
  /** Order owner. Not all orders have users. */
  user?: Maybe<User>;
  /** Xero invoice ID if Xero integration is configured and an invoice was created for this order */
  xeroInvoiceId?: Maybe<Scalars['String']['output']>;
};


export type OrderHistoryArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<HistoryOrderByInput>;
};


export type OrderLineItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type OrderPosTransactionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PosTransactionOrderByInput>;
};


export type OrderTransactionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TransactionOrderByInput>;
};

export enum OrderByDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

/** Order status */
export enum OrderChannel {
  BackOffice = 'BackOffice',
  Online = 'Online',
  Pos = 'POS'
}

export type OrderChargeSetting = {
  __typename?: 'OrderChargeSetting';
  percentage?: Maybe<Scalars['Float']['output']>;
  pricingStrategy: PricingStrategy;
};

export type OrderConnection = {
  __typename?: 'OrderConnection';
  edges: Array<OrderEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type OrderCreateOutput = {
  __typename?: 'OrderCreateOutput';
  createOrderError?: Maybe<Array<CreateOrderErrorUnion>>;
  jobId: Scalars['String']['output'];
  order?: Maybe<Order>;
};

export type OrderEdge = {
  __typename?: 'OrderEdge';
  cursor: Scalars['String']['output'];
  node: Order;
};

export type OrderFee = {
  __typename?: 'OrderFee';
  fees: Array<Fee>;
  gateways: Array<OrderFeeIntegration>;
  items: Array<ItemFee>;
  organizationExclusiveTaxRate: Scalars['Float']['output'];
};

export type OrderFeeIntegration = {
  __typename?: 'OrderFeeIntegration';
  /** External secret key (should not be shared) */
  apiKey?: Maybe<Scalars['String']['output']>;
  bnplEnabled?: Maybe<Scalars['Boolean']['output']>;
  bnplTransactionFeePercent?: Maybe<Scalars['Float']['output']>;
  createdAt: Scalars['DateTime']['output'];
  facebookPageId?: Maybe<Scalars['String']['output']>;
  facebookUserId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isDefault: Scalars['Boolean']['output'];
  /** Integration name */
  name: Scalars['String']['output'];
  /** If payment gateways have different option types this field is used to specify which one to force */
  paymentMethodType?: Maybe<Scalars['String']['output']>;
  /** External public key (can be used in customer frontend) */
  publicKey?: Maybe<Scalars['String']['output']>;
  /** Internal API key (should not be shared) */
  secretKey?: Maybe<Scalars['String']['output']>;
  stripeConnectAccount?: Maybe<StripeConnectAccount>;
  /** Transaction fee. */
  transactionFee?: Maybe<Scalars['Float']['output']>;
  /** Transaction fee(only for stripe). Users can input both fixed and percentage fee for stripe(0.3$+2%). */
  transactionFee2?: Maybe<Scalars['Float']['output']>;
  /** Transaction fee type. */
  transactionFeeType?: Maybe<FeeType>;
  /** Transaction fee type(only for stripe). Users can input both fixed and percentage fee for stripe(0.3$+2%). */
  transactionFeeType2?: Maybe<FeeType>;
  /** Integration type */
  type: IntegrationType;
  updatedAt: Scalars['DateTime']['output'];
  /** External public key for Windcave PxPost. */
  wcPxPostPublicKey?: Maybe<Scalars['String']['output']>;
  /** External secret key for Windcave PxPost. */
  wcPxPostSecretKey?: Maybe<Scalars['String']['output']>;
  /** Webhook URL to point integration to */
  webhookUrl?: Maybe<Scalars['String']['output']>;
};

export type OrderIdsOnlineOutput = {
  __typename?: 'OrderIdsOnlineOutput';
  orderId: Scalars['String']['output'];
};

export type OrderOrderByInput = {
  createdAt?: InputMaybe<OrderByDirection>;
  updatedAt?: InputMaybe<OrderByDirection>;
};

export type OrderPlan = {
  __typename?: 'OrderPlan';
  billingDetails?: Maybe<BillingDetails>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  orderId: Scalars['String']['output'];
  payments: Array<OrderPlanPayment>;
  schedule: ScheduleOption;
  status: OrderPlanStatus;
  stripeSubscriptionId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type OrderPlanPayment = {
  __typename?: 'OrderPlanPayment';
  amountDue: Scalars['Float']['output'];
  attemptCount?: Maybe<Scalars['Float']['output']>;
  createdAt: Scalars['DateTime']['output'];
  dueAt: Scalars['DateTime']['output'];
  failureReason?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  paidAt?: Maybe<Scalars['DateTime']['output']>;
  refundedAt?: Maybe<Scalars['DateTime']['output']>;
  status: OrderPlanPaymentStatus;
  stripeInvoiceUrl?: Maybe<Scalars['String']['output']>;
  stripePaymentIntentId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export enum OrderPlanPaymentStatus {
  Cancelled = 'cancelled',
  Paid = 'paid',
  PartiallyRefunded = 'partiallyRefunded',
  Refunded = 'refunded',
  Upcoming = 'upcoming'
}

export enum OrderPlanStatus {
  Active = 'active',
  Cancelled = 'cancelled',
  Completed = 'completed',
  Overdue = 'overdue',
  Pending = 'pending',
  Refunded = 'refunded',
  Stopped = 'stopped'
}

export type OrderRefundDetailsOutput = {
  __typename?: 'OrderRefundDetailsOutput';
  addons: Scalars['Float']['output'];
  baseTickets: Scalars['Float']['output'];
  bookingFees: Scalars['Float']['output'];
  creditsUsed: Scalars['Float']['output'];
  deliveryFees: Scalars['Float']['output'];
  orderId: Scalars['String']['output'];
  refundedAmount: Scalars['Float']['output'];
  ticketFees: Scalars['Float']['output'];
  transactionFees: Scalars['Float']['output'];
};

/** The refund state for an order based on how it was paid for and previous refunds. */
export enum OrderRefundState {
  FullyRefunded = 'FULLY_REFUNDED',
  FullGateway = 'FULL_GATEWAY',
  ManualOnly = 'MANUAL_ONLY',
  None = 'NONE',
  PartialGateway = 'PARTIAL_GATEWAY'
}

/** Order status */
export enum OrderStatus {
  Canceled = 'Canceled',
  Completed = 'Completed',
  Expired = 'Expired',
  Hold = 'Hold',
  Paid = 'Paid',
  PartPaid = 'PartPaid',
  Pending = 'Pending'
}

export type OrderTax = {
  __typename?: 'OrderTax';
  tax: Array<TaxApplied>;
  totalExclusive: Scalars['Float']['output'];
  totalInclusive: Scalars['Float']['output'];
};

export type OrderTicketCover = {
  __typename?: 'OrderTicketCover';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  issuedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Order that the ticket cover is purchased for */
  order: Order;
  platformFeeAmount: Scalars['Float']['output'];
  promoterFeeAmount: Scalars['Float']['output'];
  /** Ticket cover purchase behaviour */
  purchaseBehaviour?: Maybe<TicketCoverPurchaseBehaviour>;
  purchasedAt?: Maybe<Scalars['DateTime']['output']>;
  retryCount: Scalars['Float']['output'];
  ticketTicketCovers?: Maybe<Array<TicketTicketCover>>;
  totalFeeAmount?: Maybe<Scalars['Float']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

/** A transaction represents an exchange of money as part of an order. */
export type OrderTransaction = {
  __typename?: 'OrderTransaction';
  amount: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  kind: OrderTransactionKind;
  /** The amount of the transaction that is held for Flicket at the point of sale as a platform commission. */
  platformAdjustment: Scalars['Float']['output'];
  status: OrderTransactionStatus;
  /** Payment method used with Stripe. Null if not a Stripe transaction. */
  stripePaymentMethod?: Maybe<StripePaymentMethod>;
  updatedAt: Scalars['DateTime']['output'];
};

export type OrderTransactionConnection = {
  __typename?: 'OrderTransactionConnection';
  edges: Array<OrderTransactionEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type OrderTransactionEdge = {
  __typename?: 'OrderTransactionEdge';
  cursor: Scalars['String']['output'];
  node: OrderTransaction;
};

/** The different kinds of order transactions. */
export enum OrderTransactionKind {
  Refund = 'Refund',
  Sale = 'Sale'
}

/** Payment statuses */
export enum OrderTransactionStatus {
  Cancelled = 'Cancelled',
  Error = 'Error',
  Failure = 'Failure',
  Pending = 'Pending',
  Success = 'Success',
  Unknown = 'Unknown',
  Waiting = 'Waiting'
}

/** Order type */
export enum OrderType {
  ChangeSeats = 'CHANGE_SEATS',
  Default = 'DEFAULT',
  MembershipTicketTransfer = 'MEMBERSHIP_TICKET_TRANSFER',
  PaymentPlan = 'PAYMENT_PLAN',
  PointPurchase = 'POINT_PURCHASE',
  RenameTickets = 'RENAME_TICKETS',
  RenewMemberships = 'RENEW_MEMBERSHIPS',
  ResaleTicketTransfer = 'RESALE_TICKET_TRANSFER',
  TicketTransfer = 'TICKET_TRANSFER',
  Usher = 'USHER'
}

export type OrderWhereInput = {
  channel?: InputMaybe<OrderChannel>;
  createdById?: InputMaybe<Scalars['String']['input']>;
  dates?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  gateway?: InputMaybe<PaymentProvider>;
  paymentPlans?: InputMaybe<Scalars['String']['input']>;
  /** Fuzzy search query. */
  q?: InputMaybe<Scalars['String']['input']>;
  release?: InputMaybe<Scalars['String']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  source?: InputMaybe<PointReportingFilterSource>;
  sourceId?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<Array<OrderStatus>>;
};

export type Organization = {
  __typename?: 'Organization';
  /** Address details. */
  address?: Maybe<Address>;
  /** Branding settings. */
  branding: BrandingOutputBase;
  createdAt: Scalars['DateTime']['output'];
  /** Currency */
  currency?: Maybe<Scalars['String']['output']>;
  customTaxName?: Maybe<Scalars['String']['output']>;
  customTaxRate?: Maybe<Scalars['Float']['output']>;
  defaultLanguage: Scalars['String']['output'];
  /** Contact e-mail address. */
  email: Scalars['String']['output'];
  /** Beta features. */
  features?: Maybe<Array<Scalars['String']['output']>>;
  helpLink?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Landing page settings. */
  landingPage: LandingPage;
  locale: Scalars['String']['output'];
  /** Marketing settings. */
  marketing?: Maybe<Marketing>;
  /** Organization name. */
  name: Scalars['String']['output'];
  /** Contact phone. */
  phone: Scalars['String']['output'];
  platformChargeSettings?: Maybe<PlatformChargeSettings>;
  point: Point;
  /** The privacy policy of the organistion */
  privacyPolicy?: Maybe<Scalars['String']['output']>;
  /** Shipping labels. */
  shippingLabels?: Maybe<ShippingLabels>;
  /** Show memberships renewal banner. */
  showMembershipRenewal?: Maybe<Scalars['Boolean']['output']>;
  /** Show memberships in client navigation. */
  showMemberships: Scalars['Boolean']['output'];
  /** Organization slug. */
  slug: Scalars['String']['output'];
  /** The support information of the organistion */
  supportInfo?: Maybe<Scalars['String']['output']>;
  /** Tax calculation method. either inclusive or exclusive. */
  taxCalculationMethod: TaxCalculationMethod;
  /** Tax number */
  taxNumber?: Maybe<Scalars['String']['output']>;
  taxRate: Scalars['Float']['output'];
  /** The terms and conditions of the organistion */
  termsAndConditions?: Maybe<Scalars['String']['output']>;
  ticketCoverPlatformFeePercentage?: Maybe<Scalars['Float']['output']>;
  timezone: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type OrganizationConnection = {
  __typename?: 'OrganizationConnection';
  edges: Array<OrganizationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type OrganizationEdge = {
  __typename?: 'OrganizationEdge';
  cursor: Scalars['String']['output'];
  node: Organization;
};

export type OrganizationOrderByInput = {
  createdAt?: InputMaybe<OrderByDirection>;
  updatedAt?: InputMaybe<OrderByDirection>;
};

export type OrganizationOutputBranding = {
  __typename?: 'OrganizationOutputBranding';
  N100: Scalars['String']['output'];
  N200: Scalars['String']['output'];
  N300: Scalars['String']['output'];
  N400: Scalars['String']['output'];
  N500: Scalars['String']['output'];
  N600: Scalars['String']['output'];
  N700: Scalars['String']['output'];
  N800: Scalars['String']['output'];
  P100: Scalars['String']['output'];
  P200: Scalars['String']['output'];
  P300: Scalars['String']['output'];
  S100: Scalars['String']['output'];
  S200: Scalars['String']['output'];
  S300: Scalars['String']['output'];
  /** Organization background image. */
  background?: Maybe<ExtendedFile>;
  /** Organization favicon. */
  favicon?: Maybe<ExtendedFile>;
  /** Organization full background image. */
  fullBackground?: Maybe<ExtendedFile>;
  /** Grey scale option. */
  greyScale?: Maybe<GreyScale>;
  /** Organization logo. */
  logo?: Maybe<ExtendedFile>;
  /** Organization mobile logo. */
  mobileLogo?: Maybe<ExtendedFile>;
  /** Primary color. */
  primaryColor: Scalars['String']['output'];
  /** Secondary color. */
  secondaryColor: Scalars['String']['output'];
};

export type OrganizationWhereInput = {
  /** Fuzzy search query. */
  q?: InputMaybe<Scalars['String']['input']>;
};

export type OverallLayoutOutput = {
  __typename?: 'OverallLayoutOutput';
  defaultDateRange: DateRange;
};

/** Data to supply the audience page of the post event (PE) report */
export type PeReportAudienceOutput = {
  __typename?: 'PEReportAudienceOutput';
  insights: Array<PeReportStatistic>;
  trafficChannels: Array<PercentageStatistic>;
};

/** Data to supply the overview page of the post event (PE) report */
export type PeReportDemographicsOutput = {
  __typename?: 'PEReportDemographicsOutput';
  age?: Maybe<AgeBreakDownOutput>;
  audienceViews?: Maybe<Array<PercentageStatistic>>;
  gender?: Maybe<GenderBreakDownOutput>;
  ticketsSold?: Maybe<Array<PercentageStatistic>>;
};

export type PeReportEvent = {
  __typename?: 'PEReportEvent';
  endDate?: Maybe<Scalars['DateTime']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  startDate?: Maybe<Scalars['DateTime']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** Data to supply the overview page of the post event (PE) report */
export type PeReportOverviewOutput = {
  __typename?: 'PEReportOverviewOutput';
  event: PeReportEvent;
  financialSales: Array<FinancialSales>;
  salesBreakdown: SalesBreakdown;
  statistics: Array<PeReportStatistic>;
  ticketSalesStatistics: Array<PeReportStatistic>;
};

/** Data to supply the main sale referral page of the post event (PE) report */
export type PeReportReferralOutsideMainSaleOutput = {
  __typename?: 'PEReportReferralOutsideMainSaleOutput';
  actionEngagement?: Maybe<Array<ActionEngagementRecordOutput>>;
  promoter: Array<PeReportStatistic>;
};

/** Data to supply the post event (PE) report for competition stats */
export type PeReportRegistrationCompetitionOutput = {
  __typename?: 'PEReportRegistrationCompetitionOutput';
  actionEngagement?: Maybe<Array<ActionEngagementRecordOutput>>;
  hasCompetition: Scalars['Boolean']['output'];
  overview: Array<PeReportStatistic>;
  promoter: Array<PeReportStatistic>;
};

/** Data to supply the overview page of the post event (PE) report */
export type PeReportRegistrationOutput = {
  __typename?: 'PEReportRegistrationOutput';
  actionEngagement?: Maybe<Array<ActionEngagementRecordOutput>>;
  overview: Array<PeReportStatistic>;
  promoter: Array<PeReportStatistic>;
};

export type PeReportStatistic = MoneyStatistic | NumberStatistic | PercentageStatistic | StringStatistic;

/** Data to supply the overview page of the post event (PE) report */
export type PeReportWaitlistOutput = {
  __typename?: 'PEReportWaitlistOutput';
  statistics: Array<PeReportStatistic>;
};

export type PackageInformation = {
  __typename?: 'PackageInformation';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type PackageLayoutOutput = {
  __typename?: 'PackageLayoutOutput';
  defaultDateRange: DateRange;
  pointItem?: Maybe<PackageInformation>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPreviousPage?: Maybe<Scalars['Boolean']['output']>;
  startCursor?: Maybe<Scalars['String']['output']>;
};

/** Facebook page. */
export type PageListsOutput = {
  __typename?: 'PageListsOutput';
  access_token: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type PartPaidTicketStats = {
  __typename?: 'PartPaidTicketStats';
  eventId?: Maybe<Scalars['String']['output']>;
  membershipId?: Maybe<Scalars['String']['output']>;
  orderId: Scalars['String']['output'];
  ticketCount: Scalars['Float']['output'];
};

/** Address details. */
export type PartialAddress = {
  __typename?: 'PartialAddress';
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  line1?: Maybe<Scalars['String']['output']>;
  line2?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  suburb?: Maybe<Scalars['String']['output']>;
};

/** Address details. */
export type PartialAddressInput = {
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  line1?: InputMaybe<Scalars['String']['input']>;
  line2?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  suburb?: InputMaybe<Scalars['String']['input']>;
};

export type PaymentError = {
  __typename?: 'PaymentError';
  code?: Maybe<Scalars['String']['output']>;
  message: Scalars['String']['output'];
};

/** Represents the order creation result. */
export type PaymentIntegrationOutput = {
  __typename?: 'PaymentIntegrationOutput';
  bnplEnabled?: Maybe<Scalars['Boolean']['output']>;
  bnplTransactionFeePercent?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  facebookPageId?: Maybe<Scalars['String']['output']>;
  facebookUserId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  /** Integration name */
  name?: Maybe<Scalars['String']['output']>;
  /** If payment gateways have different option types this field is used to specify which one to force */
  paymentMethodType?: Maybe<Scalars['String']['output']>;
  /** External public key (can be used in customer frontend) */
  publicKey?: Maybe<Scalars['String']['output']>;
  stripeConnectAccount?: Maybe<StripeConnectAccount>;
  /** Transaction fee. */
  transactionFee?: Maybe<Scalars['Float']['output']>;
  /** Transaction fee(only for stripe). Users can input both fixed and percentage fee for stripe(0.3$+2%). */
  transactionFee2?: Maybe<Scalars['Float']['output']>;
  /** Transaction fee type. */
  transactionFeeType?: Maybe<FeeType>;
  /** Transaction fee type(only for stripe). Users can input both fixed and percentage fee for stripe(0.3$+2%). */
  transactionFeeType2?: Maybe<FeeType>;
  /** Integration type */
  type?: Maybe<IntegrationType>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Webhook URL to point integration to */
  webhookUrl?: Maybe<Scalars['String']['output']>;
};

export type PaymentOption = {
  __typename?: 'PaymentOption';
  bnplEnabled?: Maybe<Scalars['Boolean']['output']>;
  calculatedTransactionFee?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
  order?: Maybe<Scalars['Float']['output']>;
  paymentMethod?: Maybe<Scalars['String']['output']>;
  paymentPlanMetadata?: Maybe<PaymentPlanMetadata>;
  transactionFee?: Maybe<Scalars['Float']['output']>;
  transactionFee2?: Maybe<Scalars['Float']['output']>;
  transactionFeeType?: Maybe<FeeType>;
  transactionFeeType2?: Maybe<FeeType>;
  type: IntegrationType;
  value: Scalars['String']['output'];
};

export type PaymentOptions = {
  __typename?: 'PaymentOptions';
  options?: Maybe<Array<PaymentOption>>;
  orderId: Scalars['String']['output'];
};

export type PaymentPlanMetadata = {
  __typename?: 'PaymentPlanMetadata';
  depositAmount?: Maybe<Scalars['Float']['output']>;
  installmentAmount?: Maybe<Scalars['Float']['output']>;
  installmentCount: Scalars['Float']['output'];
  paymentPlanFeePercentage: Scalars['Float']['output'];
};

export type PaymentPlanSettings = {
  __typename?: 'PaymentPlanSettings';
  createdAt: Scalars['DateTime']['output'];
  disabledAt?: Maybe<Scalars['String']['output']>;
  gracePeriodDays: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  scheduleOptions?: Maybe<Array<ScheduleOption>>;
  updatedAt: Scalars['DateTime']['output'];
};

/** Payment providers and methods */
export enum PaymentProvider {
  Afterpay = 'Afterpay',
  Cash = 'Cash',
  CreditCard = 'CreditCard',
  Credits = 'Credits',
  Eftpos = 'Eftpos',
  Invoice = 'Invoice',
  Laybuy = 'Laybuy',
  MpAiSa = 'MPAiSA',
  Other = 'Other',
  Pin = 'Pin',
  Points = 'Points',
  Pos = 'Pos',
  Stripe = 'Stripe',
  StripeAfterpay = 'StripeAfterpay',
  Windcave = 'Windcave'
}

export type PaymentResult = PaymentError | PaymentSuccess;

export type PaymentSuccess = {
  __typename?: 'PaymentSuccess';
  /** The payment gateway. */
  gateway: PaymentProvider;
  /** The payment url provided by the payment gateway. */
  redirectTo?: Maybe<Scalars['String']['output']>;
};

export type PercentageStatistic = {
  __typename?: 'PercentageStatistic';
  label: Scalars['String']['output'];
  percentage: Scalars['Float']['output'];
  tooltip?: Maybe<StatisticTooltip>;
  value: Scalars['Float']['output'];
};

/** Permission for a specific action */
export enum Permission {
  AccountCreate = 'ACCOUNT_CREATE',
  AccountDelete = 'ACCOUNT_DELETE',
  AccountRead = 'ACCOUNT_READ',
  AccountUpdate = 'ACCOUNT_UPDATE',
  AutomationCreate = 'AUTOMATION_CREATE',
  AutomationRead = 'AUTOMATION_READ',
  AutomationUpdate = 'AUTOMATION_UPDATE',
  BroadcastCreate = 'BROADCAST_CREATE',
  BroadcastRead = 'BROADCAST_READ',
  CompetitionEntriesRead = 'COMPETITION_ENTRIES_READ',
  CustomerCreate = 'CUSTOMER_CREATE',
  CustomerCredits = 'CUSTOMER_CREDITS',
  CustomerDelete = 'CUSTOMER_DELETE',
  CustomerExport = 'CUSTOMER_EXPORT',
  CustomerImport = 'CUSTOMER_IMPORT',
  CustomerRead = 'CUSTOMER_READ',
  CustomerUpdate = 'CUSTOMER_UPDATE',
  EventCreate = 'EVENT_CREATE',
  EventDelete = 'EVENT_DELETE',
  EventRead = 'EVENT_READ',
  EventUpdate = 'EVENT_UPDATE',
  MembershipCreate = 'MEMBERSHIP_CREATE',
  MembershipDelete = 'MEMBERSHIP_DELETE',
  MembershipRead = 'MEMBERSHIP_READ',
  MembershipUpdate = 'MEMBERSHIP_UPDATE',
  OrderCancel = 'ORDER_CANCEL',
  OrderComp = 'ORDER_COMP',
  OrderCreate = 'ORDER_CREATE',
  OrderDelete = 'ORDER_DELETE',
  OrderExport = 'ORDER_EXPORT',
  OrderRead = 'ORDER_READ',
  OrderRefund = 'ORDER_REFUND',
  OrderUpdate = 'ORDER_UPDATE',
  OrganizationBranding = 'ORGANIZATION_BRANDING',
  OrganizationCreate = 'ORGANIZATION_CREATE',
  OrganizationDelete = 'ORGANIZATION_DELETE',
  OrganizationIntegrations = 'ORGANIZATION_INTEGRATIONS',
  OrganizationLegal = 'ORGANIZATION_LEGAL',
  OrganizationSettings = 'ORGANIZATION_SETTINGS',
  OrganizationVenues = 'ORGANIZATION_VENUES',
  PointsCreate = 'POINTS_CREATE',
  PointsRead = 'POINTS_READ',
  PointsUpdate = 'POINTS_UPDATE',
  PosCreate = 'POS_CREATE',
  PosOperatorCreate = 'POS_OPERATOR_CREATE',
  PosRead = 'POS_READ',
  ReportingCapacity = 'REPORTING_CAPACITY',
  ReportingExportTopTags = 'REPORTING_EXPORT_TOP_TAGS',
  ReportingFaceValue = 'REPORTING_FACE_VALUE',
  ReportingFinancial = 'REPORTING_FINANCIAL',
  ReportingFinancialGraph = 'REPORTING_FINANCIAL_GRAPH',
  ReportingGatewayCount = 'REPORTING_GATEWAY_COUNT',
  ReportingIaAudience = 'REPORTING_IA_AUDIENCE',
  ReportingIaCapacity = 'REPORTING_IA_CAPACITY',
  ReportingIaCodes = 'REPORTING_IA_CODES',
  ReportingIaFinancial = 'REPORTING_IA_FINANCIAL',
  ReportingIaMarketing = 'REPORTING_IA_MARKETING',
  ReportingIaMembership = 'REPORTING_IA_MEMBERSHIP',
  ReportingIaOverall = 'REPORTING_IA_OVERALL',
  ReportingIaOverview = 'REPORTING_IA_OVERVIEW',
  ReportingIaPackages = 'REPORTING_IA_PACKAGES',
  ReportingIaPos = 'REPORTING_IA_POS',
  ReportingIaReports = 'REPORTING_IA_REPORTS',
  ReportingIaSales = 'REPORTING_IA_SALES',
  ReportingIaScans = 'REPORTING_IA_SCANS',
  ReportingIaScheduled = 'REPORTING_IA_SCHEDULED',
  ReportingIaSeasons = 'REPORTING_IA_SEASONS',
  ReportingPos = 'REPORTING_POS',
  ReportingPostevent = 'REPORTING_POSTEVENT',
  ReportingRead = 'REPORTING_READ',
  ReportingSales = 'REPORTING_SALES',
  ReportingSalesReport = 'REPORTING_SALES_REPORT',
  ReportingScans = 'REPORTING_SCANS',
  ReportingTabEvents = 'REPORTING_TAB_EVENTS',
  ReportingTabInsights = 'REPORTING_TAB_INSIGHTS',
  ReportingTabPromotions = 'REPORTING_TAB_PROMOTIONS',
  ReportingTabSales = 'REPORTING_TAB_SALES',
  ScannerAccess = 'SCANNER_ACCESS',
  ScansExport = 'SCANS_EXPORT',
  ScoutDelete = 'SCOUT_DELETE',
  ScoutRead = 'SCOUT_READ',
  SeasonCreate = 'SEASON_CREATE',
  SeasonDelete = 'SEASON_DELETE',
  SeasonRead = 'SEASON_READ',
  SeasonUpdate = 'SEASON_UPDATE',
  SignupFormsCreate = 'SIGNUP_FORMS_CREATE',
  SocialCreate = 'SOCIAL_CREATE',
  SocialRead = 'SOCIAL_READ',
  TicketExport = 'TICKET_EXPORT',
  TicketImport = 'TICKET_IMPORT',
  TicketPrint = 'TICKET_PRINT',
  TicketRead = 'TICKET_READ',
  TicketRelease = 'TICKET_RELEASE',
  TrackingCodesExport = 'TRACKING_CODES_EXPORT',
  WaitlistExport = 'WAITLIST_EXPORT',
  WaitlistRead = 'WAITLIST_READ'
}

export type PinPaymentChargeResponse = {
  __typename?: 'PinPaymentChargeResponse';
  redirectUrl: Scalars['String']['output'];
};

export type PinPaymentContext = {
  __typename?: 'PinPaymentContext';
  amount?: Maybe<Scalars['Float']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  isSandbox: Scalars['Boolean']['output'];
  orderId?: Maybe<Scalars['String']['output']>;
  publicKey?: Maybe<Scalars['String']['output']>;
  redirectUrl?: Maybe<Scalars['String']['output']>;
};

export type PlatformChargeSettings = {
  __typename?: 'PlatformChargeSettings';
  orderChargeSettings?: Maybe<Array<OrderChargeSetting>>;
};

export type Point = {
  __typename?: 'Point';
  createdAt: Scalars['DateTime']['output'];
  gateways: Array<Integration>;
  id: Scalars['ID']['output'];
  isEnabled: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  organization: Organization;
  pointItems: Array<PointItem>;
  termsAndConditions?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type PointItem = {
  __typename?: 'PointItem';
  amount: Scalars['Float']['output'];
  backgroundImage?: Maybe<ExtendedFile>;
  banner?: Maybe<ExtendedFile>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  descriptionImage?: Maybe<ExtendedFile>;
  fees: OrderFee;
  id: Scalars['ID']['output'];
  isVisible: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  organization: Organization;
  point: Point;
  price: Scalars['Float']['output'];
  thumbnail?: Maybe<ExtendedFile>;
  updatedAt: Scalars['DateTime']['output'];
};

export enum PointReportingFilterSource {
  Event = 'EVENT',
  Membership = 'MEMBERSHIP',
  Overall = 'OVERALL',
  Package = 'PACKAGE'
}

/** Represents a POS terminal. */
export type Pos = {
  __typename?: 'Pos';
  /** Booking fee. */
  bookingFee: Scalars['Float']['output'];
  /** Booking fee type. */
  bookingFeeType: FeeType;
  canConnectToTerminal: Scalars['Boolean']['output'];
  /** The beginning float of change for the POS terminal. */
  cashAmount?: Maybe<Scalars['Float']['output']>;
  createdAt: Scalars['DateTime']['output'];
  /** Available delivery options for the POS terminal. */
  deliveryOptions: Array<ShippingOption>;
  /** Whether receipts are turned on. */
  enableReceipts: Scalars['Boolean']['output'];
  event: Event;
  id: Scalars['ID']['output'];
  isConnectedToTerminal: Scalars['Boolean']['output'];
  /** Friendly name of the POS terminal. */
  name: Scalars['String']['output'];
  /** Available payment option incl. fees. */
  paymentOptions: PosPaymentOptions;
  release: Release;
  sessions?: Maybe<Array<PosSession>>;
  updatedAt: Scalars['DateTime']['output'];
  users: Array<PosUser>;
};

export type PosFinancialData = {
  __typename?: 'PosFinancialData';
  cash: PeReportStatistic;
  creditCard: PeReportStatistic;
  eftpos: PeReportStatistic;
  grossSales: PeReportStatistic;
};

export type PosFloatData = {
  __typename?: 'PosFloatData';
  cashReceived: PeReportStatistic;
  cashReturned: PeReportStatistic;
  endFloat: PeReportStatistic;
  startFloat: PeReportStatistic;
};

export type PosPaymentFee = {
  __typename?: 'PosPaymentFee';
  /** Fee amount */
  feeAmount: Scalars['Float']['output'];
  /** Fee type. */
  feeType: FeeType;
};

export type PosPaymentFeeInput = {
  /** Fee amount */
  feeAmount: Scalars['Float']['input'];
  /** Fee type. */
  feeType: FeeType;
};

/** Represents POS options incl. fees. */
export type PosPaymentOptions = {
  __typename?: 'PosPaymentOptions';
  /** MPAiSA fee. */
  MPAiSA?: Maybe<PosPaymentFee>;
  /** Cash fee (normally $0). */
  cash?: Maybe<PosPaymentFee>;
  /** Credit card fee. */
  cc?: Maybe<PosPaymentFee>;
  /** Eftpos fee. */
  eftpos?: Maybe<PosPaymentFee>;
};

export type PosPaymentOptionsInput = {
  /** MPAiSA fee. */
  MPAiSA?: InputMaybe<PosPaymentFeeInput>;
  /** Cash fee (normally $0). */
  cash?: InputMaybe<PosPaymentFeeInput>;
  /** Credit card fee. */
  cc?: InputMaybe<PosPaymentFeeInput>;
  /** Eftpos fee. */
  eftpos?: InputMaybe<PosPaymentFeeInput>;
};

export type PosReleaseInput = {
  bookingFee?: InputMaybe<Scalars['Float']['input']>;
  bookingFeeType?: InputMaybe<FeeType>;
  eventId: Scalars['String']['input'];
  posPaymentOptions?: InputMaybe<PosPaymentOptionsInput>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  tickets: Array<PosTicketDto>;
};

export type PosSaleOverview = {
  __typename?: 'PosSaleOverview';
  averageOrderSize: PeReportStatistic;
  posOrders: PeReportStatistic;
  ticketPerHour: PeReportStatistic;
  ticketSoldAtDoor: PeReportStatistic;
};

export type PosSalesOverviewOutput = {
  __typename?: 'PosSalesOverviewOutput';
  average: Scalars['Float']['output'];
  orders: Scalars['Float']['output'];
  perHour: Scalars['Float']['output'];
  scannedPercentage: Scalars['Float']['output'];
  soldAtTheDoor: Scalars['Float']['output'];
  soldOnline: Scalars['Float']['output'];
};

export type PosSession = {
  __typename?: 'PosSession';
  createdAt: Scalars['DateTime']['output'];
  endCash?: Maybe<Scalars['Float']['output']>;
  endedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  operator?: Maybe<User>;
  pos: Pos;
  startCash?: Maybe<Scalars['Float']['output']>;
  startedAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type PosTicketDto = {
  id: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  price: Scalars['Float']['input'];
  /** The type of ticket */
  type: TicketTypeKind;
};

export type PosTransaction = {
  __typename?: 'PosTransaction';
  amount: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  fee: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  order: Order;
  /** Used payment gateway. */
  paymentGateway: PaymentProvider;
  /** Return amount (only relevant for cash). */
  returned: Scalars['Float']['output'];
  status: OrderTransactionStatus;
  updatedAt: Scalars['DateTime']['output'];
};

export type PosTransactionConnection = {
  __typename?: 'PosTransactionConnection';
  edges: Array<PosTransactionEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type PosTransactionEdge = {
  __typename?: 'PosTransactionEdge';
  cursor: Scalars['String']['output'];
  node: PosTransaction;
};

export type PosTransactionOrderByInput = {
  createdAt?: InputMaybe<OrderByDirection>;
};

export type PosUser = {
  __typename?: 'PosUser';
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
};

export type PostmarkEmailStatsOverviewOutput = {
  __typename?: 'PostmarkEmailStatsOverviewOutput';
  bounceRate: Scalars['Float']['output'];
  bounced: Scalars['Float']['output'];
  opens: Scalars['Float']['output'];
  sent: Scalars['Float']['output'];
  smtpApiErrors: Scalars['Float']['output'];
  spamComplaints: Scalars['Float']['output'];
  spamComplaintsRate: Scalars['Float']['output'];
  totalClicks: Scalars['Float']['output'];
  totalTrackedLinksSent: Scalars['Float']['output'];
  tracked: Scalars['Float']['output'];
  uniqueLinksClicked: Scalars['Float']['output'];
  uniqueOpens: Scalars['Float']['output'];
  withClientRecorded: Scalars['Float']['output'];
  withLinkTracking: Scalars['Float']['output'];
  withOpenTracking: Scalars['Float']['output'];
  withPlatformRecorded: Scalars['Float']['output'];
  withReadTimeRecorded: Scalars['Float']['output'];
};

/** Create or update a presale. */
export type PresaleReleaseInput = {
  accessCodes: Array<AccessCodeInput>;
  accessScreenImage?: InputMaybe<Scalars['Upload']['input']>;
  accessScreenMessage?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  eventId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  releaseId?: InputMaybe<Scalars['String']['input']>;
  startDate: Scalars['DateTime']['input'];
  tickets: Array<AccessCodeTicketInput>;
};

/** Portable representation of presale release. */
export type PresaleReleaseOutput = {
  __typename?: 'PresaleReleaseOutput';
  /** The access codes that can be used with this presale */
  accessCodes: Array<AccessCodeOutput>;
  /** Image to be shown on the customer portal of the ticket . Returns null if the not set. */
  accessScreenImage?: Maybe<ExtendedFile>;
  accessScreenMessage?: Maybe<Scalars['String']['output']>;
  endDate: Scalars['DateTime']['output'];
  isActive: Scalars['Boolean']['output'];
  isEnabled: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  releaseId: Scalars['String']['output'];
  /** The presale URL slug */
  slug: Scalars['String']['output'];
  startDate: Scalars['DateTime']['output'];
  status?: Maybe<PresaleStatus>;
  /** The tickets that can be purchased with this presale */
  tickets: Array<PresaleTicketOutput>;
};

export enum PresaleStatus {
  Completed = 'COMPLETED',
  Disabled = 'DISABLED',
  OnSale = 'ON_SALE',
  PendingOnSale = 'PENDING_ON_SALE',
  PendingScheduled = 'PENDING_SCHEDULED',
  Scheduled = 'SCHEDULED'
}

/** Presale ticket output */
export type PresaleTicketOutput = {
  __typename?: 'PresaleTicketOutput';
  /** The ticket id */
  id: Scalars['String']['output'];
  /** The type of ticket */
  type: TicketTypeKind;
};

export enum PricingStrategy {
  LineItemsComp = 'LINE_ITEMS_COMP',
  LineItemsExcComp = 'LINE_ITEMS_EXC_COMP',
  PaymentPlanFee = 'PAYMENT_PLAN_FEE',
  TicketCover = 'TICKET_COVER'
}

export type ProductUpsellInput = {
  customizedUpsell: Scalars['Boolean']['input'];
  selectedProducts: Array<SelectedProductInput>;
};

export type PromoCodeUnion = EventPromoCode | MembershipPromoCode;

export type PromoterOnsaleOutput = {
  __typename?: 'PromoterOnsaleOutput';
  newCustomers: Scalars['Float']['output'];
  orders: Scalars['Float']['output'];
  referralEntriesAwarded: Scalars['Float']['output'];
  revenue: Scalars['Float']['output'];
};

export type PromoterRegistrationOutput = {
  __typename?: 'PromoterRegistrationOutput';
  newCustomers: Scalars['Float']['output'];
  referralEntriesAwarded: Scalars['Float']['output'];
  registrationsViaReferral: Scalars['Float']['output'];
};

export type PromoterSettingsInput = {
  config?: InputMaybe<Array<PromoterShareActionInput>>;
  eventId: Scalars['String']['input'];
  rewardSettings?: InputMaybe<RewardSettingsDto>;
  socialPages?: InputMaybe<Array<EventSocialPageInput>>;
};

export type PromoterSettingsOutput = {
  __typename?: 'PromoterSettingsOutput';
  configurations?: Maybe<Array<PromoterShareAction>>;
  /** The referral campaign associated with this event */
  referralCampaign?: Maybe<ReferralCampaign>;
  socialPages?: Maybe<Array<EventSocialPage>>;
};


export type PromoterSettingsOutputReferralCampaignArgs = {
  eventId: Scalars['String']['input'];
};

export type PromoterShareAction = {
  __typename?: 'PromoterShareAction';
  actionType: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  platform: Scalars['String']['output'];
  socialLinkType?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type PromoterShareActionInput = {
  actionType: Scalars['String']['input'];
  platform: Scalars['String']['input'];
};

export type PublicReleaseTicketInput = {
  /** The ticket id */
  id: Scalars['String']['input'];
  /** If ticket is hidden by the release */
  isHidden: Scalars['Boolean']['input'];
  /** The ticket name */
  name: Scalars['String']['input'];
  /** The ticket price */
  price?: InputMaybe<Scalars['Float']['input']>;
  /** The ticket quantity */
  quantity?: InputMaybe<Scalars['Float']['input']>;
  /** The type of ticket */
  type: TicketTypeKind;
  /** The ticket zone name */
  zoneName?: InputMaybe<Scalars['String']['input']>;
};

/** Listed release ticket (ticketType or addon). */
export type PublicReleaseTicketOutput = {
  __typename?: 'PublicReleaseTicketOutput';
  /** The ticket id */
  id: Scalars['String']['output'];
  /** If ticket is hidden by the release */
  isHidden: Scalars['Boolean']['output'];
  /** The ticket name */
  name: Scalars['String']['output'];
  /** The ticket price */
  price?: Maybe<Scalars['Float']['output']>;
  /** The ticket quantity */
  quantity?: Maybe<Scalars['Float']['output']>;
  /** The type of ticket */
  type: TicketTypeKind;
  /** The ticket zone name */
  zoneName?: Maybe<Scalars['String']['output']>;
};

export type PublishCompetitionInput = {
  bannerImage?: InputMaybe<Scalars['Upload']['input']>;
  competitionId?: InputMaybe<Scalars['String']['input']>;
  competitionType: CompetitionType;
  description?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  prizes?: InputMaybe<Array<CompetitionPrizeInput>>;
  promoter?: InputMaybe<Array<CompetitionPromoterInput>>;
  referralRewardValue?: InputMaybe<Scalars['Int']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  termsAndConditions?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PurchaseHistoryArgs = {
  __typename?: 'PurchaseHistoryArgs';
  eventIds: Array<Scalars['String']['output']>;
  exclude: Scalars['Boolean']['output'];
  kind: BroadcastMarketingFiltersV2Kind;
};

export type PurchaseRestriction = {
  __typename?: 'PurchaseRestriction';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  isAlwaysVisible: Scalars['Boolean']['output'];
  isExclusive: Scalars['Boolean']['output'];
  quantity: Scalars['Int']['output'];
  requiredEntities: Array<PurchaseRestrictionRequiredEntity>;
  restrictedId: Scalars['ID']['output'];
  restrictedType: LineItemType;
  updatedAt: Scalars['DateTime']['output'];
};

export type PurchaseRestrictionInput = {
  isAlwaysVisible?: InputMaybe<Scalars['Boolean']['input']>;
  isExclusive?: InputMaybe<Scalars['Boolean']['input']>;
  quantity: Scalars['Int']['input'];
  requiredEntities: Array<PurchaseRestrictionRequiredEntityInput>;
  restrictedId: Scalars['ID']['input'];
  restrictedType: LineItemType;
};

export type PurchaseRestrictionRequiredEntity = {
  __typename?: 'PurchaseRestrictionRequiredEntity';
  requiredId: Scalars['ID']['output'];
  requiredType: LineItemType;
};

export type PurchaseRestrictionRequiredEntityInput = {
  requiredId: Scalars['ID']['input'];
  requiredType: LineItemType;
};

export type Query = {
  __typename?: 'Query';
  accountsList: UserConnection;
  activeCompetitionByType?: Maybe<Competition>;
  activeCompetitions?: Maybe<Array<Competition>>;
  activities: ActivityConnection;
  adobeIntegration?: Maybe<AdobeExperiencePlatformIntegration>;
  /** Gets created/updated ATR orders between a supplied date range. Loads order and order.user relations. */
  atrMembershipOrdersUpdatedBetween: Array<AtrMembershipOrdersUpdatedBetweenOutput>;
  /** Fetches users updated between given date range. Dates supplied in organizations timezone. */
  atrUsersUpdatedBetween: Array<AtrUsersUpdatedBetweenOutput>;
  audienceCount: Scalars['Float']['output'];
  automation: Automation;
  automations: Array<Automation>;
  availableEmailTypesToCopy: Array<EmailType>;
  broadcast: BroadcastOutput;
  broadcastDeliveryErrors: BroadcastDeliveryErrorsOutput;
  broadcastFilterState: Array<BroadcastMarketingV2StateOutput>;
  broadcastReportStats: BroadcastReportingOutput;
  broadcastUnsubscribes: BroadcastUnsubscribesOutput;
  broadcasts: Array<BroadcastOutput>;
  broadcastsForEmailsOpenedFilter: Array<ResponseLabelValue>;
  /** Gets ticket cover amount for order */
  calculateTicketCoverAmounts: TicketCoverAmount;
  capacityOverview: Array<FinancialSales>;
  capacitySeatingMap: Scalars['String']['output'];
  capacitySeatingMapTooltips: Scalars['String']['output'];
  chargeMonthSummary: ChargeMonthSummaryOutput;
  chargeSummary: Array<ChargeSummaryOutput>;
  codeReport: CodeReportOutput;
  competition: Competition;
  competitions: Array<Competition>;
  currentOrganization: CurrentOrganizationOutput;
  customerLocationsByFilter: Array<LocationOutputV2>;
  customerOrders: Array<ShopifyCustomerOrder>;
  customerReportingOverview: CustomerReportingOverviewArgs;
  defaultBroadcastStyle?: Maybe<EmailStyle>;
  defaultDatesForPostEventReport: DefaultDates;
  deleteAdobeIntegration: Scalars['Boolean']['output'];
  /** Source is hard coded to EVENT in peReport.graphql */
  demographics: PeReportDemographicsOutput;
  disableShopifyIntegration: Scalars['Boolean']['output'];
  disableXeroIntegration: Scalars['Boolean']['output'];
  dynamicImage?: Maybe<ExtendedFile>;
  emailCustomizations: Array<EmailCustomizationOutput>;
  event: Event;
  eventAddons: Array<EventAddon>;
  eventForecast: EventForecastOutput;
  eventInformation: EventInformation;
  eventMultiBuyPromotions: Array<EventMultiBuyPromotion>;
  eventOrMembershipSeasons: Array<Season>;
  /** Fetches online orders for an event */
  eventOrdersOnline?: Maybe<EventOrdersOnlineOutput>;
  eventPromoCodes: Array<EventPromoCode>;
  events: EventConnection;
  eventsById: Array<Event>;
  exhibitorContext: ExhibitorContextOutput;
  exhibitorProfile: ExpoExhibitorSessionProfileOutput;
  exhibitors: Array<ExpoExhibitor>;
  expoListNamingFields: Array<ExpoNamingField>;
  exportFilterColumns: ExportFilterCategoryOutput;
  faceValueFinancialGraph: GraphOutput;
  faceValueOverview: FaceValueOverviewOutput;
  facebookPageLists: Array<PageListsOutput>;
  financialGateways: FinancialGatewayGraphOutput;
  financialGraph: GraphOutput;
  financialOverview: FinancialOverviewOutput;
  financialReportingOverview: FinancialReportingOverviewOutput;
  findOrderIdForTicket: FindOrderIdForTicketOutput;
  /** Fetches a users referral ID. */
  findUserReferralId: User;
  getAccessCode: AccessCodeReleaseOutput;
  getAccessCodes: Array<AccessCodeReleaseOutput>;
  getAccessCodesForMembership: Array<AccessCode>;
  getAttendee: ExpoAttendee;
  getAttendeeTicket: ExpoAttendeeTicketOutput;
  getBroadcastLocationFilterOptions: BroadcastLocationFilterOptions;
  getCompetitionReferralReportForCustomer: Array<CompetitionCustomerReporting>;
  getConsentUrl: Scalars['String']['output'];
  getEventAndReleaseForCustomer: EventsWithAccessControlOutput;
  getEventForCompetitionReporting: EventForCompetitionReportingEntity;
  getEventPurchaseRestrictions: Array<PurchaseRestriction>;
  getGatesByEventId: Array<Gate>;
  getHistoryByCustomerId: Array<History>;
  getI18n: I18nOutput;
  getMembershipAutoRenewal: MembershipAutoRenewalOutput;
  getMembershipPurchaseRestrictions: Array<PurchaseRestriction>;
  getMembershipSubscription: MembershipSubscription;
  getMembershipSubscriptionsForPreviousMemberships: Array<MembershipSubscription>;
  getMinTicketTypePricesForEvent: Array<MinTicketTypePricesForEventOutput>;
  getOnsaleCompetitionReportStats: CompetitionReportingOnsaleOutput;
  getOnsaleCompetitionReportStatsByEventId: CompetitionReportingOnsaleOutput;
  getOrderJobStatus: OrderCreateOutput;
  getOrderPlan: OrderPlan;
  getPaginatedAccessCode: AccessCodeConnection;
  /** Fetches payment options for an order during checkout. */
  getPaymentOptions: PaymentOptions;
  getPosReleasePaymentOptions?: Maybe<ReleasePosPaymentOptions>;
  getPromoterSettings?: Maybe<PromoterSettingsOutput>;
  getPublicReleaseTickets?: Maybe<Array<PublicReleaseTicketOutput>>;
  getRedirectUrlByCode: RedirectUrl;
  getReferralCampaignByEventId?: Maybe<ReferralCampaign>;
  getReferralCampaignByOrderId?: Maybe<ReferralCampaign>;
  getReferralCampaignByReferralCode?: Maybe<ReferralCampaign>;
  getReferralCampaignStats: ReferralCampaignOverviewOutput;
  getReferralCampaigns: Array<ReferralCampaign>;
  getReferralCampaignsByEventId?: Maybe<Array<ReferralCampaign>>;
  getReferralReportForCustomer: Array<ReferralCustomerReporting>;
  getReferralRewardByOrderId?: Maybe<ReferralReward>;
  getRegionsForCountry: Array<Scalars['String']['output']>;
  getRegistrationCompetitionReportStats: CompetitionReportingRegistrationOutput;
  getRegistrationCompetitionReportStatsByEventId: CompetitionReportingRegistrationOutput;
  getRegistrationReferralReportStats: ReferralRegistrationPromotionReportingOutput;
  getReleaseBySlug?: Maybe<Release>;
  getReleaseUrlForResaleTicketType: Scalars['String']['output'];
  getReleasesForPrivateLinks: Array<Release>;
  getSentTicketsById: Array<Ticket>;
  getShopifyProducts: ShopifyProductsDto;
  getShopifySettings?: Maybe<ShopifySettings>;
  getShortUrlByCode: ShortUrl;
  getSubscriptionPortalUrlForOrder: MembershipSubscriptionPortalOutput;
  getSubscriptionPortalUrlForTicket: MembershipSubscriptionPortalOutput;
  getTicketsByIds: Array<Ticket>;
  getTrackingCodesByEventId: Array<TrackingCodeOutput>;
  getXeroAccounts: XeroAllAccountsOutput;
  getXeroConfiguration?: Maybe<XeroConfigurationOutput>;
  getZonesByEventId: Array<Zone>;
  googleAnalyticsReport: Array<BarchartOutput>;
  hasSeatedEvent: Scalars['Boolean']['output'];
  hasXeroIntegration: Scalars['Boolean']['output'];
  highestValueCustomers: Array<HighestValueCustomersOutput>;
  initScout: InitScout;
  insightsAgeBreakDown: AgeBreakDownOutput;
  insightsGenderBreakDown: GenderBreakDownOutput;
  insightsHeardAboutUsBreakDown: Array<HeardAboutUsBreakDownOutput>;
  insightsOverview: InsightsOverviewOutput;
  integration: Integration;
  integrations: Array<Integration>;
  isLoggedIn: Scalars['Boolean']['output'];
  linkedAccountUser: LinkedAccountUser;
  listAttendees: Array<ExpoAttendee>;
  listNamingFields: Array<NamingFieldOutput>;
  listPresales: Array<PresaleReleaseOutput>;
  mailchimpDomains: Scalars['JSON']['output'];
  mailchimpLists: Scalars['JSON']['output'];
  mailchimpTemplates: Scalars['JSON']['output'];
  marketingUserCount: Scalars['Float']['output'];
  me: User;
  membership?: Maybe<Membership>;
  membershipAddons: Array<MembershipAddon>;
  membershipInformation: MembershipInformation;
  membershipMultiBuyPromotions: Array<MembershipMultiBuyPromotion>;
  membershipPromoCodes: Array<MembershipPromoCode>;
  membershipTypeEventTransferPrices?: Maybe<Array<MembershipTypeEventTransferPrice>>;
  membershipTypes: Array<MembershipType>;
  memberships: MembershipConnection;
  membershipsSoldForUser: Array<MembershipTypePurchaseTotal>;
  mentionOverview: MentionOverview;
  myEventTickets: Array<Ticket>;
  myEvents: Array<Event>;
  myLoggedInOrganizations?: Maybe<Array<MyLoggedInOrganizationsOutput>>;
  myMembershipAddons: Array<Ticket>;
  /** Fetches membership hold orders of a user. */
  myMembershipHoldOrders: Array<Order>;
  myMembershipTickets: Array<Ticket>;
  /** Fetches orders of a user (paginated). */
  myOrders: OrderConnection;
  myPaymentPlanTickets: Array<PartPaidTicketStats>;
  myScannedTickets: Array<Ticket>;
  myScannedTicketsCount: Scalars['Float']['output'];
  /** Fetches an order. */
  order?: Maybe<Order>;
  /** Fetches online orders ids for an event */
  orderIdsOnline?: Maybe<Array<OrderIdsOnlineOutput>>;
  /** Returns an orders details required to do refunds */
  orderRefundDetails?: Maybe<OrderRefundDetailsOutput>;
  /** Fetches orders (paginated). */
  orders: OrderConnection;
  /** Gets updated orders */
  ordersUpdatedSince: CustomSaleOutput;
  /** Gets updated orders */
  ordersUpdatedSinceForEvent: CustomSaleOutput;
  /** [super-admin] | Fetches an organization by id */
  organization: Organization;
  /** [app] | Fetches organization-names and Ids (paginated) */
  organizationNames: OrganizationConnection;
  /** [super-admin] | Fetches organizations (paginated) */
  organizations: OrganizationConnection;
  packageInformation: PackageInformation;
  payRemainingOrderPlan: OrderPlan;
  peFinancialGateways: FinancialGatewayGraphOutput;
  peOnsaleCompetitionReportStats: PeReportRegistrationCompetitionOutput;
  peReferralPromotionReportStats: PeReportReferralOutsideMainSaleOutput;
  peReportAudience: PeReportAudienceOutput;
  peReportOverview: PeReportOverviewOutput;
  peSalesChannelGraph: SalesChannelGraphOutput;
  pinPaymentContext: PinPaymentContext;
  point?: Maybe<Point>;
  pointItem: PointItem;
  pointItems: Array<PointItem>;
  /** Checks an order for successful payment. */
  pollOrder?: Maybe<Order>;
  pos: Pos;
  posFinancialOverview: Array<GraphItem>;
  posFloatOfChange: Array<GraphItem>;
  posSalesOverview: PosSalesOverviewOutput;
  posSessions: Array<PosSession>;
  posTerminalLatestTransactionStatus: TerminalLatestTransactionStatus;
  posUsers: Array<User>;
  poses: Array<Pos>;
  previousMembershipCount?: Maybe<Scalars['Float']['output']>;
  purchasingDaysBreakdown: Array<BarchartOutput>;
  referralPromotionReportStats: ReferralPromotionReportingOutput;
  referralUrlByOrderId?: Maybe<Scalars['String']['output']>;
  referralUrlByWaitlistUserId?: Maybe<Scalars['String']['output']>;
  registrationCompetitionOverview: PeReportRegistrationCompetitionOutput;
  registrationOverview: PeReportRegistrationOutput;
  release: Release;
  releases: Array<Release>;
  reportSchedules: Array<ReportSchedule>;
  reportingLayout: ReportingLayoutOutput;
  reportingOverview: ReportingOverviewOutput;
  reportingSearchIndex: ReportingSearchIndexOutput;
  resaleTicket: TicketType;
  resaleTicketTypesForWaitlist: Array<TicketType>;
  resaleTickets: Array<TicketType>;
  resaleTicketsMetrics: Array<ResaleTicketMetrics>;
  resaleWaitlistCount: ResaleWaitlistCount;
  resaleWaitlistOverview: PeReportWaitlistOutput;
  resendExhibitorLoginEmail: Scalars['Boolean']['output'];
  salesChannelGraph: SalesChannelGraphOutput;
  salesGraph: GraphOutput;
  salesOverview: SalesOverviewOutput;
  salesReport: SalesReportOutput;
  scanTicketTypes?: Maybe<Array<GraphTextItem>>;
  scanUsherTicketTypes?: Maybe<GraphItem>;
  scanVisitors?: Maybe<Array<ScannedVisitorsOutput>>;
  scanVisitorsOverTime?: Maybe<Array<GraphRangeItem>>;
  scout: Scout;
  scoutCampaignCustomerLocations: Array<LocationOutput>;
  scoutCampaignGenderBreakdown: GenderBreakDownOutput;
  scoutCampaignHighestValueCustomers: Array<HighestValueCustomersOutput>;
  scoutCampaignOverview: ScoutCampaignOverviewOutput;
  scoutCampaignTopTags: Array<TopTagsOutput>;
  scoutCommunication: ScoutCommunication;
  scoutCommunicationUser: ScoutCommunicationUser;
  scoutCommunicationUsers: ScoutCommunicationUserConnection;
  scoutCommunications: Array<ScoutCommunication>;
  scoutUserReminders: Array<ScoutCommunicationUser>;
  /** Fetches users (paginated). */
  scoutUsers: ScoutUserConnection;
  scouts: Array<Scout>;
  searchArtists: Array<SearchArtistOutput>;
  searchShopifyProducts: ShopifyProductsDto;
  /** DEPRECATED: should use searchTicketsByEventApp to fetch for scanner app */
  searchTickets: TicketConnection;
  searchTicketsByEventApp: SearchEventTicketsAppOutput;
  season: Season;
  seasonInformation: SeasonInformation;
  seasons: Array<Season>;
  seoMetadata?: Maybe<SeoMetadata>;
  signupForm: SignupForm;
  signupForms: Array<SignupForm>;
  smsBroadcast: SmsBroadcastOutput;
  smsBroadcastAudience: SmsBroadcastAudienceOutput;
  smsBroadcastDeliveryErrors: SmsBroadcastDeliveryErrorsOutput;
  smsBroadcastUnsubscribes: SmsBroadcastUnsubscribesOutput;
  smsBroadcasts: Array<SmsBroadcastListOutput>;
  socialMentions: SocialConnection;
  stripeConnectUrl: Scalars['String']['output'];
  stripePaymentContext: StripePaymentContext;
  summaryOverview: SummaryOverviewOutput;
  summaryOverviewV2: SummaryOverviewOutput;
  tags: Array<Tag>;
  ticket?: Maybe<Ticket>;
  /** Returns stringyfied mapping of details per seat label. */
  ticketDetailsForBackOfficeOrders: Scalars['String']['output'];
  ticketTypes: Array<TicketType>;
  ticketTypesById: Array<TicketType>;
  ticketsSoldForUser: Array<TicketTypePurchaseTotal>;
  timeOfDayBreakdown: Array<BarchartOutput>;
  topReferrers: Array<TopReferrersOutput>;
  topRepeatPurchasers: Array<TopRepeatPurchasers>;
  topTags: Array<TopTagsOutput>;
  transferredMembershipTicketsForOrder?: Maybe<Array<Ticket>>;
  /** Fetches a user. */
  user: User;
  userEntries?: Maybe<Array<GrantRewardOutput>>;
  /** Fetches users (paginated). */
  users: UserConnection;
  usersEventTickets: Array<Ticket>;
  /** Fetches users updated between given date range. Dates supplied in organizations timezone. */
  usersUpdatedBetween: Array<User>;
  validateAccessCodeForMembership: AccessCode;
  venue: Venue;
  venueSeatsThumbnail?: Maybe<Scalars['String']['output']>;
  venues: Array<Venue>;
  waitlistOverview: WaitlistOverviewOutput;
  windcavePaymentContext: WindcavePaymentContext;
  windcavePaymentResult: WindcavePaymentResultOutput;
};


export type QueryActiveCompetitionByTypeArgs = {
  input: ActiveCompetitionByTypeInput;
};


export type QueryActiveCompetitionsArgs = {
  eventId: Scalars['String']['input'];
};


export type QueryActivitiesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ActivityWhereInput>;
};


export type QueryAtrMembershipOrdersUpdatedBetweenArgs = {
  input: AtrMembershipOrdersUpdatedBetweenInput;
};


export type QueryAtrUsersUpdatedBetweenArgs = {
  input: UsersUpdatedBetweenInput;
};


export type QueryAudienceCountArgs = {
  input: AudienceCountInput;
};


export type QueryAutomationArgs = {
  id: Scalars['String']['input'];
};


export type QueryAutomationsArgs = {
  input: FindAutomationsInput;
};


export type QueryAvailableEmailTypesToCopyArgs = {
  eventId?: InputMaybe<Scalars['String']['input']>;
  membershipId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryBroadcastArgs = {
  id: Scalars['String']['input'];
};


export type QueryBroadcastDeliveryErrorsArgs = {
  broadcastId: Scalars['String']['input'];
};


export type QueryBroadcastFilterStateArgs = {
  input: BroadcastMarketingV2StateInput;
};


export type QueryBroadcastReportStatsArgs = {
  input: BroadcastReportingStatsInput;
};


export type QueryBroadcastUnsubscribesArgs = {
  broadcastId: Scalars['String']['input'];
};


export type QueryCalculateTicketCoverAmountsArgs = {
  id: Scalars['String']['input'];
};


export type QueryCapacityOverviewArgs = {
  eventId: Scalars['String']['input'];
};


export type QueryCapacitySeatingMapArgs = {
  eventId: Scalars['String']['input'];
};


export type QueryCapacitySeatingMapTooltipsArgs = {
  eventId: Scalars['String']['input'];
};


export type QueryChargeMonthSummaryArgs = {
  date?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryCodeReportArgs = {
  sourceId?: InputMaybe<Scalars['String']['input']>;
  sourceType: Scalars['String']['input'];
  type: Scalars['String']['input'];
};


export type QueryCompetitionArgs = {
  id: Scalars['String']['input'];
};


export type QueryCompetitionsArgs = {
  eventId: Scalars['String']['input'];
};


export type QueryCustomerLocationsByFilterArgs = {
  channel?: InputMaybe<OrderChannel>;
  endDate: Scalars['DateTime']['input'];
  filter: LocationFilterTypes;
  release?: InputMaybe<Scalars['String']['input']>;
  scoutCommunicationId?: InputMaybe<Scalars['String']['input']>;
  seasonId?: InputMaybe<Scalars['String']['input']>;
  source: ReportingFilterSource;
  sourceId?: InputMaybe<Scalars['String']['input']>;
  startDate: Scalars['DateTime']['input'];
  tagId?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type QueryCustomerOrdersArgs = {
  customerId: Scalars['String']['input'];
};


export type QueryCustomerReportingOverviewArgs = {
  channel?: InputMaybe<OrderChannel>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  posId?: InputMaybe<Scalars['String']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  seasonId?: InputMaybe<Scalars['String']['input']>;
  sessionId?: InputMaybe<Scalars['String']['input']>;
  source: PointReportingFilterSource;
  sourceId?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryDefaultDatesForPostEventReportArgs = {
  eventId: Scalars['String']['input'];
};


export type QueryDemographicsArgs = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  eventId: Scalars['String']['input'];
  locationFilterTypes?: InputMaybe<LocationFilterTypes>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryDynamicImageArgs = {
  input: DynamicImageInput;
};


export type QueryEmailCustomizationsArgs = {
  input: GetAllCustomizationInput;
};


export type QueryEventArgs = {
  id: Scalars['String']['input'];
};


export type QueryEventAddonsArgs = {
  eventId: Scalars['String']['input'];
};


export type QueryEventForecastArgs = {
  eventId: Scalars['String']['input'];
};


export type QueryEventInformationArgs = {
  eventId: Scalars['String']['input'];
};


export type QueryEventMultiBuyPromotionsArgs = {
  eventId: Scalars['String']['input'];
};


export type QueryEventOrdersOnlineArgs = {
  id: Scalars['String']['input'];
};


export type QueryEventPromoCodesArgs = {
  eventId: Scalars['String']['input'];
};


export type QueryEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<EventOrderByInput>;
  where?: InputMaybe<EventWhereInput>;
};


export type QueryEventsByIdArgs = {
  input: EventsByIdInput;
};


export type QueryExhibitorsArgs = {
  eventId: Scalars['String']['input'];
};


export type QueryExportFilterColumnsArgs = {
  input: ExportFilterColumnsInput;
};


export type QueryFaceValueFinancialGraphArgs = {
  channel?: InputMaybe<OrderChannel>;
  endDate: Scalars['DateTime']['input'];
  release?: InputMaybe<Scalars['String']['input']>;
  scoutCommunicationId?: InputMaybe<Scalars['String']['input']>;
  seasonId?: InputMaybe<Scalars['String']['input']>;
  source: PointReportingFilterSource;
  sourceId?: InputMaybe<Scalars['String']['input']>;
  startDate: Scalars['DateTime']['input'];
  tagId?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type QueryFaceValueOverviewArgs = {
  channel?: InputMaybe<OrderChannel>;
  endDate: Scalars['DateTime']['input'];
  release?: InputMaybe<Scalars['String']['input']>;
  scoutCommunicationId?: InputMaybe<Scalars['String']['input']>;
  seasonId?: InputMaybe<Scalars['String']['input']>;
  source: PointReportingFilterSource;
  sourceId?: InputMaybe<Scalars['String']['input']>;
  startDate: Scalars['DateTime']['input'];
  tagId?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type QueryFacebookPageListsArgs = {
  input: FacebookPageListsInput;
};


export type QueryFinancialGatewaysArgs = {
  channel?: InputMaybe<OrderChannel>;
  endDate: Scalars['DateTime']['input'];
  release?: InputMaybe<Scalars['String']['input']>;
  scoutCommunicationId?: InputMaybe<Scalars['String']['input']>;
  seasonId?: InputMaybe<Scalars['String']['input']>;
  source: PointReportingFilterSource;
  sourceId?: InputMaybe<Scalars['String']['input']>;
  startDate: Scalars['DateTime']['input'];
  tagId?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type QueryFinancialGraphArgs = {
  channel?: InputMaybe<OrderChannel>;
  endDate: Scalars['DateTime']['input'];
  release?: InputMaybe<Scalars['String']['input']>;
  scoutCommunicationId?: InputMaybe<Scalars['String']['input']>;
  seasonId?: InputMaybe<Scalars['String']['input']>;
  source: ReportingFilterSource;
  sourceId?: InputMaybe<Scalars['String']['input']>;
  startDate: Scalars['DateTime']['input'];
  tagId?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type QueryFinancialOverviewArgs = {
  channel?: InputMaybe<OrderChannel>;
  endDate: Scalars['DateTime']['input'];
  release?: InputMaybe<Scalars['String']['input']>;
  scoutCommunicationId?: InputMaybe<Scalars['String']['input']>;
  seasonId?: InputMaybe<Scalars['String']['input']>;
  source: PointReportingFilterSource;
  sourceId?: InputMaybe<Scalars['String']['input']>;
  startDate: Scalars['DateTime']['input'];
  tagId?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type QueryFinancialReportingOverviewArgs = {
  channel?: InputMaybe<OrderChannel>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  posId?: InputMaybe<Scalars['String']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  seasonId?: InputMaybe<Scalars['String']['input']>;
  sessionId?: InputMaybe<Scalars['String']['input']>;
  source: PointReportingFilterSource;
  sourceId?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryFindOrderIdForTicketArgs = {
  ticketId: Scalars['String']['input'];
};


export type QueryFindUserReferralIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetAccessCodeArgs = {
  releaseId: Scalars['String']['input'];
};


export type QueryGetAccessCodesArgs = {
  eventId: Scalars['String']['input'];
};


export type QueryGetAccessCodesForMembershipArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetAttendeeArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetAttendeeTicketArgs = {
  ticketNumber: Scalars['String']['input'];
};


export type QueryGetBroadcastLocationFilterOptionsArgs = {
  broadcastCommunicationType: BroadcastCommunicationType;
};


export type QueryGetCompetitionReferralReportForCustomerArgs = {
  input: CustomerCompetitionReportingInput;
};


export type QueryGetEventAndReleaseForCustomerArgs = {
  input: EventsWithAccessControlInput;
};


export type QueryGetEventForCompetitionReportingArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetEventPurchaseRestrictionsArgs = {
  eventId: Scalars['String']['input'];
};


export type QueryGetGatesByEventIdArgs = {
  eventId: Scalars['String']['input'];
};


export type QueryGetHistoryByCustomerIdArgs = {
  input: GetHistoryByCustomerIdInput;
};


export type QueryGetMembershipAutoRenewalArgs = {
  membershipId: Scalars['String']['input'];
};


export type QueryGetMembershipPurchaseRestrictionsArgs = {
  membershipId: Scalars['String']['input'];
};


export type QueryGetMembershipSubscriptionArgs = {
  membershipSubscriptionId: Scalars['String']['input'];
};


export type QueryGetMembershipSubscriptionsForPreviousMembershipsArgs = {
  previousMembershipIds: Array<Scalars['String']['input']>;
};


export type QueryGetMinTicketTypePricesForEventArgs = {
  eventId: Scalars['String']['input'];
};


export type QueryGetOnsaleCompetitionReportStatsArgs = {
  input: CompetitionReportingInput;
};


export type QueryGetOnsaleCompetitionReportStatsByEventIdArgs = {
  eventId: Scalars['String']['input'];
};


export type QueryGetOrderJobStatusArgs = {
  jobId: Scalars['String']['input'];
};


export type QueryGetOrderPlanArgs = {
  orderId: Scalars['String']['input'];
};


export type QueryGetPaginatedAccessCodeArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  where: AccessCodeWhereInput;
};


export type QueryGetPaymentOptionsArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetPosReleasePaymentOptionsArgs = {
  releaseId: Scalars['String']['input'];
};


export type QueryGetPromoterSettingsArgs = {
  eventId: Scalars['String']['input'];
};


export type QueryGetPublicReleaseTicketsArgs = {
  eventId: Scalars['String']['input'];
  includeResale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryGetRedirectUrlByCodeArgs = {
  input: RedirectCodeInput;
};


export type QueryGetReferralCampaignByEventIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetReferralCampaignByOrderIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetReferralCampaignByReferralCodeArgs = {
  referralCode: Scalars['String']['input'];
};


export type QueryGetReferralCampaignStatsArgs = {
  eventId: Scalars['String']['input'];
  id: Scalars['String']['input'];
};


export type QueryGetReferralCampaignsByEventIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetReferralReportForCustomerArgs = {
  input: CustomerReferralReportingInput;
};


export type QueryGetReferralRewardByOrderIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetRegionsForCountryArgs = {
  country: Scalars['String']['input'];
};


export type QueryGetRegistrationCompetitionReportStatsArgs = {
  input: CompetitionReportingInput;
};


export type QueryGetRegistrationCompetitionReportStatsByEventIdArgs = {
  eventId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetRegistrationReferralReportStatsArgs = {
  input: ReferralPromotionReportingInput;
};


export type QueryGetReleaseBySlugArgs = {
  eventId: Scalars['String']['input'];
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetReleaseUrlForResaleTicketTypeArgs = {
  eventId: Scalars['String']['input'];
};


export type QueryGetReleasesForPrivateLinksArgs = {
  eventId: Scalars['String']['input'];
};


export type QueryGetSentTicketsByIdArgs = {
  sendId: Scalars['String']['input'];
};


export type QueryGetShopifyProductsArgs = {
  eventId?: InputMaybe<Scalars['String']['input']>;
  membershipId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetShortUrlByCodeArgs = {
  code: Scalars['String']['input'];
};


export type QueryGetSubscriptionPortalUrlForOrderArgs = {
  orderId: Scalars['String']['input'];
};


export type QueryGetSubscriptionPortalUrlForTicketArgs = {
  ticketId: Scalars['String']['input'];
};


export type QueryGetTicketsByIdsArgs = {
  ids: Scalars['String']['input'];
};


export type QueryGetTrackingCodesByEventIdArgs = {
  eventId: Scalars['String']['input'];
};


export type QueryGetZonesByEventIdArgs = {
  eventId: Scalars['String']['input'];
};


export type QueryGoogleAnalyticsReportArgs = {
  input: GoogleAnalyticsReportingFilterInput;
};


export type QueryHighestValueCustomersArgs = {
  channel?: InputMaybe<OrderChannel>;
  endDate: Scalars['DateTime']['input'];
  release?: InputMaybe<Scalars['String']['input']>;
  scoutCommunicationId?: InputMaybe<Scalars['String']['input']>;
  seasonId?: InputMaybe<Scalars['String']['input']>;
  source: ReportingFilterSource;
  sourceId?: InputMaybe<Scalars['String']['input']>;
  startDate: Scalars['DateTime']['input'];
  tagId?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type QueryInsightsAgeBreakDownArgs = {
  channel?: InputMaybe<OrderChannel>;
  endDate: Scalars['DateTime']['input'];
  release?: InputMaybe<Scalars['String']['input']>;
  scoutCommunicationId?: InputMaybe<Scalars['String']['input']>;
  seasonId?: InputMaybe<Scalars['String']['input']>;
  source: ReportingFilterSource;
  sourceId?: InputMaybe<Scalars['String']['input']>;
  startDate: Scalars['DateTime']['input'];
  tagId?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type QueryInsightsGenderBreakDownArgs = {
  channel?: InputMaybe<OrderChannel>;
  endDate: Scalars['DateTime']['input'];
  release?: InputMaybe<Scalars['String']['input']>;
  scoutCommunicationId?: InputMaybe<Scalars['String']['input']>;
  seasonId?: InputMaybe<Scalars['String']['input']>;
  source: ReportingFilterSource;
  sourceId?: InputMaybe<Scalars['String']['input']>;
  startDate: Scalars['DateTime']['input'];
  tagId?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type QueryInsightsHeardAboutUsBreakDownArgs = {
  channel?: InputMaybe<OrderChannel>;
  endDate: Scalars['DateTime']['input'];
  release?: InputMaybe<Scalars['String']['input']>;
  scoutCommunicationId?: InputMaybe<Scalars['String']['input']>;
  seasonId?: InputMaybe<Scalars['String']['input']>;
  source: ReportingFilterSource;
  sourceId?: InputMaybe<Scalars['String']['input']>;
  startDate: Scalars['DateTime']['input'];
  tagId?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type QueryInsightsOverviewArgs = {
  channel?: InputMaybe<OrderChannel>;
  endDate: Scalars['DateTime']['input'];
  release?: InputMaybe<Scalars['String']['input']>;
  scoutCommunicationId?: InputMaybe<Scalars['String']['input']>;
  seasonId?: InputMaybe<Scalars['String']['input']>;
  source: ReportingFilterSource;
  sourceId?: InputMaybe<Scalars['String']['input']>;
  startDate: Scalars['DateTime']['input'];
  tagId?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type QueryIntegrationArgs = {
  id: Scalars['String']['input'];
};


export type QueryIntegrationsArgs = {
  input?: InputMaybe<IntegrationWhereInput>;
};


export type QueryLinkedAccountUserArgs = {
  id: Scalars['String']['input'];
};


export type QueryListNamingFieldsArgs = {
  eventId: Scalars['String']['input'];
};


export type QueryListPresalesArgs = {
  eventId: Scalars['String']['input'];
};


export type QueryMarketingUserCountArgs = {
  input: BroadcastFilterCountInput;
};


export type QueryMembershipArgs = {
  id: Scalars['String']['input'];
};


export type QueryMembershipAddonsArgs = {
  membershipId: Scalars['String']['input'];
};


export type QueryMembershipInformationArgs = {
  membershipId: Scalars['String']['input'];
};


export type QueryMembershipMultiBuyPromotionsArgs = {
  membershipId: Scalars['String']['input'];
};


export type QueryMembershipPromoCodesArgs = {
  membershipId: Scalars['String']['input'];
};


export type QueryMembershipTypeEventTransferPricesArgs = {
  id: Scalars['String']['input'];
};


export type QueryMembershipTypesArgs = {
  membership: Scalars['String']['input'];
};


export type QueryMembershipsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MembershipOrderByInput>;
  where?: InputMaybe<MembershipWhereInput>;
};


export type QueryMembershipsSoldForUserArgs = {
  membershipId: Scalars['String']['input'];
};


export type QueryMentionOverviewArgs = {
  input: MentionOverviewInput;
};


export type QueryMyEventTicketsArgs = {
  eventId: Scalars['String']['input'];
};


export type QueryMyEventsArgs = {
  orderBy?: InputMaybe<MyEventsOrderByInput>;
  where?: InputMaybe<MyEventsWhereInput>;
};


export type QueryMyMembershipAddonsArgs = {
  membershipId: Scalars['String']['input'];
};


export type QueryMyOrdersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderOrderByInput>;
  where?: InputMaybe<OrderWhereInput>;
};


export type QueryMyScannedTicketsArgs = {
  eventId: Scalars['String']['input'];
};


export type QueryMyScannedTicketsCountArgs = {
  eventId: Scalars['String']['input'];
};


export type QueryOrderArgs = {
  id: Scalars['String']['input'];
};


export type QueryOrderIdsOnlineArgs = {
  id: Scalars['String']['input'];
};


export type QueryOrderRefundDetailsArgs = {
  eventId: Scalars['String']['input'];
  orderId: Scalars['String']['input'];
};


export type QueryOrdersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderOrderByInput>;
  where?: InputMaybe<OrderWhereInput>;
};


export type QueryOrdersUpdatedSinceArgs = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  eventId?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryOrdersUpdatedSinceForEventArgs = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  eventId?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryOrganizationArgs = {
  id: Scalars['String']['input'];
};


export type QueryOrganizationNamesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrganizationOrderByInput>;
  where?: InputMaybe<OrganizationWhereInput>;
};


export type QueryOrganizationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrganizationOrderByInput>;
  where?: InputMaybe<OrganizationWhereInput>;
};


export type QueryPackageInformationArgs = {
  packageId: Scalars['String']['input'];
};


export type QueryPayRemainingOrderPlanArgs = {
  orderPlanId: Scalars['String']['input'];
};


export type QueryPeFinancialGatewaysArgs = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  eventId: Scalars['String']['input'];
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryPeOnsaleCompetitionReportStatsArgs = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  eventId: Scalars['String']['input'];
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryPeReferralPromotionReportStatsArgs = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  eventId: Scalars['String']['input'];
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryPeReportAudienceArgs = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  eventId: Scalars['String']['input'];
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryPeReportOverviewArgs = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  eventId: Scalars['String']['input'];
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryPeSalesChannelGraphArgs = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  eventId: Scalars['String']['input'];
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryPinPaymentContextArgs = {
  id: Scalars['String']['input'];
};


export type QueryPointItemArgs = {
  id: Scalars['String']['input'];
};


export type QueryPollOrderArgs = {
  id: Scalars['String']['input'];
};


export type QueryPosArgs = {
  id: Scalars['String']['input'];
};


export type QueryPosFinancialOverviewArgs = {
  eventId: Scalars['String']['input'];
  posId?: InputMaybe<Scalars['String']['input']>;
  sessionId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPosFloatOfChangeArgs = {
  eventId: Scalars['String']['input'];
  posId?: InputMaybe<Scalars['String']['input']>;
  sessionId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPosSalesOverviewArgs = {
  eventId: Scalars['String']['input'];
  posId?: InputMaybe<Scalars['String']['input']>;
  sessionId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPosSessionsArgs = {
  posId: Scalars['String']['input'];
};


export type QueryPosTerminalLatestTransactionStatusArgs = {
  posId: Scalars['String']['input'];
};


export type QueryPosUsersArgs = {
  eventId: Scalars['String']['input'];
};


export type QueryPosesArgs = {
  eventId: Scalars['String']['input'];
};


export type QueryPreviousMembershipCountArgs = {
  id: Scalars['String']['input'];
};


export type QueryPurchasingDaysBreakdownArgs = {
  channel?: InputMaybe<OrderChannel>;
  endDate: Scalars['DateTime']['input'];
  release?: InputMaybe<Scalars['String']['input']>;
  scoutCommunicationId?: InputMaybe<Scalars['String']['input']>;
  seasonId?: InputMaybe<Scalars['String']['input']>;
  source: ReportingFilterSource;
  sourceId?: InputMaybe<Scalars['String']['input']>;
  startDate: Scalars['DateTime']['input'];
  tagId?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type QueryReferralPromotionReportStatsArgs = {
  input: ReferralPromotionReportingInput;
};


export type QueryReferralUrlByOrderIdArgs = {
  orderId: Scalars['String']['input'];
};


export type QueryReferralUrlByWaitlistUserIdArgs = {
  eventId: Scalars['String']['input'];
  waitlistUserId: Scalars['String']['input'];
};


export type QueryRegistrationCompetitionOverviewArgs = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  eventId: Scalars['String']['input'];
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryRegistrationOverviewArgs = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  eventId: Scalars['String']['input'];
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryReleaseArgs = {
  id: Scalars['String']['input'];
};


export type QueryReleasesArgs = {
  event: Scalars['String']['input'];
};


export type QueryReportSchedulesArgs = {
  input: GetReportSchedulesInput;
};


export type QueryReportingLayoutArgs = {
  input?: InputMaybe<ReportingLayoutInput>;
};


export type QueryReportingOverviewArgs = {
  channel?: InputMaybe<OrderChannel>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  posId?: InputMaybe<Scalars['String']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  seasonId?: InputMaybe<Scalars['String']['input']>;
  sessionId?: InputMaybe<Scalars['String']['input']>;
  source: PointReportingFilterSource;
  sourceId?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryResaleTicketArgs = {
  id: Scalars['String']['input'];
};


export type QueryResaleTicketTypesForWaitlistArgs = {
  eventId: Scalars['String']['input'];
  releaseId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryResaleTicketsArgs = {
  eventId: Scalars['String']['input'];
};


export type QueryResaleTicketsMetricsArgs = {
  eventId: Scalars['String']['input'];
};


export type QueryResaleWaitlistCountArgs = {
  eventId: Scalars['String']['input'];
};


export type QueryResaleWaitlistOverviewArgs = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  eventId: Scalars['String']['input'];
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryResendExhibitorLoginEmailArgs = {
  input: FindExhibitorInput;
};


export type QuerySalesChannelGraphArgs = {
  channel?: InputMaybe<OrderChannel>;
  endDate: Scalars['DateTime']['input'];
  release?: InputMaybe<Scalars['String']['input']>;
  scoutCommunicationId?: InputMaybe<Scalars['String']['input']>;
  seasonId?: InputMaybe<Scalars['String']['input']>;
  source: PointReportingFilterSource;
  sourceId?: InputMaybe<Scalars['String']['input']>;
  startDate: Scalars['DateTime']['input'];
  tagId?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type QuerySalesGraphArgs = {
  channel?: InputMaybe<OrderChannel>;
  endDate: Scalars['DateTime']['input'];
  release?: InputMaybe<Scalars['String']['input']>;
  scoutCommunicationId?: InputMaybe<Scalars['String']['input']>;
  seasonId?: InputMaybe<Scalars['String']['input']>;
  source: PointReportingFilterSource;
  sourceId?: InputMaybe<Scalars['String']['input']>;
  startDate: Scalars['DateTime']['input'];
  tagId?: InputMaybe<Array<Scalars['String']['input']>>;
  type?: InputMaybe<GraphFilterType>;
};


export type QuerySalesOverviewArgs = {
  channel?: InputMaybe<OrderChannel>;
  endDate: Scalars['DateTime']['input'];
  release?: InputMaybe<Scalars['String']['input']>;
  scoutCommunicationId?: InputMaybe<Scalars['String']['input']>;
  seasonId?: InputMaybe<Scalars['String']['input']>;
  source: PointReportingFilterSource;
  sourceId?: InputMaybe<Scalars['String']['input']>;
  startDate: Scalars['DateTime']['input'];
  tagId?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type QuerySalesReportArgs = {
  channel?: InputMaybe<OrderChannel>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  release?: InputMaybe<Scalars['String']['input']>;
  seasonId?: InputMaybe<Scalars['String']['input']>;
  source: ReportingFinancialSalesBreakdownSource;
  sourceId?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryScanTicketTypesArgs = {
  eventId: Scalars['String']['input'];
};


export type QueryScanUsherTicketTypesArgs = {
  eventId: Scalars['String']['input'];
};


export type QueryScanVisitorsArgs = {
  eventId: Scalars['String']['input'];
};


export type QueryScanVisitorsOverTimeArgs = {
  eventId: Scalars['String']['input'];
};


export type QueryScoutArgs = {
  id: Scalars['String']['input'];
};


export type QueryScoutCampaignCustomerLocationsArgs = {
  channel?: InputMaybe<OrderChannel>;
  endDate: Scalars['DateTime']['input'];
  release?: InputMaybe<Scalars['String']['input']>;
  scoutCommunicationId?: InputMaybe<Scalars['String']['input']>;
  seasonId?: InputMaybe<Scalars['String']['input']>;
  source: ReportingFilterSource;
  sourceId?: InputMaybe<Scalars['String']['input']>;
  startDate: Scalars['DateTime']['input'];
  tagId?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type QueryScoutCampaignGenderBreakdownArgs = {
  channel?: InputMaybe<OrderChannel>;
  endDate: Scalars['DateTime']['input'];
  release?: InputMaybe<Scalars['String']['input']>;
  scoutCommunicationId?: InputMaybe<Scalars['String']['input']>;
  seasonId?: InputMaybe<Scalars['String']['input']>;
  source: ReportingFilterSource;
  sourceId?: InputMaybe<Scalars['String']['input']>;
  startDate: Scalars['DateTime']['input'];
  tagId?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type QueryScoutCampaignHighestValueCustomersArgs = {
  channel?: InputMaybe<OrderChannel>;
  endDate: Scalars['DateTime']['input'];
  release?: InputMaybe<Scalars['String']['input']>;
  scoutCommunicationId?: InputMaybe<Scalars['String']['input']>;
  seasonId?: InputMaybe<Scalars['String']['input']>;
  source: ReportingFilterSource;
  sourceId?: InputMaybe<Scalars['String']['input']>;
  startDate: Scalars['DateTime']['input'];
  tagId?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type QueryScoutCampaignOverviewArgs = {
  channel?: InputMaybe<OrderChannel>;
  endDate: Scalars['DateTime']['input'];
  release?: InputMaybe<Scalars['String']['input']>;
  scoutCommunicationId?: InputMaybe<Scalars['String']['input']>;
  seasonId?: InputMaybe<Scalars['String']['input']>;
  source: ReportingFilterSource;
  sourceId?: InputMaybe<Scalars['String']['input']>;
  startDate: Scalars['DateTime']['input'];
  tagId?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type QueryScoutCampaignTopTagsArgs = {
  channel?: InputMaybe<OrderChannel>;
  endDate: Scalars['DateTime']['input'];
  release?: InputMaybe<Scalars['String']['input']>;
  scoutCommunicationId?: InputMaybe<Scalars['String']['input']>;
  seasonId?: InputMaybe<Scalars['String']['input']>;
  source: ReportingFilterSource;
  sourceId?: InputMaybe<Scalars['String']['input']>;
  startDate: Scalars['DateTime']['input'];
  tagId?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type QueryScoutCommunicationArgs = {
  id: Scalars['String']['input'];
};


export type QueryScoutCommunicationUserArgs = {
  id: Scalars['String']['input'];
};


export type QueryScoutCommunicationUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  agentUserId?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  hasPhoneNumber?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  last?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Array<ScoutStage>>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryScoutCommunicationsArgs = {
  input: ScoutCommunicationsInput;
};


export type QueryScoutUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  agentUserId?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  hasPhoneNumber?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  last?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Array<ScoutStage>>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryScoutsArgs = {
  input?: InputMaybe<FindScoutsInput>;
};


export type QuerySearchArtistsArgs = {
  input: SearchArtistInput;
};


export type QuerySearchShopifyProductsArgs = {
  search: Scalars['String']['input'];
};


export type QuerySearchTicketsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  eventId: Scalars['String']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TicketWhereInput>;
  where?: InputMaybe<TicketWhereInput>;
};


export type QuerySearchTicketsByEventAppArgs = {
  eventId: Scalars['String']['input'];
  q?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySeasonArgs = {
  id: Scalars['String']['input'];
};


export type QuerySeasonInformationArgs = {
  seasonId: Scalars['String']['input'];
};


export type QuerySeoMetadataArgs = {
  eventId?: InputMaybe<Scalars['String']['input']>;
  membershipId?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySignupFormArgs = {
  id: Scalars['String']['input'];
};


export type QuerySmsBroadcastArgs = {
  broadcastId: Scalars['String']['input'];
};


export type QuerySmsBroadcastAudienceArgs = {
  input: SmsBroadcastFilterCountInput;
};


export type QuerySmsBroadcastDeliveryErrorsArgs = {
  smsBroadcastId: Scalars['String']['input'];
};


export type QuerySmsBroadcastUnsubscribesArgs = {
  smsBroadcastId: Scalars['String']['input'];
};


export type QuerySocialMentionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SocialWhereInput>;
};


export type QueryStripeConnectUrlArgs = {
  id: Scalars['String']['input'];
};


export type QueryStripePaymentContextArgs = {
  id: Scalars['String']['input'];
};


export type QuerySummaryOverviewArgs = {
  channel?: InputMaybe<OrderChannel>;
  endDate: Scalars['DateTime']['input'];
  release?: InputMaybe<Scalars['String']['input']>;
  scoutCommunicationId?: InputMaybe<Scalars['String']['input']>;
  seasonId?: InputMaybe<Scalars['String']['input']>;
  source: ReportingFilterSource;
  sourceId?: InputMaybe<Scalars['String']['input']>;
  startDate: Scalars['DateTime']['input'];
  tagId?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type QueryTicketArgs = {
  id: Scalars['String']['input'];
};


export type QueryTicketDetailsForBackOfficeOrdersArgs = {
  eventId?: InputMaybe<Scalars['String']['input']>;
  membershipId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTicketTypesArgs = {
  eventId: Scalars['String']['input'];
};


export type QueryTicketTypesByIdArgs = {
  input: TicketTypesByIdInput;
};


export type QueryTicketsSoldForUserArgs = {
  eventId: Scalars['String']['input'];
};


export type QueryTimeOfDayBreakdownArgs = {
  channel?: InputMaybe<OrderChannel>;
  endDate: Scalars['DateTime']['input'];
  release?: InputMaybe<Scalars['String']['input']>;
  scoutCommunicationId?: InputMaybe<Scalars['String']['input']>;
  seasonId?: InputMaybe<Scalars['String']['input']>;
  source: ReportingFilterSource;
  sourceId?: InputMaybe<Scalars['String']['input']>;
  startDate: Scalars['DateTime']['input'];
  tagId?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type QueryTopReferrersArgs = {
  channel?: InputMaybe<OrderChannel>;
  endDate: Scalars['DateTime']['input'];
  release?: InputMaybe<Scalars['String']['input']>;
  scoutCommunicationId?: InputMaybe<Scalars['String']['input']>;
  seasonId?: InputMaybe<Scalars['String']['input']>;
  source: ReportingFilterSource;
  sourceId?: InputMaybe<Scalars['String']['input']>;
  startDate: Scalars['DateTime']['input'];
  tagId?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type QueryTopRepeatPurchasersArgs = {
  channel?: InputMaybe<OrderChannel>;
  endDate: Scalars['DateTime']['input'];
  release?: InputMaybe<Scalars['String']['input']>;
  scoutCommunicationId?: InputMaybe<Scalars['String']['input']>;
  seasonId?: InputMaybe<Scalars['String']['input']>;
  source: ReportingFilterSource;
  sourceId?: InputMaybe<Scalars['String']['input']>;
  startDate: Scalars['DateTime']['input'];
  tagId?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type QueryTopTagsArgs = {
  channel?: InputMaybe<OrderChannel>;
  endDate: Scalars['DateTime']['input'];
  release?: InputMaybe<Scalars['String']['input']>;
  scoutCommunicationId?: InputMaybe<Scalars['String']['input']>;
  seasonId?: InputMaybe<Scalars['String']['input']>;
  source: ReportingFilterSource;
  sourceId?: InputMaybe<Scalars['String']['input']>;
  startDate: Scalars['DateTime']['input'];
  tagId?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type QueryTransferredMembershipTicketsForOrderArgs = {
  orderId: Scalars['String']['input'];
};


export type QueryUserArgs = {
  id: Scalars['String']['input'];
};


export type QueryUserEntriesArgs = {
  input: GetUserEntriesInput;
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UserOrderByInput>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryUsersUpdatedBetweenArgs = {
  input: UsersUpdatedBetweenInput;
};


export type QueryValidateAccessCodeForMembershipArgs = {
  input: ValidateAccessCodeForMembershipInput;
};


export type QueryVenueArgs = {
  id: Scalars['String']['input'];
};


export type QueryVenueSeatsThumbnailArgs = {
  id: Scalars['String']['input'];
};


export type QueryWaitlistOverviewArgs = {
  channel?: InputMaybe<OrderChannel>;
  endDate: Scalars['DateTime']['input'];
  release?: InputMaybe<Scalars['String']['input']>;
  scoutCommunicationId?: InputMaybe<Scalars['String']['input']>;
  seasonId?: InputMaybe<Scalars['String']['input']>;
  source: ReportingFilterSource;
  sourceId?: InputMaybe<Scalars['String']['input']>;
  startDate: Scalars['DateTime']['input'];
  tagId?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type QueryWindcavePaymentContextArgs = {
  id: Scalars['String']['input'];
};


export type QueryWindcavePaymentResultArgs = {
  externalId: Scalars['String']['input'];
  result: Scalars['String']['input'];
};

export type RedeemTicketInput = {
  /** Event ID */
  eventId: Scalars['String']['input'];
  /** Ticket number */
  ticketNumber: Scalars['String']['input'];
  timestamp: Scalars['DateTime']['input'];
};

export type RedirectCodeInput = {
  /** Full URL path. */
  redirectCode: Scalars['String']['input'];
};

/** Mapping of a shortened URL to its full path */
export type RedirectUrl = {
  __typename?: 'RedirectUrl';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  /** Full URL path. */
  redirectURL: Scalars['String']['output'];
  /** Reference entity ID. */
  refId: Scalars['String']['output'];
  /** Type of entity this redirect is for. */
  refName: Scalars['String']['output'];
  /** Shortned URL slug. */
  shortenedSlug: Scalars['String']['output'];
  /** Number of times the shortened URL has redirected to the full path. */
  timesUsed: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

/** Referral Campaign */
export type ReferralCampaign = {
  __typename?: 'ReferralCampaign';
  createdAt: Scalars['DateTime']['output'];
  /** The eventId that the referral campaign is associated with */
  event?: Maybe<Event>;
  id: Scalars['ID']['output'];
  /** Whether the referral campaign is active */
  isActive: Scalars['Boolean']['output'];
  /** The memebrshipId that the referral campaign is associated with */
  membership?: Maybe<Membership>;
  /** The quantity of the reward for the owner of the referral */
  referralOwnerRewardQuantity: Scalars['Float']['output'];
  /** The reward quantity type. */
  referralOwnerRewardQuantityType: ReferralRewardQuantityType;
  /** The type of reward for the owner of the referral */
  referralOwnerRewardType: ReferralRewardType;
  /** The unique identifier for the referral campaign */
  referralRelease?: Maybe<Release>;
  /** The quantity of the reward for the user of the referral */
  referralUserRewardQuantity: Scalars['Float']['output'];
  /** The reward quantity type. */
  referralUserRewardQuantityType: ReferralRewardQuantityType;
  /** The type of reward for the user of the referral */
  referralUserRewardType: ReferralRewardType;
  updatedAt: Scalars['DateTime']['output'];
};

export type ReferralCampaignOverviewOutput = {
  __typename?: 'ReferralCampaignOverviewOutput';
  customersAccquired: Scalars['Float']['output'];
  numberOfOrders: Scalars['Float']['output'];
  ownerRewards: Scalars['Float']['output'];
  referralLinksClicked: Scalars['Float']['output'];
  referralLinksCreated: Scalars['Float']['output'];
  revenueGenerated: Scalars['Float']['output'];
  tickets: Scalars['Float']['output'];
  userRewards: Scalars['Float']['output'];
};

/** A referral code for a user and event */
export type ReferralCode = {
  __typename?: 'ReferralCode';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ReferralCustomerReporting = {
  __typename?: 'ReferralCustomerReporting';
  eventLogo?: Maybe<ExtendedFile>;
  eventName: Scalars['String']['output'];
  orderDate: Scalars['DateTime']['output'];
  orderNumber: Scalars['String']['output'];
  referralLink?: Maybe<Scalars['String']['output']>;
  referralsMade: Scalars['Int']['output'];
};

export type ReferralPromotionReportingInput = {
  eventId: Scalars['String']['input'];
};

export type ReferralPromotionReportingOutput = {
  __typename?: 'ReferralPromotionReportingOutput';
  actionEngagement?: Maybe<Array<ActionEngagementRecordOutput>>;
  discountValue: Scalars['Float']['output'];
  newReferredCustomers: Scalars['Float']['output'];
  orders: Scalars['Float']['output'];
  referrerPointsAwarded: Scalars['Float']['output'];
  revenue: Scalars['Float']['output'];
  roi: Scalars['Float']['output'];
};

export type ReferralRegistrationPromotionReportingOutput = {
  __typename?: 'ReferralRegistrationPromotionReportingOutput';
  actionEngagement?: Maybe<Array<ActionEngagementRecordOutput>>;
  newReferredCustomers: Scalars['Float']['output'];
  registrations: Scalars['Float']['output'];
};

/** Referral Reward */
export type ReferralReward = {
  __typename?: 'ReferralReward';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  order: Order;
  /** Organization associated with the referral campaign */
  organization: Organization;
  /** The referral campaign the rewards are from */
  referralCampaign: ReferralCampaign;
  /** The role of the user played when receiving these rewards */
  rewardForRole: ReferralRole;
  /** The quantity of the reward for the owner of the referral */
  rewardQuantity: Scalars['Float']['output'];
  /** The reward quantity type. */
  rewardQuantityType: ReferralRewardQuantityType;
  /** The type of reward for the referral */
  rewardType: ReferralRewardType;
  updatedAt: Scalars['DateTime']['output'];
};

/** The valid values for quantities of referral rewards. */
export enum ReferralRewardQuantityType {
  FlatRate = 'flatRate',
  Percentage = 'percentage'
}

/** The valid values for referral rewards. Some are only applicable to certain roles in a referral transaction. */
export enum ReferralRewardType {
  Credits = 'Credits',
  Discount = 'Discount',
  Points = 'Points'
}

/** The role the user played when in a referral exchange. */
export enum ReferralRole {
  Owner = 'Owner',
  User = 'User'
}

/** Represents a refund of items in an order. */
export type Refund = {
  __typename?: 'Refund';
  /** The amount of the refund. */
  amount: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  gateway?: Maybe<RefundGateway>;
  id: Scalars['ID']['output'];
  /** Whether the refund is a manual one. */
  isManual: Scalars['Boolean']['output'];
  kind: RefundKind;
  /** Notes why the refund has been initiated. */
  notes: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

/** Refund gateways. */
export enum RefundGateway {
  Cash = 'Cash',
  CreditCard = 'CreditCard',
  Eftpos = 'Eftpos',
  Invoice = 'Invoice',
  Other = 'Other'
}

/** Refund kinds. */
export enum RefundKind {
  Default = 'Default',
  TicketTransfer = 'TicketTransfer'
}

/** Amount remaining that can be automatically refunded through the payment gateway */
export type RefundableState = {
  __typename?: 'RefundableState';
  /** The amount that can be automatically refunded */
  gatewayRefundableAmount?: Maybe<GatewayRefundableAmount>;
  refundState: OrderRefundState;
  totalRefundableAmount: Scalars['Float']['output'];
};

export type RegisterInput = {
  email: Scalars['String']['input'];
  enableTwoFactorAuthentication: Scalars['Boolean']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  posId?: InputMaybe<Scalars['String']['input']>;
  userAcquisition?: InputMaybe<UserAcquisition>;
};

/** Represents a release in an event. */
export type Release = {
  __typename?: 'Release';
  allowAccount2Account?: Maybe<Scalars['Boolean']['output']>;
  /** Toggle whether customers can create hold orders for this release */
  allowHoldOrders: Scalars['Boolean']['output'];
  allowPublicComp: Scalars['Boolean']['output'];
  /** Toggle whether to ask for dietary requirements with their order */
  askForDietaryRequirements?: Maybe<Scalars['Boolean']['output']>;
  /** Toggle whether to ask customers how they heard about their purcahse */
  askHowDidYouHearAboutUs?: Maybe<Scalars['Boolean']['output']>;
  canBeHardDeleted: Scalars['Boolean']['output'];
  channels: Array<EventChannelOutput>;
  createdAt: Scalars['DateTime']['output'];
  /** The end condition of the release. */
  endCondition: ReleaseEndCondition;
  /** The end date of the release. Returs null if the endCondition is set to other than "date". */
  endConditionDate?: Maybe<Scalars['DateTime']['output']>;
  /** The quantity limit of the release. Returns null if the endCondition is set to other than "quantity". */
  endConditionQuantity?: Maybe<Scalars['Float']['output']>;
  event: Event;
  id: Scalars['ID']['output'];
  /** The status of the release. */
  isActive: Scalars['Boolean']['output'];
  isEnabled: Scalars['Boolean']['output'];
  isResaleRelease: Scalars['Boolean']['output'];
  maxPurchaseQuantity: Scalars['Int']['output'];
  minPurchaseQuantity: Scalars['Int']['output'];
  /** Release name. */
  name: Scalars['String']['output'];
  password?: Maybe<Scalars['String']['output']>;
  /** The header image of the unlisted release. Returns null if the `type` is set to other than `unlisted`. */
  presaleHeader?: Maybe<ExtendedFile>;
  /** The information of the unlisted release. Returns null if the `type` is set to other than `unlisted`. */
  presaleInformation?: Maybe<Scalars['String']['output']>;
  /** The logo of the unlisted release. Returns null if the `type` is set to other than `unlisted`. */
  presaleLogo?: Maybe<ExtendedFile>;
  /** The title of the unlisted release. Returns null if the `type` is set to other than `unlisted`. */
  presaleTitle?: Maybe<Scalars['String']['output']>;
  releaseEventAddons: Array<ReleaseEventAddon>;
  /** The information that will be displayed on the ticketing page for a specific release. */
  releaseNotes?: Maybe<Scalars['String']['output']>;
  releaseZones: Array<ReleaseZone>;
  requiresAuth: Scalars['Boolean']['output'];
  /** The slug for the unlisted release. Returns null if the release type is set to other than `unlisted`. */
  slug?: Maybe<Scalars['String']['output']>;
  /** The start condition of the release. */
  startCondition: ReleaseStartCondition;
  /** The start date of the release. Returns null if the startCondition is set to other than "date". */
  startConditionDate?: Maybe<Scalars['DateTime']['output']>;
  status: ReleaseStatus;
  /** Release type. */
  type: ReleaseType;
  updatedAt: Scalars['DateTime']['output'];
};

export enum ReleaseEndCondition {
  Date = 'DATE',
  Manual = 'MANUAL',
  Quantity = 'QUANTITY'
}

export type ReleaseEventAddon = {
  __typename?: 'ReleaseEventAddon';
  createdAt: Scalars['DateTime']['output'];
  eventAddon: EventAddon;
  eventAddonId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  releaseId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

/** Represents a unique password code in a release. */
export type ReleasePassword = {
  __typename?: 'ReleasePassword';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  /** The usage limit of the release password for complimentary tickets. */
  quantityComp: Scalars['Int']['output'];
  /** The usage limit of the release password. Returns null if password has no usage limit. */
  quantityPaid: Scalars['Int']['output'];
  totalUsedComp: Scalars['Int']['output'];
  totalUsedPaid: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ReleasePosPaymentOptions = {
  __typename?: 'ReleasePosPaymentOptions';
  /** Booking fee. */
  bookingFee: Scalars['Float']['output'];
  /** Booking fee type. */
  bookingFeeType: FeeType;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  organizationId: Scalars['String']['output'];
  paymentOptions: PosPaymentOptions;
  releaseId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

/** Creates a refund. */
export type ReleaseSeatsInput = {
  /** Notes why the seats are released. */
  notes: Scalars['String']['input'];
  /** Order id for which the seats will be released. */
  orderId: Scalars['String']['input'];
  /** Tickets to realease (will also release child tickets). */
  ticketIds: Array<Scalars['String']['input']>;
};

export enum ReleaseStartCondition {
  Date = 'DATE',
  Manual = 'MANUAL'
}

export type ReleaseStatus = {
  __typename?: 'ReleaseStatus';
  message?: Maybe<Scalars['String']['output']>;
  value: ReleaseStatusValue;
};

export enum ReleaseStatusValue {
  ReleaseHasEndedDueToDate = 'RELEASE_HAS_ENDED_DUE_TO_DATE',
  ReleaseIsPrivate = 'RELEASE_IS_PRIVATE',
  ReleaseIsPrivateWithFutureStartDate = 'RELEASE_IS_PRIVATE_WITH_FUTURE_START_DATE',
  ReleaseIsPublic = 'RELEASE_IS_PUBLIC'
}

export enum ReleaseType {
  Listed = 'LISTED',
  Outlet = 'OUTLET',
  Pos = 'POS',
  Presale = 'PRESALE',
  Referral = 'REFERRAL',
  Resale = 'RESALE',
  Unlisted = 'UNLISTED'
}

export type ReleaseZone = {
  __typename?: 'ReleaseZone';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  /** The active status of the zone. Defaults to `false`. */
  isActive: Scalars['Boolean']['output'];
  isSoldOut: Scalars['Boolean']['output'];
  /** The pricing level of the zone. Will be set to `zone` for non-seated events. */
  pricingLevel: ZonePricingLevel;
  /** The list of ticket types of the release zone. */
  ticketTypes: Array<ReleaseZoneTicketType>;
  updatedAt: Scalars['DateTime']['output'];
  zone: Zone;
};

export type ReleaseZoneInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  /** The active status of the zone seating. Defaults to `false`. */
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** The pricing level of the release zone. Will be set to `zone` for non-seated events. */
  pricingLevel: ZonePricingLevel;
  /** The list of ticket types of the release zone. */
  ticketTypes: Array<ReleaseZoneTicketTypeInput>;
  zone: ReleaseZoneZoneInput;
};

/** Represents a ticket type in a release zone. */
export type ReleaseZoneTicketType = {
  __typename?: 'ReleaseZoneTicketType';
  /** The active status of the zone ticket. Defaults to `false`. */
  isActive: Scalars['Boolean']['output'];
  isSoldOut: Scalars['Boolean']['output'];
  maxPurchaseQuantity: Scalars['Int']['output'];
  minPurchaseQuantity: Scalars['Int']['output'];
  /** The price of the zone ticket. Returns null if `pricingLevel` of the parent is set to other than `zone`. */
  price?: Maybe<Scalars['Float']['output']>;
  purchaseRestrictions: Array<PurchaseRestriction>;
  purchaseRestrictionsHelpText?: Maybe<Array<Scalars['String']['output']>>;
  /** The sections of the zone ticket. Returns null if `pricingLevel` of the parent is set to other than `section`. */
  sections?: Maybe<Array<ZonePricingTypeSection>>;
  ticketAvailabilityStatus: TicketAvailabilityStatus;
  /** The ticket type id of the zone ticket. */
  ticketTypeId?: Maybe<Scalars['String']['output']>;
};

export type ReleaseZoneTicketTypeInput = {
  /** The active status of the zone ticket type. Defaults to `false`. */
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** The price of the zone ticket. Pass null if `ReleaseZoneInput.pricingLevel` is set to other than `zone`. */
  price?: InputMaybe<Scalars['Float']['input']>;
  /** The sections of the zone ticket. Pass null if `ReleaseZoneInput.pricingLevel` is set to other than `section`. */
  sections?: InputMaybe<Array<ReleaseZoneTicketTypeSectionInput>>;
  /** The ticket type id of the zone ticket. */
  ticketTypeId: Scalars['String']['input'];
};

export type ReleaseZoneTicketTypeSectionInput = {
  /** The section name. Should be equal to one of the sections defined in the event venue. */
  name: Scalars['String']['input'];
  /** The price of the section ticket. */
  price?: InputMaybe<Scalars['Float']['input']>;
  /** The section id. Should be equal to one of the sections defined in the event venue. */
  sectionId: Scalars['String']['input'];
};

/** The zone belonging to a release zone */
export type ReleaseZoneZoneInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type ReorderTicketTypeInput = {
  releaseZoneId: Scalars['String']['input'];
  ticketTypeIds: Array<Scalars['String']['input']>;
};

export type ReorderZoneInput = {
  venueId: Scalars['String']['input'];
  zoneIds: Array<Scalars['String']['input']>;
};

export type ReportSchedule = {
  __typename?: 'ReportSchedule';
  createdAt: Scalars['DateTime']['output'];
  /** This should exist when type is event */
  eventId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isPaused: Scalars['Boolean']['output'];
  /** This should exist when type is membership */
  membershipId?: Maybe<Scalars['String']['output']>;
  recipientList: Array<Scalars['String']['output']>;
  scheduleDateInfo: ReportScheduleDateInfoOutput;
  scheduleName: Scalars['String']['output'];
  scheduleOptions: ReportScheduleOptions;
  type: ReportScheduleType;
  updatedAt: Scalars['DateTime']['output'];
};

/** Report schedule date information provided in the organizations timezone ready for presentation. */
export type ReportScheduleDateInfoOutput = {
  __typename?: 'ReportScheduleDateInfoOutput';
  firstSendDate?: Maybe<Scalars['String']['output']>;
  mostRecentSendDate?: Maybe<Scalars['String']['output']>;
  nextSendDate?: Maybe<Scalars['String']['output']>;
};

export enum ReportScheduleFrequency {
  Daily = 'Daily',
  Monthly = 'Monthly',
  Weekly = 'Weekly'
}

export type ReportScheduleInput = {
  eventId?: InputMaybe<Scalars['String']['input']>;
  isPaused: Scalars['Boolean']['input'];
  membershipId?: InputMaybe<Scalars['String']['input']>;
  recipientList: Array<Scalars['String']['input']>;
  scheduleName: Scalars['String']['input'];
  scheduleOptions: ReportScheduleOptionsInput;
  type: ReportScheduleType;
};

export type ReportScheduleOptions = {
  __typename?: 'ReportScheduleOptions';
  endDate: Scalars['String']['output'];
  frequency: ReportScheduleFrequency;
  sendDay?: Maybe<Scalars['String']['output']>;
  /** The time of day as a 24h string in the format HH:MM */
  sendTime: Scalars['String']['output'];
  startDate: Scalars['String']['output'];
};

export type ReportScheduleOptionsInput = {
  endDate: Scalars['String']['input'];
  frequency: ReportScheduleFrequency;
  sendDay?: InputMaybe<Scalars['String']['input']>;
  /** The time of day as a 24h string in the format HH:MM */
  sendTime: Scalars['String']['input'];
  startDate: Scalars['String']['input'];
};

/** The type of automated sales report */
export enum ReportScheduleType {
  Event = 'Event',
  Membership = 'Membership'
}

export enum ReportType {
  GoogleAnalytics = 'GOOGLE_ANALYTICS',
  Internal = 'INTERNAL'
}

export enum ReportingFilterSource {
  Event = 'EVENT',
  Membership = 'MEMBERSHIP',
  Overall = 'OVERALL'
}

export enum ReportingFinancialSalesBreakdownSource {
  Event = 'EVENT',
  Membership = 'MEMBERSHIP'
}

export type ReportingLayoutInput = {
  allEvents?: InputMaybe<Scalars['Boolean']['input']>;
  allMemberships?: InputMaybe<Scalars['Boolean']['input']>;
  allPackages?: InputMaybe<Scalars['Boolean']['input']>;
  allSeasons?: InputMaybe<Scalars['Boolean']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  eventId?: InputMaybe<Scalars['String']['input']>;
  isOverall?: InputMaybe<Scalars['Boolean']['input']>;
  membershipId?: InputMaybe<Scalars['String']['input']>;
  packageId?: InputMaybe<Scalars['String']['input']>;
  seasonId?: InputMaybe<Scalars['String']['input']>;
  seasonSource?: InputMaybe<ReportingFinancialSalesBreakdownSource>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ReportingLayoutOutput = EventLayoutOutput | MembershipLayoutOutput | OverallLayoutOutput | PackageLayoutOutput | SeasonLayoutOutput;

export type ReportingOverviewOutput = {
  __typename?: 'ReportingOverviewOutput';
  audience: Array<PeReportStatistic>;
  financial: Array<PeReportStatistic>;
  ticketSales: Array<PeReportStatistic>;
};

export type ReportingSearchIndexOutput = {
  __typename?: 'ReportingSearchIndexOutput';
  searchableEvents: Array<SearchEvent>;
  searchableMemberships: Array<SearchMembership>;
  searchablePackages: Array<SearchPackage>;
  searchableSeasons: Array<SearchSeason>;
};


export type ReportingSearchIndexOutputSearchableEventsArgs = {
  filter?: InputMaybe<SearchEventFilter>;
};

export type RequestMagicLinkInput = {
  email: Scalars['String']['input'];
  entry?: InputMaybe<Scalars['String']['input']>;
  redirectUrl?: InputMaybe<Scalars['String']['input']>;
};

export type RequestResetPasswordInput = {
  email: Scalars['String']['input'];
};

export type RequestTicketTransferInput = {
  email: Scalars['String']['input'];
  ticketId: Scalars['String']['input'];
  /**
   * The price set by the seller for the ticket transfer. Must be between the seller transfer fee
   *     and the original line item price. If not supplied, the original line item price is used.
   */
  ticketSalePrice?: InputMaybe<Scalars['Float']['input']>;
};

export type ResaleTicketMetrics = {
  __typename?: 'ResaleTicketMetrics';
  /** The mean and median prices that customers have said they would pay. Will be null if no data is present. */
  fansWouldPay?: Maybe<FansWouldPay>;
  numCurrentlyOnSale: Scalars['Float']['output'];
  numInterestedFans: Scalars['Float']['output'];
  numSold: Scalars['Float']['output'];
  soldRevenue: Scalars['Float']['output'];
  ticketTypeId: Scalars['String']['output'];
};

export type ResaleWaitlistCount = {
  __typename?: 'ResaleWaitlistCount';
  numWaitlisted: Scalars['Float']['output'];
};

/** input for the resale waitlist */
export type ResaleWaitlistInput = {
  customFields?: InputMaybe<Array<CustomFieldInput>>;
  email: Scalars['String']['input'];
  eventId: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  referralCode?: InputMaybe<Scalars['String']['input']>;
  /** The resale ticket types */
  resaleTicketTypes?: InputMaybe<Array<ResaleWaitlistInputTicketTypes>>;
  usableForMarketing: Scalars['Boolean']['input'];
  userAcquisition?: InputMaybe<UserAcquisition>;
};

export type ResaleWaitlistInputTicketTypes = {
  id: Scalars['String']['input'];
  price?: InputMaybe<Scalars['Float']['input']>;
  quantity?: InputMaybe<Scalars['Float']['input']>;
};

export type ResaleWaitlistOutput = {
  __typename?: 'ResaleWaitlistOutput';
  e164Number?: Maybe<Scalars['String']['output']>;
  user: User;
};

export type ResendExhibitorLoginEmailMultipleFound = {
  __typename?: 'ResendExhibitorLoginEmailMultipleFound';
  events: Array<ExpoEventForLogin>;
  multipleFound: Scalars['Boolean']['output'];
};

export type ResendExhibitorLoginEmailNotFound = {
  __typename?: 'ResendExhibitorLoginEmailNotFound';
  notFound: Scalars['Boolean']['output'];
};

export type ResendExhibitorLoginEmailOutputUnion = ResendExhibitorLoginEmailMultipleFound | ResendExhibitorLoginEmailNotFound | ResendExhibitorLoginEmailSuccess;

export type ResendExhibitorLoginEmailSuccess = {
  __typename?: 'ResendExhibitorLoginEmailSuccess';
  success: Scalars['Boolean']['output'];
};

export type ResetPasswordInput = {
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type ResponseLabelValue = {
  __typename?: 'ResponseLabelValue';
  label: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type RewardSettingsDto = {
  referralOwnerRewardQuantity?: InputMaybe<Scalars['Float']['input']>;
  referralOwnerRewardQuantityType: ReferralRewardQuantityType;
  referralUserRewardQuantity?: InputMaybe<Scalars['Float']['input']>;
  referralUserRewardQuantityType: ReferralRewardQuantityType;
};

export enum Role {
  Admin = 'Admin',
  BackOfficeStaff = 'BackOfficeStaff',
  EventManager = 'EventManager',
  EventReporting = 'EventReporting',
  Marketing = 'Marketing',
  PosAdmin = 'PosAdmin',
  PosOperator = 'PosOperator',
  Sales = 'Sales',
  SalesOutlet = 'SalesOutlet',
  Scanner = 'Scanner',
  SubPromoter = 'SubPromoter',
  Superadmin = 'Superadmin',
  User = 'User',
  VenueAdmin = 'VenueAdmin'
}

export type SmsBroadcastAudienceOutput = {
  __typename?: 'SMSBroadcastAudienceOutput';
  audienceSize: Scalars['Float']['output'];
  totalCostInCents: Scalars['Float']['output'];
};

export type SmsBroadcastDeliveryError = {
  __typename?: 'SMSBroadcastDeliveryError';
  name: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
};

export type SmsBroadcastDeliveryErrorsOutput = {
  __typename?: 'SMSBroadcastDeliveryErrorsOutput';
  deliveryErrors: Array<SmsBroadcastDeliveryError>;
  smsBroadcastId: Scalars['String']['output'];
  totalCount: Scalars['Float']['output'];
};

export type SmsBroadcastListOutput = {
  __typename?: 'SMSBroadcastListOutput';
  id: Scalars['String']['output'];
  scheduledAt: Scalars['DateTime']['output'];
  status: BroadcastStatus;
  subject: Scalars['String']['output'];
};

export type SmsBroadcastOutput = {
  __typename?: 'SMSBroadcastOutput';
  bounceCount: Scalars['Float']['output'];
  conversionCount: Scalars['Float']['output'];
  conversionPercentage: Scalars['Float']['output'];
  deliveryCount: Scalars['Float']['output'];
  deliveryRate: Scalars['Float']['output'];
  generatedRevenue: Scalars['Float']['output'];
  hasTrackingLink: Scalars['Boolean']['output'];
  id: Scalars['String']['output'];
  marketingFilters?: Maybe<Array<BroadcastMarketingFiltersV2Output>>;
  message: Scalars['String']['output'];
  recipientCount: Scalars['Float']['output'];
  scheduledAt: Scalars['DateTime']['output'];
  sentMessageContent?: Maybe<Scalars['String']['output']>;
  status: BroadcastStatus;
  subject: Scalars['String']['output'];
  tags: TagEntityIds;
  totalCostInCents: Scalars['Float']['output'];
  uniqueClicksCount: Scalars['Float']['output'];
  unsubscribeCount: Scalars['Float']['output'];
};

export type SmsBroadcastSaveOutput = {
  __typename?: 'SMSBroadcastSaveOutput';
  id: Scalars['ID']['output'];
};

export type SmsBroadcastUnsubscribe = {
  __typename?: 'SMSBroadcastUnsubscribe';
  email: Scalars['String']['output'];
  name: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
};

export type SmsBroadcastUnsubscribesOutput = {
  __typename?: 'SMSBroadcastUnsubscribesOutput';
  smsBroadcastId: Scalars['String']['output'];
  totalCount: Scalars['Float']['output'];
  unsubscribes: Array<SmsBroadcastUnsubscribe>;
};

export type SalesBreakdown = {
  __typename?: 'SalesBreakdown';
  faceValue: Scalars['Float']['output'];
  items: Array<NumberStatistic>;
  totalNet: Scalars['Float']['output'];
};

export type SalesChannelGraphOutput = {
  __typename?: 'SalesChannelGraphOutput';
  backOffice: Scalars['Float']['output'];
  online: Scalars['Float']['output'];
  pos: Scalars['Float']['output'];
  transactions: Scalars['Float']['output'];
};

export type SalesOverviewOutput = {
  __typename?: 'SalesOverviewOutput';
  addonsIssued: Scalars['Float']['output'];
  cartAbandonment: Scalars['Float']['output'];
  cartRecovered: Scalars['Float']['output'];
  membershipsComp: Scalars['Float']['output'];
  membershipsIssued: Scalars['Float']['output'];
  membershipsPartPaid: Scalars['Float']['output'];
  membershipsRenewed: Scalars['Float']['output'];
  membershipsSold: Scalars['Float']['output'];
  orders: Scalars['Float']['output'];
  ordersPartPaid: Scalars['Float']['output'];
  packagesSold: Scalars['Float']['output'];
  pointsDistributed: Scalars['Float']['output'];
  returningCustomers: Scalars['Float']['output'];
  ticketCoverMembershipsIssued: Scalars['Float']['output'];
  ticketCoverOrdersSold: Scalars['Float']['output'];
  ticketCoverTicketsIssued: Scalars['Float']['output'];
  ticketsComp: Scalars['Float']['output'];
  ticketsIssued: Scalars['Float']['output'];
  ticketsPartPaid: Scalars['Float']['output'];
  ticketsSold: Scalars['Float']['output'];
  ticketsTransferred: Scalars['Float']['output'];
};

export type SalesReportOutput = {
  __typename?: 'SalesReportOutput';
  financialSales: Array<FinancialSales>;
  salesBreakdown: SalesBreakdown;
};

export type Scan = {
  __typename?: 'Scan';
  createdAt: Scalars['DateTime']['output'];
  direction: TicketScanDirection;
  event: Event;
  gate: Gate;
  hasScannedParentTicket: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  scannedAt: Scalars['DateTime']['output'];
  scanner: User;
  type: TicketScanType;
  updatedAt: Scalars['DateTime']['output'];
};

export enum ScanExportType {
  Addons = 'ADDONS',
  Tickets = 'TICKETS'
}

/** Scan status. */
export enum ScanStatus {
  Error = 'ERROR',
  Ok = 'OK',
  Warning = 'WARNING'
}

export type ScanTicketBulk = {
  eventId?: InputMaybe<Scalars['String']['input']>;
  /** Scanner gate */
  gateId: Scalars['String']['input'];
  /** Scanner direction */
  scanDirection: TicketScanDirection;
  /** Ticket scan type */
  scanType?: InputMaybe<TicketScanType>;
  scannedAt: Scalars['DateTime']['input'];
  /** Ticket number */
  ticketNumber: Scalars['String']['input'];
};

export type ScanTicketBulkInput = {
  /** Scan data. */
  scans: Array<ScanTicketBulk>;
};

export type ScanTicketInput = {
  /** Scanner gate */
  gateId: Scalars['String']['input'];
  /** Scanner direction */
  scanDirection: TicketScanDirection;
  /** Ticket scan type */
  scanType?: InputMaybe<TicketScanType>;
  /** Ticket number */
  ticketNumber: Scalars['String']['input'];
};

export type ScanTicketOutput = {
  __typename?: 'ScanTicketOutput';
  message?: Maybe<Scalars['String']['output']>;
  status: ScanStatus;
  ticket?: Maybe<Ticket>;
};

export type ScannedVisitorsCategory = {
  __typename?: 'ScannedVisitorsCategory';
  chartProps: ScannedVisitorsChartProps;
  descriptionItems: Array<Scalars['String']['output']>;
  displayValue: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type ScannedVisitorsChartProps = {
  __typename?: 'ScannedVisitorsChartProps';
  percentage: Scalars['Float']['output'];
};

export type ScannedVisitorsGate = {
  __typename?: 'ScannedVisitorsGate';
  displayValue: Scalars['String']['output'];
  subtitle: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type ScannedVisitorsOutput = {
  __typename?: 'ScannedVisitorsOutput';
  category: ScannedVisitorsCategory;
  items: Array<ScannedVisitorsGate>;
};

export type ScannerEmailOutput = {
  __typename?: 'ScannerEmailOutput';
  success: Scalars['Boolean']['output'];
};

export type ScenarioInput = {
  scenarioId: Scalars['String']['input'];
  /** The zones and Scenario inputs. */
  zones: Array<ScenarioZoneInput>;
};

export type ScenarioZoneInput = {
  /** The ticket types for the zone and Scenario inputs. */
  ticketTypes: Array<ScenarioZoneTicketTypeInput>;
  /** The zone related to this input */
  zoneId: Scalars['String']['input'];
};

/** An object with ticket type id and forecast cost and split of sales */
export type ScenarioZoneTicketType = {
  __typename?: 'ScenarioZoneTicketType';
  /** The forecast price of a ticket */
  price: Scalars['Float']['output'];
  /** The forecast split of sales for this ticket type as a percentage */
  splitPercentage: Scalars['Float']['output'];
  /** Ticket type id */
  ticketTypeId: Scalars['String']['output'];
};

export type ScenarioZoneTicketTypeInput = {
  /** The price of a seat in this zone for the ticket type. */
  price: Scalars['Float']['input'];
  /** What percentage of the seats will be this ticket type */
  splitPercentage: Scalars['Float']['input'];
  /** The ticket type of this input. */
  ticketTypeId: Scalars['String']['input'];
};

export type ScheduleOption = {
  __typename?: 'ScheduleOption';
  availableUntil?: Maybe<Scalars['String']['output']>;
  depositPercentage?: Maybe<Scalars['Float']['output']>;
  finalPaymentDate?: Maybe<Scalars['String']['output']>;
  /** This fee is collected for Flicket as part of Payment Plans. */
  flicketFeePercentage?: Maybe<Scalars['Float']['output']>;
  id: Scalars['String']['output'];
  installmentCount: Scalars['Float']['output'];
  interval: ScheduleOptionInterval;
  minimumOrderAmount?: Maybe<Scalars['Float']['output']>;
  /** This fee is collected as additional revenue for offering Payment Plans. */
  promoterFeePercentage?: Maybe<Scalars['Float']['output']>;
  /** This fee is collected to cover the Stripe costs. */
  stripeFeePercentage?: Maybe<Scalars['Float']['output']>;
};

export type ScheduleOptionInput = {
  availableUntil?: InputMaybe<Scalars['String']['input']>;
  depositPercentage?: InputMaybe<Scalars['Float']['input']>;
  finalPaymentDate?: InputMaybe<Scalars['String']['input']>;
  /** This fee is collected for Flicket as part of Payment Plans. */
  flicketFeePercentage?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['String']['input'];
  installmentCount: Scalars['Float']['input'];
  interval: ScheduleOptionInterval;
  minimumOrderAmount?: InputMaybe<Scalars['Float']['input']>;
  /** This fee is collected as additional revenue for offering Payment Plans. */
  promoterFeePercentage?: InputMaybe<Scalars['Float']['input']>;
  /** This fee is collected to cover the Stripe costs. */
  stripeFeePercentage?: InputMaybe<Scalars['Float']['input']>;
};

export enum ScheduleOptionInterval {
  Day = 'day',
  Month = 'month',
  Week = 'week'
}

export type Scout = {
  __typename?: 'Scout';
  createdAt: Scalars['DateTime']['output'];
  exclude: Array<FilterSelection>;
  id: Scalars['ID']['output'];
  includeOptedOutOfMarketing?: Maybe<Scalars['Boolean']['output']>;
  /** Scout active status. */
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  promoteTo: Array<FilterSelection>;
  purpose?: Maybe<ScoutPurpose>;
  total: Scalars['Float']['output'];
  /** Release Id of the source that we are tracking */
  trackReleaseId?: Maybe<Scalars['String']['output']>;
  /** Used to show what we are tracking */
  trackSource?: Maybe<Scalars['String']['output']>;
  /** Id of source */
  trackSourceId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type ScoutCampaignOverviewOutput = {
  __typename?: 'ScoutCampaignOverviewOutput';
  addonsSold: Scalars['Float']['output'];
  campaignSize: Scalars['Float']['output'];
  cartAbandonment: Scalars['Float']['output'];
  contactRate: Scalars['Float']['output'];
  conversionRate: Scalars['Float']['output'];
  emailClickRate: Scalars['Float']['output'];
  emailOpenRate: Scalars['Float']['output'];
  membershipsSold: Scalars['Float']['output'];
  orders: Scalars['Float']['output'];
  returningCustomers: Scalars['Float']['output'];
  ticketsComp: Scalars['Float']['output'];
  ticketsPaid: Scalars['Float']['output'];
  ticketsSold: Scalars['Float']['output'];
  todayRevenue: Scalars['Float']['output'];
  totalRevenue: Scalars['Float']['output'];
};

export type ScoutCommunication = {
  __typename?: 'ScoutCommunication';
  /** If a campaign is created from another campaign, then it should have a campaign Id. */
  campaign?: Maybe<ScoutCommunication>;
  conversions: Scalars['Float']['output'];
  count: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  data: Scalars['JSON']['output'];
  id: Scalars['ID']['output'];
  includeOptedOutOfMarketing?: Maybe<Scalars['Boolean']['output']>;
  isActive: Scalars['Boolean']['output'];
  link?: Maybe<Scalars['String']['output']>;
  listId?: Maybe<Scalars['String']['output']>;
  /** Required when type is email communication */
  mailchimpCampaignId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  processedAt?: Maybe<Scalars['DateTime']['output']>;
  purpose: ScoutPurpose;
  scheduledAt?: Maybe<Scalars['DateTime']['output']>;
  /** If a campaign is created from a segment, then it should have a scout Id. */
  scout?: Maybe<Scout>;
  shouldUpdate?: Maybe<Scalars['Boolean']['output']>;
  subject?: Maybe<Scalars['String']['output']>;
  templateId?: Maybe<Scalars['Float']['output']>;
  /** Release Id of the source that we are tracking */
  trackReleaseId?: Maybe<Scalars['String']['output']>;
  /** Used to show what we are tracking */
  trackSource?: Maybe<ReportingFilterSource>;
  /** Id of source */
  trackSourceId?: Maybe<Scalars['String']['output']>;
  /** email, sms or call */
  type: ScoutCommunicationType;
  updatedAt: Scalars['DateTime']['output'];
};

/** The communication types for a scout campaign. */
export enum ScoutCommunicationType {
  Call = 'Call',
  Email = 'Email',
  Sms = 'SMS'
}

export type ScoutCommunicationUser = {
  __typename?: 'ScoutCommunicationUser';
  agentUser?: Maybe<User>;
  createdAt: Scalars['DateTime']['output'];
  history: HistoryConnection;
  id: Scalars['ID']['output'];
  processedAt?: Maybe<Scalars['DateTime']['output']>;
  remindAt?: Maybe<Scalars['DateTime']['output']>;
  response?: Maybe<Scalars['JSON']['output']>;
  scoutCommunication: ScoutCommunication;
  scoutUser?: Maybe<ScoutUser>;
  stage: ScoutStage;
  updatedAt: Scalars['DateTime']['output'];
  user: User;
};


export type ScoutCommunicationUserHistoryArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<HistoryOrderByInput>;
};

export type ScoutCommunicationUserConnection = {
  __typename?: 'ScoutCommunicationUserConnection';
  edges: Array<ScoutCommunicationUserEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ScoutCommunicationUserEdge = {
  __typename?: 'ScoutCommunicationUserEdge';
  cursor: Scalars['String']['output'];
  node: ScoutCommunicationUser;
};

export type ScoutCommunicationsInput = {
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum ScoutEventType {
  Event = 'Event',
  Membership = 'Membership'
}

/** The valid purposes for a scout. */
export enum ScoutPurpose {
  Communication = 'Communication',
  SellMembership = 'SellMembership',
  SellMerchandise = 'SellMerchandise',
  SellTickets = 'SellTickets'
}

/** The valid stages for a scout user. */
export enum ScoutStage {
  Completed = 'Completed',
  InProgress = 'InProgress',
  NoAnswer = 'NoAnswer',
  NoContact = 'NoContact'
}

export type ScoutUser = {
  __typename?: 'ScoutUser';
  agentUser?: Maybe<User>;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  remindAt?: Maybe<Scalars['DateTime']['output']>;
  scout: Scout;
  stage: ScoutStage;
  updatedAt: Scalars['DateTime']['output'];
  user: User;
};

export type ScoutUserConnection = {
  __typename?: 'ScoutUserConnection';
  edges: Array<ScoutUserEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ScoutUserEdge = {
  __typename?: 'ScoutUserEdge';
  cursor: Scalars['String']['output'];
  node: ScoutUser;
};

export type SearchArtistInput = {
  query: Scalars['String']['input'];
};

export type SearchArtistOutput = {
  __typename?: 'SearchArtistOutput';
  /** Follower count of the artist */
  followerCount?: Maybe<Scalars['Int']['output']>;
  /** Genres of the artist */
  genres?: Maybe<Array<Scalars['String']['output']>>;
  id: Scalars['String']['output'];
  /** URL of the artist image */
  imageUrl?: Maybe<Scalars['String']['output']>;
  /** Name of the artist */
  name: Scalars['String']['output'];
  /** Source of the artist data, e.g. spotify */
  source?: Maybe<Scalars['String']['output']>;
  /** Source id of the artist, e.g. artist id from spotify */
  sourceId?: Maybe<Scalars['String']['output']>;
};

export type SearchEvent = {
  __typename?: 'SearchEvent';
  dates: Array<EventDate>;
  id: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type SearchEventFilter = {
  activeEventsOnly?: InputMaybe<Scalars['Boolean']['input']>;
  /** A value of true will return only events that have registration enabled. A value of false will return only the events that have no registration. Null will not filter on this value. */
  hasRegistrationEnabled?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SearchEventTicketsAppOutput = {
  __typename?: 'SearchEventTicketsAppOutput';
  tickets: Array<AppTicket>;
  totalCount: Scalars['Float']['output'];
};

export type SearchMembership = {
  __typename?: 'SearchMembership';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  startDate: Scalars['DateTime']['output'];
};

export type SearchPackage = {
  __typename?: 'SearchPackage';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type SearchSeason = {
  __typename?: 'SearchSeason';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  startDate: Scalars['DateTime']['output'];
};

export type Season = {
  __typename?: 'Season';
  backgroundImageFullPage?: Maybe<ExtendedFile>;
  createdAt: Scalars['DateTime']['output'];
  defaultDateRange?: Maybe<DateRange>;
  /** Description of the season */
  description?: Maybe<Scalars['String']['output']>;
  displayOrder: Scalars['Int']['output'];
  endDate?: Maybe<Scalars['DateTime']['output']>;
  /** Events in the season */
  events: Array<Event>;
  id: Scalars['ID']['output'];
  /** Season active status */
  isActive: Scalars['Boolean']['output'];
  /** Season name */
  name: Scalars['String']['output'];
  startDate?: Maybe<Scalars['DateTime']['output']>;
  thumbnail?: Maybe<ExtendedFile>;
  updatedAt: Scalars['DateTime']['output'];
};


export type SeasonDefaultDateRangeArgs = {
  input: SeasonOnsaleDateRangeInput;
};

export type SeasonInformation = {
  __typename?: 'SeasonInformation';
  endDate?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  location?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  startDate?: Maybe<Scalars['String']['output']>;
};

export type SeasonLayoutOutput = {
  __typename?: 'SeasonLayoutOutput';
  defaultDateRange: DateRange;
  season?: Maybe<SeasonInformation>;
};

export type SeasonOnsaleDateRangeInput = {
  source: ReportingFinancialSalesBreakdownSource;
};

/** The valid values for seat type (based on seats.io). */
export enum SeatType {
  GeneralAdmission = 'GENERAL_ADMISSION',
  Seat = 'SEAT'
}

export type Section = {
  __typename?: 'Section';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  seatsIoKey?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type SeekaOutput = {
  __typename?: 'SeekaOutput';
  countryCode?: Maybe<Scalars['String']['output']>;
  currencyCode?: Maybe<Scalars['String']['output']>;
  seekaInstanceId: Scalars['String']['output'];
  seekaOrganizationId: Scalars['String']['output'];
  seekaPublicKey: Scalars['String']['output'];
  seekaScopeDescription: Scalars['String']['output'];
};

export type SelectedProductInput = {
  id: Scalars['String']['input'];
};

export type SendBroadcastInput = {
  addonId?: InputMaybe<Array<Scalars['String']['input']>>;
  audience?: InputMaybe<BroadcastAudience>;
  broadcastId?: InputMaybe<Scalars['String']['input']>;
  eventId?: InputMaybe<Scalars['String']['input']>;
  fromName: Scalars['String']['input'];
  marketingFilters?: InputMaybe<Array<MarketingFiltersInput>>;
  marketingFiltersV2?: InputMaybe<Array<BroadcastMarketingFiltersV2Input>>;
  marketingType?: InputMaybe<BroadcastMarketingType>;
  membershipId?: InputMaybe<Scalars['String']['input']>;
  releaseId?: InputMaybe<Array<Scalars['String']['input']>>;
  richTextString: Scalars['String']['input'];
  /** If the input contains send time, then this is a scheduled email */
  sendTime?: InputMaybe<Scalars['DateTime']['input']>;
  status: BroadcastStatus;
  style?: InputMaybe<EmailStyleInput>;
  subject: Scalars['String']['input'];
  tags?: InputMaybe<Array<BroadcastTags>>;
  /** If the input contains test email, then send test email */
  testEmail?: InputMaybe<Scalars['String']['input']>;
  ticketTypeId?: InputMaybe<Array<Scalars['String']['input']>>;
  transactionalType?: InputMaybe<BroadcastTransactionalType>;
  type: BroadcastType;
  zoneId?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type SendOrderConfirmationInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  notificationType?: InputMaybe<NotificationType>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export type SendOrderConfirmationOutput = {
  __typename?: 'SendOrderConfirmationOutput';
  email?: Maybe<Scalars['String']['output']>;
  notificationType: NotificationType;
  phoneNumber?: Maybe<Scalars['String']['output']>;
};

export type SendTestEmailInput = {
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  richTextTemplate: Scalars['JSON']['input'];
  style: EmailStyleInput;
  subject: Scalars['JSON']['input'];
};

export type SeoMetadata = {
  __typename?: 'SeoMetadata';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  event: Event;
  eventId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  keywords?: Maybe<Array<Scalars['String']['output']>>;
  membership: Membership;
  membershipId?: Maybe<Scalars['String']['output']>;
  openGraphImageUrl?: Maybe<Scalars['String']['output']>;
  origin?: Maybe<SeoMetadataOrigin>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type SeoMetadataInput = {
  description: Scalars['String']['input'];
  origin: SeoMetadataOrigin;
  title: Scalars['String']['input'];
};

export enum SeoMetadataOrigin {
  DefaultValues = 'DefaultValues',
  UserDefined = 'UserDefined'
}

export type SetPasswordForNewUserInput = {
  password: Scalars['String']['input'];
};

export type SetPosPaymentOptionsInput = {
  bookingFee?: InputMaybe<Scalars['Float']['input']>;
  bookingFeeType?: InputMaybe<FeeType>;
  posPaymentOptions?: InputMaybe<PosPaymentOptionsInput>;
};

/** Represents shipping labels. */
export type ShippingLabels = {
  __typename?: 'ShippingLabels';
  /** Shipping label for e-tickets. */
  eTicket?: Maybe<Scalars['String']['output']>;
  /** Shipping label for printed tickets at venue. */
  printedTicketAtVenue?: Maybe<Scalars['String']['output']>;
  /** Shipping label for printed tickets by courier. */
  printedTicketByCourier?: Maybe<Scalars['String']['output']>;
  /** Shipping label for printed tickets by courier - rural. */
  printedTicketByCourierRural?: Maybe<Scalars['String']['output']>;
  /** Shipping label for printed tickets by mail. */
  printedTicketByMail?: Maybe<Scalars['String']['output']>;
};

/** Specifies the input fields for shipping labels. */
export type ShippingLabelsInput = {
  /** Shipping label for e-tickets. */
  eTicket?: InputMaybe<Scalars['String']['input']>;
  /** Shipping label for printed tickets at venue. */
  printedTicketAtVenue?: InputMaybe<Scalars['String']['input']>;
  /** Shipping label for printed tickets by courier. */
  printedTicketByCourier?: InputMaybe<Scalars['String']['input']>;
  /** Shipping label for printed tickets by courier - rural. */
  printedTicketByCourierRural?: InputMaybe<Scalars['String']['input']>;
  /** Shipping label for printed tickets by mail. */
  printedTicketByMail?: InputMaybe<Scalars['String']['input']>;
};

export enum ShippingOption {
  Eticket = 'ETICKET',
  PrintedTicketAtVenue = 'PRINTED_TICKET_AT_VENUE',
  PrintedTicketByCourier = 'PRINTED_TICKET_BY_COURIER',
  PrintedTicketByCourierRural = 'PRINTED_TICKET_BY_COURIER_RURAL',
  PrintedTicketByMail = 'PRINTED_TICKET_BY_MAIL'
}

/** Represents shipping options. */
export type ShippingOptions = {
  __typename?: 'ShippingOptions';
  /** Shipping fee for e-tickets. */
  eTicket?: Maybe<Scalars['Float']['output']>;
  /** Shipping fee for printed tickets at venue. */
  printedTicketAtVenue?: Maybe<Scalars['Float']['output']>;
  /** Shipping fee for printed tickets by courier. */
  printedTicketByCourier?: Maybe<Scalars['Float']['output']>;
  /** Shipping fee for printed tickets by courier - rural. */
  printedTicketByCourierRural?: Maybe<Scalars['Float']['output']>;
  /** Shipping fee for printed tickets by mail. */
  printedTicketByMail?: Maybe<Scalars['Float']['output']>;
};

/** Specifies the input fields for shipping options. Set to `null` for unavailability per item. */
export type ShippingOptionsInput = {
  /** Shipping fee for e-tickets. */
  eTicket?: InputMaybe<Scalars['Float']['input']>;
  /** Shipping fee for printed tickets at venue. */
  printedTicketAtVenue?: InputMaybe<Scalars['Float']['input']>;
  /** Shipping fee for printed tickets by courier. */
  printedTicketByCourier?: InputMaybe<Scalars['Float']['input']>;
  /** Shipping fee for printed tickets by courier - rural. */
  printedTicketByCourierRural?: InputMaybe<Scalars['Float']['input']>;
  /** Shipping fee for printed tickets by mail. */
  printedTicketByMail?: InputMaybe<Scalars['Float']['input']>;
};

/** Represents a Shopify customer */
export type ShopifyCustomerOrder = {
  __typename?: 'ShopifyCustomerOrder';
  currencyCode: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lineItems: Array<ShopifyLineItem>;
  total: Scalars['String']['output'];
};

export type ShopifyIntegration = {
  __typename?: 'ShopifyIntegration';
  navLinkLabel: Scalars['String']['output'];
  navLinkUrl: Scalars['String']['output'];
  shopDomain: Scalars['String']['output'];
  storefrontAccessToken: Scalars['String']['output'];
};

export type ShopifyLineItem = {
  __typename?: 'ShopifyLineItem';
  id: Scalars['String']['output'];
  quantity: Scalars['Float']['output'];
  title: Scalars['String']['output'];
};

export type ShopifyProductDto = {
  __typename?: 'ShopifyProductDto';
  id: Scalars['String']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  price: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type ShopifyProductsDto = {
  __typename?: 'ShopifyProductsDto';
  customizedUpsell: Scalars['Boolean']['output'];
  products: Array<ShopifyProductDto>;
  showUpsell: Scalars['Boolean']['output'];
  storeUrl: Scalars['String']['output'];
};

export type ShopifySettings = {
  __typename?: 'ShopifySettings';
  alwaysShowPostPurchase: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  navLinkLabel: Scalars['String']['output'];
  showNavLink: Scalars['Boolean']['output'];
  updatedAt: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};

export type ShopifySettingsInput = {
  alwaysShowPostPurchase: Scalars['Boolean']['input'];
  navLinkLabel: Scalars['String']['input'];
  selectedProducts: Array<SelectedProductInput>;
  showNavLink: Scalars['Boolean']['input'];
  url: Scalars['String']['input'];
};

export type ShopifySetupInput = {
  token: Scalars['String']['input'];
};

export type ShopifyUser = {
  __typename?: 'ShopifyUser';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  /** Shopify user ID */
  shopifyUserId: Scalars['String']['output'];
  /** Total amount spent on Shopify store with currency code */
  totalSpent?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

/** Mapping of a shortened URL to its full path */
export type ShortUrl = {
  __typename?: 'ShortUrl';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  /** Full original URL path to redirect to. */
  originalUrl: Scalars['String']['output'];
  publicShortUrl: Scalars['String']['output'];
  /** Unique sequence number. The short URL is this number in base62, padded to 4 characters. */
  sequenceId: Scalars['Float']['output'];
  /** Number of times the shortened URL has redirected to the full path. */
  timesUsed: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type SignupForm = {
  __typename?: 'SignupForm';
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  heading: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  organizationId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type SmsBroadcastFilterCountInput = {
  filters?: InputMaybe<Array<BroadcastMarketingFiltersV2Input>>;
};

export type SocialAuthInput = {
  accessToken: Scalars['String']['input'];
  socialAuthType: SocialAuthType;
};

/** Social authentication type */
export enum SocialAuthType {
  Facebook = 'Facebook',
  Google = 'Google'
}

export type SocialConnection = {
  __typename?: 'SocialConnection';
  edges: Array<SocialMentionEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type SocialMention = {
  __typename?: 'SocialMention';
  /** id of comment */
  commentId?: Maybe<Scalars['String']['output']>;
  /** content of comment mention and media mention */
  content?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  /** id of media */
  mediaId?: Maybe<Scalars['String']['output']>;
  /** igid of organisation */
  recipientId: Scalars['String']['output'];
  /** igsid of customer, exist for story mentions */
  senderId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  /** url of mentions */
  url: Scalars['String']['output'];
  user?: Maybe<User>;
};

export type SocialMentionEdge = {
  __typename?: 'SocialMentionEdge';
  cursor: Scalars['String']['output'];
  node: SocialMention;
};

export type SocialWhereInput = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  mentionType?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type SplitOrderInput = {
  /** Multi buy promotion id for current order. */
  curMultiBuyId?: InputMaybe<Scalars['String']['input']>;
  /** Delivery method for the new order */
  deliveryMethod: ShippingOption;
  /** List of the order's line items ids that need to be transfered. */
  lineItemIds: Array<Scalars['String']['input']>;
  /** Multi buy promotion id for new order. */
  newMultiBuyId?: InputMaybe<Scalars['String']['input']>;
  newTicketTypes?: InputMaybe<Array<SplitOrderTicketTypes>>;
  /** User id can be provided for new order */
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type SplitOrderTicketTypes = {
  lineItemId: Scalars['String']['input'];
  ticketTypeId: Scalars['String']['input'];
};

export type StatisticTooltip = {
  __typename?: 'StatisticTooltip';
  content: Scalars['String']['output'];
  /** Link for the learn More button. This should be a link to the external documentation page. */
  link?: Maybe<Scalars['String']['output']>;
};

/** File storage type. */
export enum StorageType {
  Google = 'Google',
  Local = 'Local'
}

export type StringStatistic = {
  __typename?: 'StringStatistic';
  label: Scalars['String']['output'];
  tooltip?: Maybe<StatisticTooltip>;
  value: Scalars['String']['output'];
};

export type StripeConnectAccount = {
  __typename?: 'StripeConnectAccount';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  integration?: Maybe<Integration>;
  organization: Organization;
  setupState: StripeConnectSetupState;
  stripeAccountId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

/** Stripe Connect setup state. */
export enum StripeConnectSetupState {
  Active = 'ACTIVE',
  Incomplete = 'INCOMPLETE',
  Pending = 'PENDING',
  Restricted = 'RESTRICTED'
}

export type StripePaymentContext = {
  __typename?: 'StripePaymentContext';
  checkoutUrl: Scalars['String']['output'];
  clientSecret?: Maybe<Scalars['String']['output']>;
  orderId: Scalars['String']['output'];
  publishableKey?: Maybe<Scalars['String']['output']>;
  redirectUrl?: Maybe<Scalars['String']['output']>;
  stripeAccountId: Scalars['String']['output'];
};

/** Payment method used with Stripe. */
export enum StripePaymentMethod {
  Afterpay = 'Afterpay',
  CreditCard = 'CreditCard'
}

export type SummaryOverviewOutput = {
  __typename?: 'SummaryOverviewOutput';
  addonsIssued: Scalars['Float']['output'];
  cartAbandonment: Scalars['Float']['output'];
  faceRevenueToday: Scalars['Float']['output'];
  faceRevenueYesterday: Scalars['Float']['output'];
  membershipsIssued: Scalars['Float']['output'];
  membershipsPartPaid: Scalars['Float']['output'];
  membershipsRenewed: Scalars['Float']['output'];
  orders: Scalars['Float']['output'];
  ordersPartPaid: Scalars['Float']['output'];
  returningCustomers: Scalars['Float']['output'];
  ticketsComp: Scalars['Float']['output'];
  ticketsIssued: Scalars['Float']['output'];
  ticketsPartPaid: Scalars['Float']['output'];
  ticketsSold: Scalars['Float']['output'];
  ticketsSoldToday: Scalars['Float']['output'];
  ticketsSoldYesterday: Scalars['Float']['output'];
  todayNetRevenue: Scalars['Float']['output'];
  totalFaceRevenue: Scalars['Float']['output'];
  totalNetRevenue: Scalars['Float']['output'];
  yesterdayNetRevenue: Scalars['Float']['output'];
};

export type Tag = {
  __typename?: 'Tag';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type TagArgs = {
  __typename?: 'TagArgs';
  exclude: Scalars['Boolean']['output'];
  kind: BroadcastMarketingFiltersV2Kind;
  tagIds: Array<Scalars['String']['output']>;
};

export type TagEntitiesInput = {
  entityIds?: InputMaybe<Array<Scalars['String']['input']>>;
  scoutCommunicationId?: InputMaybe<Scalars['String']['input']>;
  /** tag ids */
  tags: Array<Scalars['String']['input']>;
};

export type TagEntityIds = {
  __typename?: 'TagEntityIds';
  /** Entity Ids of either an eventId, membershipId or tagId */
  entityIds?: Maybe<Array<Scalars['String']['output']>>;
};

export enum TagType {
  Event = 'EVENT',
  Membership = 'MEMBERSHIP',
  Tag = 'TAG'
}

export type TaxApplied = {
  __typename?: 'TaxApplied';
  isExclusive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  total: Scalars['Float']['output'];
  value: Scalars['Float']['output'];
};

/** The tax calculation method, either inclusive or exclusive */
export enum TaxCalculationMethod {
  Exclusive = 'EXCLUSIVE',
  Inclusive = 'INCLUSIVE'
}

export type TerminalLatestTransactionStatus = {
  __typename?: 'TerminalLatestTransactionStatus';
  failureCode?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  status: OrderTransactionStatus;
};

export type Ticket = {
  __typename?: 'Ticket';
  addon?: Maybe<AddonUnion>;
  birthDate?: Maybe<Scalars['DateTime']['output']>;
  childTickets?: Maybe<Array<Ticket>>;
  comments?: Maybe<Scalars['String']['output']>;
  companyName?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Array<CustomField>>;
  dietaryRequirements?: Maybe<Scalars['String']['output']>;
  digitalEventUrl?: Maybe<Scalars['String']['output']>;
  digitalPassCode?: Maybe<Scalars['String']['output']>;
  displayName: Scalars['String']['output'];
  downloadCount: Scalars['Float']['output'];
  dunedinResidentialAddress?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  emergencyContact?: Maybe<Scalars['String']['output']>;
  emergencyContactRelationship?: Maybe<Scalars['String']['output']>;
  emergencyName?: Maybe<Scalars['String']['output']>;
  /** Ticket event. Only available for single tickets. */
  event?: Maybe<Event>;
  firstName?: Maybe<Scalars['String']['output']>;
  firstScanIn?: Maybe<Scan>;
  /**
   * Only populated if at least the relations ['event', 'event.venue', 'event.venue.gates'] are loaded,
   *       Also load ['event.eventAddon'] if used for getting scannable gates from event addon
   *
   */
  gates?: Maybe<Array<Gate>>;
  gender?: Maybe<Gender>;
  /** Indicates if the claim for the seat has been released for the next membership. */
  hasReleasedNextMembershipClaim: Scalars['Boolean']['output'];
  hasRenewedMembership: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  isHold: Scalars['Boolean']['output'];
  /** Indicates if all required ticket holder naming fields have been filled in. */
  isNamed: Scalars['Boolean']['output'];
  isViewable: Scalars['Boolean']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  lastScanOut?: Maybe<Scan>;
  lengthOfStay?: Maybe<Scalars['String']['output']>;
  licensePlate?: Maybe<Scalars['String']['output']>;
  lineItem?: Maybe<LineItem>;
  maxTransferPrice?: Maybe<Scalars['Float']['output']>;
  memberSince?: Maybe<Scalars['DateTime']['output']>;
  membership?: Maybe<Membership>;
  membershipNumber?: Maybe<Scalars['String']['output']>;
  membershipSubscriptionId?: Maybe<Scalars['String']['output']>;
  /** The membership type associated with the ticket. */
  membershipType?: Maybe<MembershipType>;
  order?: Maybe<Order>;
  /** Ticket creation origin */
  origin: TicketOrigin;
  /** Parent ticket. Only available for single tickets that are child tickets of a membership. */
  parentTicket?: Maybe<Ticket>;
  parentTicketNumber?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  /** Timestamp when ticket was most recently preprinted. */
  preprint?: Maybe<Scalars['DateTime']['output']>;
  purchaseRestrictionText?: Maybe<Array<Scalars['String']['output']>>;
  qrCode: Scalars['String']['output'];
  /** Ticket release. Only available for single tickets. */
  release?: Maybe<Release>;
  resellabilityState: TicketResellabilityState;
  scans?: Maybe<Array<Scan>>;
  /** Ticket seat label. Only available for seated events. */
  seatLabel?: Maybe<Scalars['String']['output']>;
  /** Ticket seat section. Only available for seated events. */
  seatSection?: Maybe<Scalars['String']['output']>;
  seatSectionEntity?: Maybe<Section>;
  /** Ticket seat tags. Only available for seated events. */
  seatTags?: Maybe<Array<Scalars['String']['output']>>;
  /** Ticket seat type. Only available for seated events. */
  seatType?: Maybe<SeatType>;
  /** Ticket seat zone. Only available for seated events. */
  seatZone?: Maybe<Scalars['String']['output']>;
  seatZoneEntity?: Maybe<Zone>;
  shouldBeNamed: Scalars['Boolean']['output'];
  /** Ticket status */
  status: TicketStatus;
  studentId?: Maybe<Scalars['String']['output']>;
  ticketCover?: Maybe<TicketTicketCover>;
  /** Ticket number */
  ticketNumber: Scalars['String']['output'];
  ticketSendFields?: Maybe<Array<TicketSendFields>>;
  ticketTransfer?: Maybe<TicketTransfer>;
  /** The ticket type associated with the ticket. */
  ticketType?: Maybe<TicketType>;
  /** Returns the transfer fee paid for the ticket. If the ticket was sold, it will include the seller fee. If the ticket was bought through a transfer, it will include the buyer fee. */
  transferFee?: Maybe<TicketTransferFee>;
  transferStatus?: Maybe<TicketTransferStatus>;
  updatedAt: Scalars['DateTime']['output'];
  usableForEmailMarketing?: Maybe<Scalars['Boolean']['output']>;
  usableForSMSMarketing?: Maybe<Scalars['Boolean']['output']>;
  /** Ticket owner. Not all tickets have users. */
  user?: Maybe<User>;
  vaccinePass?: Maybe<VaccinePass>;
};

export enum TicketAvailabilityStatus {
  AllocationExhausted = 'ALLOCATION_EXHAUSTED',
  Available = 'AVAILABLE',
  Soldout = 'SOLDOUT'
}

export type TicketConnection = {
  __typename?: 'TicketConnection';
  edges: Array<TicketEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TicketCoverAmount = {
  __typename?: 'TicketCoverAmount';
  totalFeeAmount: Scalars['Float']['output'];
};

export type TicketCoverInput = {
  /** Whether ticket cover is enabled */
  isEnabled: Scalars['Boolean']['input'];
  /** Promoter fee as percentage of ticket price */
  promoterFeePercentage: Scalars['Float']['input'];
  /** Ticket cover purchase behaviour */
  purchaseBehaviour: TicketCoverPurchaseBehaviour;
};

export enum TicketCoverPurchaseBehaviour {
  Additional = 'Additional',
  Included = 'Included',
  Optional = 'Optional'
}

export type TicketEdge = {
  __typename?: 'TicketEdge';
  cursor: Scalars['String']['output'];
  node: Ticket;
};

export type TicketNotAvailableError = CreateOrderError & {
  __typename?: 'TicketNotAvailableError';
  eventId: Scalars['String']['output'];
  message: Scalars['String']['output'];
  releaseId: Scalars['String']['output'];
  shouldDisplayWaitlist: Scalars['Boolean']['output'];
};

/** Ticket creation origin. */
export enum TicketOrigin {
  Import = 'IMPORT',
  Order = 'ORDER'
}

export type TicketResellabilityState = {
  __typename?: 'TicketResellabilityState';
  hoursLeftToTransfer: Scalars['Float']['output'];
  /** The latest date that a transfer can be completed. Only relevant to Afterpay orders. */
  latestTransferCompletionDate?: Maybe<Scalars['DateTime']['output']>;
  /** The reason why the ticket is not resellable. This field is only present when ticketResaleAllowed or ticketTransferAllowed is false */
  reason?: Maybe<Scalars['String']['output']>;
  ticketResaleAllowed: Scalars['Boolean']['output'];
  ticketTransferAllowed: Scalars['Boolean']['output'];
};

/** Scanner direction. */
export enum TicketScanDirection {
  ScanIn = 'SCAN_IN',
  ScanOut = 'SCAN_OUT'
}

/** Ticket scan type. */
export enum TicketScanType {
  Digital = 'DIGITAL',
  Eticket = 'ETICKET',
  Hardcopy = 'HARDCOPY',
  Pos = 'POS'
}

export type TicketSendFields = {
  __typename?: 'TicketSendFields';
  active: Scalars['Boolean']['output'];
  email: Scalars['String']['output'];
};

/** Ticket status. */
export enum TicketStatus {
  Active = 'ACTIVE',
  MarkedForResale = 'MARKED_FOR_RESALE',
  OrderCanceled = 'ORDER_CANCELED',
  OrderChanged = 'ORDER_CHANGED',
  Refunded = 'REFUNDED',
  Released = 'RELEASED',
  SeatChanged = 'SEAT_CHANGED',
  Transferred = 'TRANSFERRED',
  TransferPending = 'TRANSFER_PENDING'
}

export type TicketTicketCover = {
  __typename?: 'TicketTicketCover';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  orderTicketCover: OrderTicketCover;
  perTicketAmount: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type TicketTransfer = {
  __typename?: 'TicketTransfer';
  buyerTransferFee: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  newLineItemPrice: Scalars['Float']['output'];
  newOwnerEmail?: Maybe<Scalars['String']['output']>;
  originalLineItemPrice: Scalars['Float']['output'];
  sellerTransferFee: Scalars['Float']['output'];
  transferGroupId?: Maybe<Scalars['String']['output']>;
  transferStatus: TicketTransferStatus;
  updatedAt: Scalars['DateTime']['output'];
};

export type TicketTransferFee = {
  __typename?: 'TicketTransferFee';
  fee: Scalars['Float']['output'];
  type: TransferFeeType;
};

/** The status of the ticket transfer. */
export enum TicketTransferStatus {
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  Pending = 'PENDING'
}

/** Ticket type. */
export type TicketType = {
  __typename?: 'TicketType';
  /** Ticket fee. */
  bookingFee: Scalars['Float']['output'];
  /** Ticket fee type. */
  bookingFeeType: FeeType;
  createdAt: Scalars['DateTime']['output'];
  /** Ticket type allowed dates. */
  dates: Array<TicketTypeDate>;
  /** Ticket description */
  description?: Maybe<Scalars['String']['output']>;
  /** Custom entry dates for this ticket type. */
  entryDates?: Maybe<Array<EventDate>>;
  event: Event;
  /** The amount of people in a group. Returns null if the ticket type is not grouped. */
  groupAmount?: Maybe<Scalars['Int']['output']>;
  hasCustomDates: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  /** Image gallery for ticket listing and sub-page. */
  imageGallery: Array<ImageGalleryItem>;
  /** Mark a ticket type as high demand */
  inHighDemand: Scalars['Boolean']['output'];
  /** Whether the ticket type is grouped. */
  isGrouped: Scalars['Boolean']['output'];
  isOnSale: Scalars['Boolean']['output'];
  isResaleTicket: Scalars['Boolean']['output'];
  isUsherDisabled: Scalars['Boolean']['output'];
  /** The kind of the ticket type. */
  kind: TicketTypeKind;
  maxPurchaseQuantity?: Maybe<Scalars['Int']['output']>;
  minPurchaseQuantity?: Maybe<Scalars['Int']['output']>;
  /** Ticket group name. */
  name: Scalars['String']['output'];
  namingFields: Array<FormField>;
  /**
   * If the ticket type is on sale, it returns null.
   *       Otherwise, it returns the message that should be displayed.
   */
  notOnSaleMessage?: Maybe<Scalars['String']['output']>;
  /** The configuration for the customised ticket type on sale date. The value is null if the ticket type is not customised. */
  onSaleConfig?: Maybe<TicketTypeOnSaleConfig>;
  onSaleStatus: TicketTypeOnSaleStatus;
  price?: Maybe<Scalars['Float']['output']>;
  /** Print at home information for the ticket group. */
  printAtHomeInformation?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  /** Number of tickets that must be purchased in this set. */
  quantitySet?: Maybe<Scalars['Int']['output']>;
  resaleHiddenFromPublic: Scalars['Boolean']['output'];
  /** The resale ticket type that this ticket will be transformed into when resold. */
  resaleTicketTypeId?: Maybe<Scalars['String']['output']>;
  /** If this is a resale ticket, this is the array of ticketTypes that is grouped under this resale ticket */
  resaleTicketTypes: Array<TicketType>;
  /** Restrictions for the ticket group. */
  restrictions?: Maybe<Scalars['String']['output']>;
  /** Display ticket end time. */
  showEndTime: Scalars['Boolean']['output'];
  /** Display ticket start time. */
  showStartTime: Scalars['Boolean']['output'];
  /** Mark a ticket type as sold out */
  soldOut: Scalars['Boolean']['output'];
  /** Per ticket stadium levy ticket fee. */
  stadiumLevyFee?: Maybe<Scalars['Float']['output']>;
  tags: Array<Tag>;
  /** Image for the bottom of the print at home ticket . Returns null if the not set. */
  ticketBanner?: Maybe<ExtendedFile>;
  /** Image to be shown on the customer portal of the ticket . Returns null if the not set. */
  ticketImage?: Maybe<ExtendedFile>;
  totalSold?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  /** Number of fans on waitlist */
  waitlistFanCount: Scalars['Int']['output'];
};

export type TicketTypeArgs = {
  __typename?: 'TicketTypeArgs';
  exclude: Scalars['Boolean']['output'];
  kind: BroadcastMarketingFiltersV2Kind;
  ticketTypeIds: Array<Scalars['String']['output']>;
};

/** Allowed date for the ticket type. */
export type TicketTypeDate = {
  __typename?: 'TicketTypeDate';
  /** Alternate entry time for the date. */
  alternateEntryTime?: Maybe<Scalars['String']['output']>;
  eventDateId: Scalars['ID']['output'];
};

/** The subset of ticket types the caller would like returned as part of the event */
export enum TicketTypeFilter {
  All = 'ALL',
  ResaleOnly = 'RESALE_ONLY'
}

/** Ticket kind for ticket type. */
export enum TicketTypeKind {
  Addon = 'ADDON',
  ComplimentaryNamed = 'COMPLIMENTARY_NAMED',
  ComplimentaryUnnamed = 'COMPLIMENTARY_UNNAMED',
  Standard = 'STANDARD',
  Usher = 'USHER'
}

export enum TicketTypeOnSaleCondition {
  Date = 'DATE',
  TicketType = 'TICKET_TYPE'
}

export type TicketTypeOnSaleConfig = {
  __typename?: 'TicketTypeOnSaleConfig';
  endDate: Scalars['DateTime']['output'];
  startConfig: TicketTypeOnSaleStartConfig;
};

export type TicketTypeOnSaleConfigInput = {
  endDate: Scalars['DateTime']['input'];
  startConfig: TicketTypeOnSaleStartConfigInput;
};

export type TicketTypeOnSaleStartConfig = {
  __typename?: 'TicketTypeOnSaleStartConfig';
  condition: TicketTypeOnSaleCondition;
  startDate?: Maybe<Scalars['DateTime']['output']>;
  ticketTypeId?: Maybe<Scalars['ID']['output']>;
};

export type TicketTypeOnSaleStartConfigInput = {
  condition: TicketTypeOnSaleCondition;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  ticketTypeId?: InputMaybe<Scalars['ID']['input']>;
};

export enum TicketTypeOnSaleStatus {
  NotYetOnSale = 'NotYetOnSale',
  OnSale = 'OnSale',
  OnSaleEnded = 'OnSaleEnded'
}

export type TicketTypePurchaseTotal = {
  __typename?: 'TicketTypePurchaseTotal';
  ticketType: TicketType;
  total: Scalars['Int']['output'];
};

export type TicketTypesByIdInput = {
  ticketTypeIds: Array<Scalars['String']['input']>;
};

export type TicketWhereInput = {
  /** Fuzzy search query. */
  q?: InputMaybe<Scalars['String']['input']>;
};

export type TokenSet = {
  __typename?: 'TokenSet';
  accessToken?: Maybe<Scalars['String']['output']>;
  expiresAt?: Maybe<Scalars['Float']['output']>;
  idToken?: Maybe<Scalars['String']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  tokenType?: Maybe<Scalars['String']['output']>;
};

export type TopReferrersOutput = {
  __typename?: 'TopReferrersOutput';
  count?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type TopRepeatPurchasers = {
  __typename?: 'TopRepeatPurchasers';
  count?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type TopTagsOutput = {
  __typename?: 'TopTagsOutput';
  count?: Maybe<Scalars['Float']['output']>;
  tag?: Maybe<Scalars['String']['output']>;
};

export type TrackingCodeCreateInput = {
  eventId: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type TrackingCodeOrderInput = {
  eventId: Scalars['String']['input'];
  orderId: Scalars['String']['input'];
  trackingCodeTitle: Scalars['String']['input'];
};

export type TrackingCodeOutput = {
  __typename?: 'TrackingCodeOutput';
  createdAt: Scalars['DateTime']['output'];
  eventId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  sales: Scalars['Float']['output'];
  ticketsSold: Scalars['Float']['output'];
  title: Scalars['String']['output'];
  totalTicketRevenue: Scalars['Float']['output'];
  url: Scalars['String']['output'];
  visitorCount: Scalars['Float']['output'];
};

export type TrackingCodeVisitInput = {
  eventId: Scalars['String']['input'];
  trackingCodeTitle: Scalars['String']['input'];
};

export type TransactionOrderByInput = {
  createdAt?: InputMaybe<OrderByDirection>;
};

/** Transfer fee type. */
export enum TransferFeeType {
  Buyer = 'BUYER',
  Seller = 'SELLER'
}

export type TwoFactorAuthenticationCodeInput = {
  twoFactorAuthenticationCode: Scalars['String']['input'];
};

export type TwoFactorAuthenticationSetupResult = {
  __typename?: 'TwoFactorAuthenticationSetupResult';
  dataURL: Scalars['String']['output'];
  secret: Scalars['String']['output'];
};

/** UnsubscribeReason reason. */
export enum UnsubscribeReason {
  NeverSubscribed = 'NeverSubscribed',
  NoLongerInterested = 'NoLongerInterested',
  Other = 'OTHER',
  TooFrequent = 'TooFrequent'
}

export type UpdateAutomationInput = {
  automationType?: InputMaybe<AutomationType>;
  isActive: Scalars['Boolean']['input'];
  listId?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  targetReleaseId?: InputMaybe<Scalars['String']['input']>;
  targetSource?: InputMaybe<ReportingFilterSource>;
  targetSourceId?: InputMaybe<Scalars['String']['input']>;
  templateId?: InputMaybe<Scalars['Float']['input']>;
  templateName?: InputMaybe<Scalars['String']['input']>;
  timeOfDay?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UpdateCreditsInput = {
  credits: Scalars['Float']['input'];
};

/** Updates the info for a digital event/membership. */
export type UpdateDigitalInfoInput = {
  additionalEmailInfo?: InputMaybe<AdditionalEmailInfoInput>;
  /** The Postmark email template that is used to send digital pass codes. */
  emailTemplateId?: InputMaybe<Scalars['String']['input']>;
  /** The url that digital pass codes are appended to in order to access the digital event/membership. */
  url?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateEmailCustomizationInput = {
  richTextTemplate?: InputMaybe<Scalars['JSON']['input']>;
  status?: InputMaybe<EmailCustomizationStatus>;
  style?: InputMaybe<EmailStyleInput>;
  subject?: InputMaybe<Scalars['JSON']['input']>;
};

export type UpdateEventAddonInput = {
  /** Image banner specific for a ticket type on the print at home ticket */
  addonImage?: InputMaybe<Scalars['Upload']['input']>;
  /** The brief description of the addon. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Indicates whether naming the addon is possible or not. */
  enableNaming?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether hide QR code on ticket. */
  hideQRCode?: InputMaybe<Scalars['Boolean']['input']>;
  /** Images for the ticket gallery */
  imageGallery?: InputMaybe<Array<ImageGalleryItemInput>>;
  insideFee?: InputMaybe<Scalars['Float']['input']>;
  /** The active status of the addon. */
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** The name of the addon. */
  name?: InputMaybe<Scalars['String']['input']>;
  namingFields?: InputMaybe<Array<FormFieldInput>>;
  /** The price associated with the addon. */
  price?: InputMaybe<Scalars['Float']['input']>;
  /** Maximum quantity to be sold for the addon. */
  quantity?: InputMaybe<Scalars['Float']['input']>;
  /** The restrictions applied to the addon. */
  restrictions?: InputMaybe<Scalars['String']['input']>;
};

/** Updates an event. */
export type UpdateEventInput = {
  accessibility?: InputMaybe<Scalars['String']['input']>;
  /** The artists performing at the event. */
  artists?: InputMaybe<Array<CreateArtistInput>>;
  backgroundImage?: InputMaybe<Scalars['Upload']['input']>;
  backgroundImageFullPage?: InputMaybe<Scalars['Upload']['input']>;
  /** Booking fee. */
  bookingFee?: InputMaybe<Scalars['Float']['input']>;
  /** Booking fee type. */
  bookingFeeType?: InputMaybe<FeeType>;
  /** The fee the buyer pays for transferring a ticket. */
  buyerTransferringTicketFee?: InputMaybe<Scalars['Float']['input']>;
  /** Whether changing seats is available. */
  canChangeSeats?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether naming ticket is available. */
  canNameTicket?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether renaming ticket is available. */
  canRenameTicket?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether transfering ticket is available. */
  canTransferTicket?: InputMaybe<Scalars['Boolean']['input']>;
  canUsePoints?: InputMaybe<Scalars['Boolean']['input']>;
  /** The fee for changing seats for the event ticket. */
  changingSeatsFee?: InputMaybe<Scalars['Float']['input']>;
  /** Whether event is checking for vaccine passports on entry */
  checkForVaccinePass?: InputMaybe<Scalars['Boolean']['input']>;
  /** Event dates. */
  dates?: InputMaybe<Array<CreateEventDate>>;
  /** Event description. */
  description?: InputMaybe<Scalars['String']['input']>;
  descriptionImage?: InputMaybe<Scalars['Upload']['input']>;
  /** Represents additional info required to host a digital event. */
  digitalInfo?: InputMaybe<UpdateDigitalInfoInput>;
  /** Doors open time. */
  doorsOpen?: InputMaybe<Scalars['String']['input']>;
  emailNotification?: InputMaybe<Scalars['String']['input']>;
  enablePaymentPlans?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether release codes are visible on the event information page */
  enableReleaseCodes?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether the waitlist is visible on the event information page */
  enableWaitlist?: InputMaybe<Scalars['Boolean']['input']>;
  /** The kind of event. */
  eventKind?: InputMaybe<EventKind>;
  gaVenue?: InputMaybe<CreateGaEventVenueInput>;
  /** The payment gateways enabled for the event. */
  gateways?: InputMaybe<Array<Scalars['String']['input']>>;
  /** The genres of the event. */
  genres?: InputMaybe<Array<CreateGenreInput>>;
  hardCopyTicketBanner?: InputMaybe<Scalars['Upload']['input']>;
  hiddenFromPublic?: InputMaybe<Scalars['Boolean']['input']>;
  importantNotice?: InputMaybe<Scalars['String']['input']>;
  /** Inside fees for the event */
  insideFeeDetails?: InputMaybe<Array<InsideFeeDetailsInput>>;
  invoiceInformation?: InputMaybe<Scalars['String']['input']>;
  /** Event active status. */
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether the event is discoverable on BandsInTown */
  isDiscoverable?: InputMaybe<Scalars['Boolean']['input']>;
  /** Event featured status. */
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether the event should be marked as a festival in BandsInTown */
  isFestival?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether event is R-18. */
  isR18?: InputMaybe<Scalars['Boolean']['input']>;
  listedReleaseOptions?: InputMaybe<ListedReleaseOptionsInput>;
  logo?: InputMaybe<Scalars['Upload']['input']>;
  merchantReference?: InputMaybe<Scalars['String']['input']>;
  paymentPlanScheduleOptions?: InputMaybe<Array<ScheduleOptionInput>>;
  pixelId?: InputMaybe<Scalars['String']['input']>;
  presaleInformation?: InputMaybe<Scalars['String']['input']>;
  printBanner1?: InputMaybe<Scalars['Upload']['input']>;
  printBanner2?: InputMaybe<Scalars['Upload']['input']>;
  productUpsell?: InputMaybe<ProductUpsellInput>;
  redirectURL?: InputMaybe<Scalars['String']['input']>;
  /** Event season. */
  season?: InputMaybe<Scalars['String']['input']>;
  /** The fee the seller pays for transferring a ticket. */
  sellerTransferringTicketFee?: InputMaybe<Scalars['Float']['input']>;
  seoMetadata?: InputMaybe<SeoMetadataInput>;
  /** Shipping options. */
  shippingOptions?: InputMaybe<ShippingOptionsInput>;
  /** Display doors open time. */
  showDoorsOpen?: InputMaybe<Scalars['Boolean']['input']>;
  /** Display event end time. */
  showEndTime?: InputMaybe<Scalars['Boolean']['input']>;
  /** Display event start time. */
  showStartTime?: InputMaybe<Scalars['Boolean']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  termsAndConditions?: InputMaybe<Scalars['String']['input']>;
  thumbnail?: InputMaybe<Scalars['Upload']['input']>;
  ticketCover?: InputMaybe<TicketCoverInput>;
  /** Date at which tickets are viewable/printable from. */
  ticketsViewableFromDate?: InputMaybe<Scalars['String']['input']>;
  /** Event title. */
  title?: InputMaybe<Scalars['String']['input']>;
  venue?: InputMaybe<Scalars['String']['input']>;
  /** The end date of the presale registration. */
  waitlistEndDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** The start date of the presale registration. */
  waitlistStartDate?: InputMaybe<Scalars['DateTime']['input']>;
  zonesAllocatedGates?: InputMaybe<Array<ZoneAllocatedGateInput>>;
};

export type UpdateEventMultiBuyPromotionInput = {
  buyQuantity?: InputMaybe<Scalars['Float']['input']>;
  buyTicketTypeId?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  getQuantity?: InputMaybe<Scalars['Float']['input']>;
  getTicketTypeId?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateEventPromoCodeInput = {
  /** The unique code that represents the promotion. */
  code?: InputMaybe<Scalars['String']['input']>;
  /** The discount amount of the promotion. */
  discountAmount?: InputMaybe<Scalars['Float']['input']>;
  /** The discount type associated with the promotion. */
  discountType?: InputMaybe<DiscountType>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** The end date condition of the promotion. Returns `null` when inactive. */
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  eventAddons?: InputMaybe<Array<Scalars['String']['input']>>;
  /** The maximum order amount condition of the promotion. Returns `null` when inactive. */
  maxOrderAmount?: InputMaybe<Scalars['Float']['input']>;
  /** The maximum amount of use condition of the promotion. Returns `null` when inactive. */
  maxUsage?: InputMaybe<Scalars['Float']['input']>;
  /** The minimum order amount condition of the promotion. Returns `null` when inactive. */
  minOrderAmount?: InputMaybe<Scalars['Float']['input']>;
  /** The start date condition of the promotion. Returns `null` when inactive. */
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  ticketTypes?: InputMaybe<Array<Scalars['String']['input']>>;
  type?: InputMaybe<EventPromoCodeType>;
};

export type UpdateExhibitorInput = {
  allowCustomQuestions: Scalars['Boolean']['input'];
  email: Scalars['String']['input'];
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  shouldInvalidateLogins: Scalars['Boolean']['input'];
};

/** Updates an EventForecst */
export type UpdateForecastInput = {
  eventId: Scalars['String']['input'];
  /** The zones and forecast inputs. */
  scenarios: Array<ScenarioInput>;
  /** The zones and forecast inputs. */
  zones: Array<ForecastZoneInput>;
};

export type UpdateHoldOrderInput = {
  /** List of actions to perform on line items. */
  lineItemActions: Array<LineItemActionInput>;
  /** Multi buy promotion id. */
  multiBuyId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateIntegrationInput = {
  bnplEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  bnplTransactionFeePercent?: InputMaybe<Scalars['Float']['input']>;
  createAccount?: InputMaybe<Scalars['Boolean']['input']>;
  facebookPageId?: InputMaybe<Scalars['String']['input']>;
  facebookTempToken?: InputMaybe<Scalars['String']['input']>;
  facebookUserId?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  paymentMethodType?: InputMaybe<Scalars['String']['input']>;
  publicKey?: InputMaybe<Scalars['String']['input']>;
  secretKey?: InputMaybe<Scalars['String']['input']>;
  transactionFee?: InputMaybe<Scalars['Float']['input']>;
  transactionFee2?: InputMaybe<Scalars['Float']['input']>;
  transactionFeeType?: InputMaybe<FeeType>;
  transactionFeeType2?: InputMaybe<FeeType>;
  type: IntegrationType;
  wcPxPostPublicKey?: InputMaybe<Scalars['String']['input']>;
  wcPxPostSecretKey?: InputMaybe<Scalars['String']['input']>;
  webhookUrl?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateMembershipAddonInput = {
  /** Image banner specific for a ticket type on the print at home ticket */
  addonImage?: InputMaybe<Scalars['Upload']['input']>;
  /** The brief description of the addon. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Indicates whether naming the addon is possible or not. */
  enableNaming?: InputMaybe<Scalars['Boolean']['input']>;
  /** The active status of the addon. */
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** The name of the addon. */
  name?: InputMaybe<Scalars['String']['input']>;
  namingFields?: InputMaybe<Array<FormFieldInput>>;
  /** The price associated with the addon. */
  price?: InputMaybe<Scalars['Float']['input']>;
  /** Maximum quantity to be sold for the addon. */
  quantity?: InputMaybe<Scalars['Float']['input']>;
  /** The restrictions applied to the addon. */
  restrictions?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateMembershipInput = {
  accessibility?: InputMaybe<Scalars['String']['input']>;
  backgroundImage?: InputMaybe<Scalars['Upload']['input']>;
  banner?: InputMaybe<Scalars['Upload']['input']>;
  /** The booking fee for the membership. */
  bookingFee?: InputMaybe<Scalars['Float']['input']>;
  /** The booking fee type of the membership. */
  bookingFeeType?: InputMaybe<FeeType>;
  /** Whether naming a membership is available. */
  canChangeSeats?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether naming a membership is available. */
  canNameMembership?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether renaming a membership is available. */
  canRenameMembership?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether individual event tickets can be transferred. */
  canTransferTickets?: InputMaybe<Scalars['Boolean']['input']>;
  canUsePoints?: InputMaybe<Scalars['Boolean']['input']>;
  /** The fee for changing seats for the membership. */
  changingSeatsFee?: InputMaybe<Scalars['Float']['input']>;
  /** The description of the membership. */
  description?: InputMaybe<Scalars['String']['input']>;
  descriptionImage?: InputMaybe<Scalars['Upload']['input']>;
  /** Represents additional info required to host a digital event. */
  digitalInfo?: InputMaybe<UpdateDigitalInfoInput>;
  emailNotification?: InputMaybe<Scalars['String']['input']>;
  enableAutoRenew?: InputMaybe<Scalars['Boolean']['input']>;
  enablePaymentPlans?: InputMaybe<Scalars['Boolean']['input']>;
  /** The end date of the membership. */
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** The events associated with the membership. */
  events?: InputMaybe<Array<Scalars['String']['input']>>;
  /** The payment gateways enabled for the membership. */
  gateways?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Flag to determine if the membership is hidden from the public */
  hiddenFromPublic?: InputMaybe<Scalars['Boolean']['input']>;
  importantNotice?: InputMaybe<Scalars['String']['input']>;
  invoiceInformation?: InputMaybe<Scalars['String']['input']>;
  /** The active status of the membership. */
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether the membership is ticketed. */
  isTicketed?: InputMaybe<Scalars['Boolean']['input']>;
  /** The kind of membership. */
  membershipKind?: InputMaybe<MembershipKind>;
  /** The zones of the seating. */
  membershipZones?: InputMaybe<Array<UpdateMembershipZoneInput>>;
  /** Name of the membership. */
  name?: InputMaybe<Scalars['String']['input']>;
  paymentPlanScheduleOptions?: InputMaybe<Array<ScheduleOptionInput>>;
  /** The previous memberships related to the membership. */
  previousMemberships?: InputMaybe<Array<Scalars['String']['input']>>;
  printBanner1?: InputMaybe<Scalars['Upload']['input']>;
  printBanner2?: InputMaybe<Scalars['Upload']['input']>;
  productUpsell?: InputMaybe<ProductUpsellInput>;
  /** The season associated with the membership. */
  season?: InputMaybe<Scalars['String']['input']>;
  seoMetadata?: InputMaybe<SeoMetadataInput>;
  /** Shipping options. */
  shippingOptions?: InputMaybe<ShippingOptionsInput>;
  showSchedule?: InputMaybe<Scalars['Boolean']['input']>;
  /** The start date of the membership. */
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  termsAndConditions?: InputMaybe<Scalars['String']['input']>;
  thumbnail?: InputMaybe<Scalars['Upload']['input']>;
  ticketCover?: InputMaybe<MembershipTicketCoverInput>;
};

export type UpdateMembershipMultiBuyPromotionInput = {
  buyMembershipTypeId?: InputMaybe<Scalars['String']['input']>;
  buyQuantity?: InputMaybe<Scalars['Float']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  getMembershipTypeId?: InputMaybe<Scalars['String']['input']>;
  getQuantity?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateMembershipPromoCodeInput = {
  /** The unique code that represents the promotion. */
  code?: InputMaybe<Scalars['String']['input']>;
  /** The discount amount of the promotion. */
  discountAmount?: InputMaybe<Scalars['Float']['input']>;
  /** The discount type associated with the promotion. */
  discountType?: InputMaybe<DiscountType>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** The end date condition of the promotion. Returns `null` when inactive. */
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** The maximum order amount condition of the promotion. Returns `null` when inactive. */
  maxOrderAmount?: InputMaybe<Scalars['Float']['input']>;
  /** The maximum amount of use condition of the promotion. Returns `null` when inactive. */
  maxUsage?: InputMaybe<Scalars['Float']['input']>;
  membershipAddons?: InputMaybe<Array<Scalars['String']['input']>>;
  membershipTypes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** The minimum order amount condition of the promotion. Returns `null` when inactive. */
  minOrderAmount?: InputMaybe<Scalars['Float']['input']>;
  /** The start date condition of the promotion. Returns `null` when inactive. */
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  type?: InputMaybe<MembershipPromoCodeType>;
};

export type UpdateMembershipTypeEventTransferPriceInput = {
  membershipTypeId: Scalars['String']['input'];
  membershipZoneId: Scalars['String']['input'];
  prices: Array<MembershipTypeTransferPriceInput>;
};

export type UpdateMembershipTypeInput = {
  /** Restrictions for the membership type. */
  description?: InputMaybe<Scalars['String']['input']>;
  isGuestCard?: InputMaybe<Scalars['Boolean']['input']>;
  isHidden?: InputMaybe<Scalars['Boolean']['input']>;
  /** The kind of the membership type. */
  kind?: InputMaybe<MembershipTypeKind>;
  maxPurchaseQuantity?: InputMaybe<Scalars['Float']['input']>;
  minPurchaseQuantity?: InputMaybe<Scalars['Float']['input']>;
  /** Name of the membership type. */
  name?: InputMaybe<Scalars['String']['input']>;
  namingFields?: InputMaybe<Array<FormFieldInput>>;
  /** The number of membership tickets that must be purchased together in this set. */
  quantitySet?: InputMaybe<Scalars['Float']['input']>;
  /** Restrictions for the membership type. */
  restrictions?: InputMaybe<Scalars['String']['input']>;
  /** The ticket fee. */
  ticketFee?: InputMaybe<Scalars['Float']['input']>;
  /** The ticket fee type. */
  ticketFeeType?: InputMaybe<FeeType>;
};

export type UpdateMembershipZoneInput = {
  /** The  memebershipZone id. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The active status of the membership seating. Defaults to `false`. */
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** The list of membership types of the seating zone. */
  membershipTypes: Array<UpdateMembershipZoneMembershipTypeInput>;
  /** The pricing level of the seating zone. Will be set to `zone` for non-seated events. */
  pricingLevel: ZonePricingLevel;
  /** The  zone. */
  zone: MembershipZoneZoneInput;
};

export type UpdateMembershipZoneMembershipTypeInput = {
  /** The active status of the membership type. Defaults to `false`. */
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** The membership type id of the seating. */
  membershipTypeId: Scalars['String']['input'];
  /** The price of the zone per membership. Pass null if `pricingLevel` of the parent is set to other than `zone`. */
  price?: InputMaybe<Scalars['Float']['input']>;
  /** The sections of the membership seating. Pass null if `pricingLevel` of the parent is set to other than `section`. */
  sections?: InputMaybe<Array<UpdateMembershipZoneMembershipTypeSectionInput>>;
};

export type UpdateMembershipZoneMembershipTypeSectionInput = {
  /** The section name. Should be equal to one of the sections defined in the venue. */
  name: Scalars['String']['input'];
  price?: InputMaybe<Scalars['Float']['input']>;
  /** The section id. Should be equal to one of the sections defined in the venue. */
  sectionId: Scalars['String']['input'];
};

export type UpdateOrderInput = {
  /** If the order is starting a membership subscription */
  automaticRenewMambership?: InputMaybe<Scalars['Boolean']['input']>;
  /** Billing address provided by the customer. */
  billingAddress?: InputMaybe<AddressInput>;
  /** Buyer details. */
  buyerInformation?: InputMaybe<BuyerInformationInput>;
  /** The delivery method chosen by the customer. */
  deliveryMethod?: InputMaybe<ShippingOption>;
  /** If the purchaser has added dietary requirements */
  dietaryRequirements?: InputMaybe<Scalars['String']['input']>;
  /** How the user heard about the event */
  heardAboutUs?: InputMaybe<HeardAboutUsType>;
  /** Heard about us details when heardAboutUs is other */
  heardAboutUsDetails?: InputMaybe<Scalars['String']['input']>;
  /** Shipping address provided by the customer. */
  shippingAddress?: InputMaybe<AddressInput>;
  /** Whether the shipping address matches the billing address. */
  shippingAddressMatchesBillingAddress?: InputMaybe<Scalars['Boolean']['input']>;
  /** The step the order currently is in. */
  step: Scalars['Float']['input'];
  /**
   * Whether the order is updated on admin portal.
   *     If the user is an admin, we won't update the details even if this is true.
   */
  updateDetails?: InputMaybe<Scalars['Boolean']['input']>;
  userAcquisition?: InputMaybe<UserAcquisition>;
};

export type UpdateOrderStatusInput = {
  compReason?: InputMaybe<Scalars['String']['input']>;
  isComp?: InputMaybe<Scalars['Boolean']['input']>;
  /** Selected payment method if order status is paid (allowed: cash, eftpos, invoice, other). */
  method?: InputMaybe<PaymentProvider>;
  /** Will send the customer an invoice email for hold orders if set */
  sendHoldOrderCustomerEmail?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to generate a Xero invoice for order. Only applies to hold orders for organizations with Xero integration enabled. */
  shouldGenerateXeroInvoice?: InputMaybe<Scalars['Boolean']['input']>;
  /** Will not send order confirmation email if set */
  skipOrderConfirmation?: InputMaybe<Scalars['Boolean']['input']>;
  /** Order status to transition to. */
  status?: InputMaybe<OrderStatus>;
};

export type UpdateOrderTicketCoverInput = {
  includeTicketCover: Scalars['Boolean']['input'];
};

export type UpdateOrganizationInput = {
  address?: InputMaybe<AddressInput>;
  branding?: InputMaybe<BrandingInput>;
  currency?: InputMaybe<Scalars['String']['input']>;
  customTaxName?: InputMaybe<Scalars['String']['input']>;
  customTaxRate?: InputMaybe<Scalars['Float']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  helpLink?: InputMaybe<Scalars['String']['input']>;
  landingPage?: InputMaybe<LandingPage>;
  marketing?: InputMaybe<MarketingInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  privacyPolicy?: InputMaybe<Scalars['String']['input']>;
  /** Shipping options. */
  shippingLabels?: InputMaybe<ShippingLabelsInput>;
  showMembershipRenewal?: InputMaybe<Scalars['Boolean']['input']>;
  showMemberships?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  supportInfo?: InputMaybe<Scalars['String']['input']>;
  taxNumber?: InputMaybe<Scalars['String']['input']>;
  taxRate?: InputMaybe<Scalars['Float']['input']>;
  termsAndConditions?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePasswordInput = {
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};

export type UpdatePointInput = {
  gatewayIds: Array<Scalars['String']['input']>;
  isEnabled: Scalars['Boolean']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  termsAndConditions?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePointItemInput = {
  amount: Scalars['Float']['input'];
  backgroundImage?: InputMaybe<Scalars['Upload']['input']>;
  banner?: InputMaybe<Scalars['Upload']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  descriptionImage?: InputMaybe<Scalars['Upload']['input']>;
  isVisible: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  thumbnail?: InputMaybe<Scalars['Upload']['input']>;
};

export type UpdatePosUserInput = {
  accessCode?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateProfileInput = {
  accessEventIds?: InputMaybe<Array<Scalars['String']['input']>>;
  accessMembershipIds?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Billing address provided by the user. */
  billingAddress?: InputMaybe<PartialAddressInput>;
  birthDate?: InputMaybe<Scalars['DateTime']['input']>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  credits?: InputMaybe<Scalars['Float']['input']>;
  /** Elevate users privileges from user to admin. */
  elevatePrivileges?: InputMaybe<Scalars['Boolean']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Gender>;
  instagramUsername?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  /** To receive scanner login reminder emails. */
  receiveScannerEmail?: InputMaybe<Scalars['Boolean']['input']>;
  referralId?: InputMaybe<Scalars['String']['input']>;
  /** Shipping address provided by the user. */
  shippingAddress?: InputMaybe<PartialAddressInput>;
  /** Whether the shipping address matches the billing address. */
  shippingAddressMatchesBillingAddress?: InputMaybe<Scalars['Boolean']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  taxNumber?: InputMaybe<Scalars['String']['input']>;
  twoFactorAuthenticationSecret?: InputMaybe<Scalars['String']['input']>;
  usableForEmailMarketing?: InputMaybe<Scalars['Boolean']['input']>;
  usableForSMSMarketing?: InputMaybe<Scalars['Boolean']['input']>;
  userAcquisition?: InputMaybe<UserAcquisition>;
};

/** Updates a Referral Campaign */
export type UpdateReferralCampaignDto = {
  eventId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  membershipId?: InputMaybe<Scalars['String']['input']>;
  referralOwnerRewardQuantity?: InputMaybe<Scalars['Float']['input']>;
  referralOwnerRewardQuantityType?: InputMaybe<ReferralRewardQuantityType>;
  referralOwnerRewardType?: InputMaybe<ReferralRewardType>;
  referralReleaseId?: InputMaybe<Scalars['String']['input']>;
  referralUserRewardQuantity?: InputMaybe<Scalars['Float']['input']>;
  referralUserRewardQuantityType?: InputMaybe<ReferralRewardQuantityType>;
  referralUserRewardType?: InputMaybe<ReferralRewardType>;
};

export type UpdateReleaseInput = {
  /** Can this release use Windcaves Account2Account functionality */
  allowAccount2Account?: InputMaybe<Scalars['Boolean']['input']>;
  /** Can customers create hold orders for this release */
  allowHoldOrders?: InputMaybe<Scalars['Boolean']['input']>;
  /** Are comps visible to public */
  allowPublicComp?: InputMaybe<Scalars['Boolean']['input']>;
  /** Request purchasers  */
  askForDietaryRequirements?: InputMaybe<Scalars['Boolean']['input']>;
  /** Ask how did you heard about us during the purchasing flow */
  askHowDidYouHearAboutUs?: InputMaybe<Scalars['Boolean']['input']>;
  channels?: InputMaybe<Array<Scalars['String']['input']>>;
  /** The end condition of the release. */
  endCondition?: InputMaybe<ReleaseEndCondition>;
  /** The end date of the release. Pass null if the endCondition is set to other than `date`. */
  endConditionDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** The quantity limit of the release. Pass null if the endCondition is set to other than `quantity`. */
  endConditionQuantity?: InputMaybe<Scalars['Float']['input']>;
  /** The status of the release. */
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  maxPurchaseQuantity?: InputMaybe<Scalars['Float']['input']>;
  minPurchaseQuantity?: InputMaybe<Scalars['Float']['input']>;
  /** Release name. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The password for the unlisted release. Pass null if the release type is set to other than `unlisted`. */
  password?: InputMaybe<Scalars['String']['input']>;
  presaleHeader?: InputMaybe<Scalars['Upload']['input']>;
  /** The information of the unlisted release. Pass null if the `type` is set to other than `unlisted`. */
  presaleInformation?: InputMaybe<Scalars['String']['input']>;
  presaleLogo?: InputMaybe<Scalars['Upload']['input']>;
  /** The title of the unlisted release. Pass null if the `type` is set to other than `unlisted`. */
  presaleTitle?: InputMaybe<Scalars['String']['input']>;
  releaseEventAddons?: InputMaybe<Array<Scalars['String']['input']>>;
  /** The information that will be shown to customers on the ticketing page. */
  releaseNotes?: InputMaybe<Scalars['String']['input']>;
  /** The zones of the release. */
  releaseZones?: InputMaybe<Array<ReleaseZoneInput>>;
  /** The slug for the unlisted release. Pass null if the release type is set to other than `unlisted`. */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** The start condition of the release. */
  startCondition?: InputMaybe<ReleaseStartCondition>;
  /** The start date of the release. Pass null if the startCondition is set to other than `date`. */
  startConditionDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Release type. */
  type?: InputMaybe<ReleaseType>;
};

export type UpdateReleaseZoneInput = {
  admission: Scalars['Boolean']['input'];
  capacity?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** Images for the ticket gallery */
  imageGallery?: InputMaybe<Array<ImageGalleryItemInput>>;
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
};

export type UpdateResaleConfigInput = {
  /** The fee the buyer pays for transferring a ticket. */
  buyerTransferringTicketFee?: InputMaybe<Scalars['Float']['input']>;
  canTransferTicket: Scalars['Boolean']['input'];
  eventId: Scalars['String']['input'];
  /** The fee the seller pays for transferring a ticket. */
  sellerTransferringTicketFee?: InputMaybe<Scalars['Float']['input']>;
  ticketResaleEnabled: Scalars['Boolean']['input'];
  ticketResaleWaitlistEnabled: Scalars['Boolean']['input'];
};

export type UpdateSmsBroadcastInput = {
  id: Scalars['String']['input'];
  marketingFilters?: InputMaybe<Array<BroadcastMarketingFiltersV2Input>>;
  message: Scalars['String']['input'];
  /** If the input contains send time, then this is a scheduled SMS */
  scheduledAt?: InputMaybe<Scalars['DateTime']['input']>;
  status: BroadcastStatus;
  subject: Scalars['String']['input'];
  tags?: InputMaybe<Array<BroadcastTags>>;
  testPhoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateScoutCommunicationInput = {
  campaignId?: InputMaybe<Scalars['String']['input']>;
  includeOptedOutOfMarketing?: InputMaybe<Scalars['Boolean']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  listId?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  purpose?: InputMaybe<ScoutPurpose>;
  scheduledAt?: InputMaybe<Scalars['DateTime']['input']>;
  segmentId?: InputMaybe<Scalars['String']['input']>;
  shouldUpdate?: InputMaybe<Scalars['Boolean']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  templateId?: InputMaybe<Scalars['Float']['input']>;
  trackReleaseId?: InputMaybe<Scalars['String']['input']>;
  trackSource?: InputMaybe<ReportingFilterSource>;
  trackSourceId?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<ScoutCommunicationType>;
};

export type UpdateScoutCommunicationUserInput = {
  stage: ScoutStage;
  usableForEmailMarketing?: InputMaybe<Scalars['Boolean']['input']>;
  usableForSMSMarketing?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateScoutInput = {
  exclude?: InputMaybe<Array<FilterSelectionInput>>;
  isActive: Scalars['Boolean']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  promoteTo?: InputMaybe<Array<FilterSelectionInput>>;
};

export type UpdateSeasonInput = {
  backgroundImageFullPage?: InputMaybe<Scalars['Upload']['input']>;
  /** Season description. */
  description?: InputMaybe<Scalars['String']['input']>;
  displayOrder?: InputMaybe<Scalars['Float']['input']>;
  /** Season active status. */
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Season name. */
  name?: InputMaybe<Scalars['String']['input']>;
  thumbnail?: InputMaybe<Scalars['Upload']['input']>;
};

export type UpdateTagInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTicketHolderInput = {
  /** Birth date of the ticket holder. */
  birthDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Comments of the ticket holder. */
  comments?: InputMaybe<Scalars['String']['input']>;
  /** Company name of the ticket holder (optional). */
  companyName?: InputMaybe<Scalars['String']['input']>;
  customFields?: InputMaybe<Array<CustomFieldInput>>;
  /** Dietary requirements of the ticket holder. */
  dietaryRequirements?: InputMaybe<Scalars['String']['input']>;
  /** Residential address in Dunedin */
  dunedinResidentialAddress?: InputMaybe<Scalars['String']['input']>;
  /** Email of the ticket holder. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Phone number of the emergency contact */
  emergencyContact?: InputMaybe<Scalars['String']['input']>;
  /** Phone number of the emergency contact */
  emergencyContactRelationship?: InputMaybe<Scalars['String']['input']>;
  /** Name of the emergency contact */
  emergencyName?: InputMaybe<Scalars['String']['input']>;
  /** First name of the ticket holder. */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** Gender of the ticket holder. */
  gender?: InputMaybe<Gender>;
  /** Last name of the ticket holder. */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** How long someone is staying at an event */
  lengthOfStay?: InputMaybe<Scalars['String']['input']>;
  /** License plate of the ticket holder. */
  licensePlate?: InputMaybe<Scalars['String']['input']>;
  /** Since when the ticket holder is a member. */
  memberSince?: InputMaybe<Scalars['DateTime']['input']>;
  /** Membership number of the ticket holder. */
  membershipNumber?: InputMaybe<Scalars['String']['input']>;
  /** Phone number of the ticket holder. */
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  /** Postal code of the ticket holder. */
  postalCode?: InputMaybe<Scalars['String']['input']>;
  /** Student id of the ticket holder */
  studentId?: InputMaybe<Scalars['String']['input']>;
  /** Whether the ticket holder opts in to email marketing */
  usableForEmailMarketing?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether the ticket holder opts in to text marketing */
  usableForSMSMarketing?: InputMaybe<Scalars['Boolean']['input']>;
  vaccinePass?: InputMaybe<Scalars['Upload']['input']>;
};

export type UpdateTicketTypeInput = {
  /** Booking fee. */
  bookingFee?: InputMaybe<Scalars['Float']['input']>;
  /** Booking fee type. */
  bookingFeeType?: InputMaybe<FeeType>;
  /** Event dates. */
  dates?: InputMaybe<Array<CreateTicketTypeDate>>;
  /** Description of the ticket */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Doors open time. */
  doorsOpen?: InputMaybe<Scalars['String']['input']>;
  /** Custom entry dates for this ticket type. */
  entryDates?: InputMaybe<Array<CreateEventDate>>;
  /** The amount of people in a group. Returns null if the ticket type is not grouped. */
  groupAmount?: InputMaybe<Scalars['Float']['input']>;
  /** Images for the ticket gallery */
  imageGallery?: InputMaybe<Array<ImageGalleryItemInput>>;
  /** Mark a ticket type as high demand */
  inHighDemand?: InputMaybe<Scalars['Boolean']['input']>;
  /** isActive for v2 event */
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** isComplimentary for v2 event */
  isComplimentary?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether the ticket type is grouped. */
  isGrouped?: InputMaybe<Scalars['Boolean']['input']>;
  /** The kind of the ticket type. */
  kind?: InputMaybe<TicketTypeKind>;
  maxPurchaseQuantity?: InputMaybe<Scalars['Float']['input']>;
  minPurchaseQuantity?: InputMaybe<Scalars['Float']['input']>;
  /** Ticket group name. */
  name?: InputMaybe<Scalars['String']['input']>;
  namingFields?: InputMaybe<Array<FormFieldInput>>;
  onSaleConfig?: InputMaybe<TicketTypeOnSaleConfigInput>;
  /** Price for v2 event */
  price?: InputMaybe<Scalars['Float']['input']>;
  /** Print at home information for the ticket group. */
  printAtHomeInformation?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Float']['input']>;
  /** The number of tickets that must be purchased together in this set. */
  quantitySet?: InputMaybe<Scalars['Float']['input']>;
  /** releaseZoneId for v2 event */
  releaseZoneId?: InputMaybe<Scalars['String']['input']>;
  /** Restrictions for the ticket group. */
  restrictions?: InputMaybe<Scalars['String']['input']>;
  /** Display doors open time. */
  showDoorsOpen?: InputMaybe<Scalars['Boolean']['input']>;
  /** Display event end time. */
  showEndTime?: InputMaybe<Scalars['Boolean']['input']>;
  /** Display event start time. */
  showStartTime?: InputMaybe<Scalars['Boolean']['input']>;
  /** MMark a ticket type as sold out */
  soldOut?: InputMaybe<Scalars['Boolean']['input']>;
  /** Per ticket stadium levy ticket fee. */
  stadiumLevyFee?: InputMaybe<Scalars['Float']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Image banner specific for a ticket type on the print at home ticket */
  ticketBanner?: InputMaybe<Scalars['Upload']['input']>;
  /** Image banner specific for a ticket type on the print at home ticket */
  ticketImage?: InputMaybe<Scalars['Upload']['input']>;
};

export type UpdateUserInput = {
  accessEventIds?: InputMaybe<Array<Scalars['String']['input']>>;
  accessMembershipIds?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Billing address provided by the user. */
  billingAddress?: InputMaybe<PartialAddressInput>;
  birthDate?: InputMaybe<Scalars['DateTime']['input']>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  credits?: InputMaybe<Scalars['Float']['input']>;
  /** Elevate users privileges from user to admin. */
  elevatePrivileges?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Gender>;
  instagramUsername?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  /** To receive scanner login reminder emails. */
  receiveScannerEmail?: InputMaybe<Scalars['Boolean']['input']>;
  referralId?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<Array<Role>>;
  /** Shipping address provided by the user. */
  shippingAddress?: InputMaybe<PartialAddressInput>;
  /** Whether the shipping address matches the billing address. */
  shippingAddressMatchesBillingAddress?: InputMaybe<Scalars['Boolean']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  taxNumber?: InputMaybe<Scalars['String']['input']>;
  twoFactorAuthenticationSecret?: InputMaybe<Scalars['String']['input']>;
  usableForEmailMarketing?: InputMaybe<Scalars['Boolean']['input']>;
  usableForSMSMarketing?: InputMaybe<Scalars['Boolean']['input']>;
  userAcquisition?: InputMaybe<UserAcquisition>;
};

export type UpdateVenueInput = {
  accessibilityInfo?: InputMaybe<Scalars['String']['input']>;
  address?: InputMaybe<AddressInput>;
  capacity?: InputMaybe<Scalars['Int']['input']>;
  capacityUtilization?: InputMaybe<Scalars['Float']['input']>;
  gates?: InputMaybe<Array<GateInput>>;
  locale?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<CoordinateInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
  zones?: InputMaybe<Array<ZoneInput>>;
};

export type UpsertAccessCodeInput = {
  /** The access code you want to supply to users when they purchase a membership */
  code?: InputMaybe<Scalars['String']['input']>;
  /** If true, deletes all access codes from the membership */
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** The uuids of the membership types linked to this access code */
  membershipTypeIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** The number of comp entities this access code can be used for */
  quantityComp?: InputMaybe<Scalars['Float']['input']>;
  /** The number of paid entities this access code can be used for */
  quantityPaid?: InputMaybe<Scalars['Float']['input']>;
};

export type UsSegment = {
  __typename?: 'UsSegment';
  accuracy: Scalars['Float']['output'];
  /** Address that was provided for the Us Segment */
  address: PartialAddress;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  organization: Organization;
  /** A single letter representation of the segment a user is in */
  segment: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
};

export type User = {
  __typename?: 'User';
  LTV: Scalars['Float']['output'];
  /** The IDs of the events the user can access when their account is scoped for only certain events */
  accessEventIds?: Maybe<Array<Scalars['String']['output']>>;
  /** The IDs of the memberships the user can access when their account is scoped for only certain events */
  accessMembershipIds?: Maybe<Array<Scalars['String']['output']>>;
  /** Billing address associated with the user. */
  billingAddress?: Maybe<PartialAddress>;
  birthDate?: Maybe<Scalars['DateTime']['output']>;
  /** The company name of the user. */
  companyName?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  /** User credits balance */
  credits?: Maybe<Scalars['Float']['output']>;
  e164Number?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  eventTickets: Array<Ticket>;
  firstName: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  gender?: Maybe<Gender>;
  hasMemberships: Scalars['Boolean']['output'];
  hasOrders: Scalars['Boolean']['output'];
  hasPassword: Scalars['Boolean']['output'];
  hasTickets: Scalars['Boolean']['output'];
  hasVerifiedEmail: Scalars['Boolean']['output'];
  history: HistoryConnection;
  id: Scalars['ID']['output'];
  /** User instagram username */
  instagramUsername?: Maybe<Scalars['String']['output']>;
  internationalPhoneNumber?: Maybe<InternationalPhoneNumberOutput>;
  isLoggedInWithLinkedAccount: Scalars['Boolean']['output'];
  isTwoFactorAuthenticationEnabled: Scalars['Boolean']['output'];
  lastLoginAttemptedAt: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  lastTimeLoggedInAt?: Maybe<Scalars['DateTime']['output']>;
  loginAttempts: Scalars['String']['output'];
  membershipTickets: Array<Ticket>;
  orders: OrderConnection;
  organization: Organization;
  otherUnsubscribeReason?: Maybe<Scalars['String']['output']>;
  /** Permision set based on roles */
  permissions: Array<Permission>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  /** User points balance */
  points: Scalars['Float']['output'];
  receiveScannerEmail?: Maybe<Scalars['Boolean']['output']>;
  /** unique uuid of a customer used to link to referral campaigns */
  referralId: Scalars['String']['output'];
  /** The region of the user, derived from the postal code of billing address. */
  region?: Maybe<Scalars['String']['output']>;
  roles: Array<Role>;
  scoutCommunications: Array<ScoutCommunication>;
  /** Shipping address associated with the user. */
  shippingAddress?: Maybe<PartialAddress>;
  /** Whether the shipping address matches the billing address. */
  shippingAddressMatchesBillingAddress: Scalars['Boolean']['output'];
  /** The Shopify user entry for the user if they have used the organization's Shopify store */
  shopifyUser?: Maybe<ShopifyUser>;
  tags: Array<Tag>;
  /** The tax number of the user. */
  taxNumber?: Maybe<Scalars['String']['output']>;
  unsubscribeReason?: Maybe<UnsubscribeReason>;
  updatedAt: Scalars['DateTime']['output'];
  usSegment?: Maybe<UsSegment>;
  usableForEmailMarketing?: Maybe<Scalars['Boolean']['output']>;
  usableForSMSMarketing?: Maybe<Scalars['Boolean']['output']>;
};


export type UserHistoryArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<HistoryOrderByInput>;
};


export type UserOrdersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderOrderByInput>;
  where?: InputMaybe<OrderWhereInput>;
};

export type UserAcquisition = {
  referralCodeId?: InputMaybe<Scalars['String']['input']>;
};

export type UserConnection = {
  __typename?: 'UserConnection';
  edges: Array<UserEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor: Scalars['String']['output'];
  node: User;
};

export type UserOrderByInput = {
  createdAt?: InputMaybe<OrderByDirection>;
  firstName?: InputMaybe<OrderByDirection>;
  lastName?: InputMaybe<OrderByDirection>;
  updatedAt?: InputMaybe<OrderByDirection>;
};

export type UserWhereInput = {
  /** Fuzzy search query. */
  q?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<Array<Role>>;
};

export type UsersUpdatedBetweenInput = {
  /** The end date of the range to search provided in the organizations timezone. */
  endDate: Scalars['DateTime']['input'];
  /** The start date of the range to search provided in the organizations timezone. */
  startDate: Scalars['DateTime']['input'];
};

export type UsherComplimetaryCreateInput = {
  eventId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  releaseId: Scalars['String']['input'];
  releaseZoneId: Scalars['String']['input'];
  seatZone: Scalars['String']['input'];
  seatZoneId?: InputMaybe<Scalars['String']['input']>;
};

export type VaccinePass = {
  __typename?: 'VaccinePass';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  /** Raw payload of the vaccine pass */
  payload?: Maybe<Scalars['String']['output']>;
  /** Decoded payload of the vaccine pass */
  payloadDecoded: Scalars['JSON']['output'];
  /** Ticket that the pass is asscoiated with */
  ticket?: Maybe<Ticket>;
  updatedAt: Scalars['DateTime']['output'];
  /** Pass owner */
  user?: Maybe<User>;
};

export type ValidateAccessCodeForMembershipInput = {
  /** The access code to validate */
  code: Scalars['String']['input'];
  /** The membership ID to validate the access code for */
  membershipId: Scalars['ID']['input'];
};

export type Venue = {
  __typename?: 'Venue';
  accessibilityInfo?: Maybe<Scalars['String']['output']>;
  /** Venue address */
  address: Address;
  capacity?: Maybe<Scalars['Int']['output']>;
  /** Venue capacity utilization as a percentage. */
  capacityUtilization: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  createdFromEvent: Scalars['Boolean']['output'];
  /** Filter options that are available for a seated venue */
  filterOptions?: Maybe<Array<Scalars['String']['output']>>;
  gates: Array<Gate>;
  /** Does this stadium require a per ticket levy to be charged */
  hasStadiumLevy: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  locale: Scalars['String']['output'];
  /** Venue coordinates (lat, lng). */
  location?: Maybe<Coordinate>;
  name: Scalars['String']['output'];
  /** Venue seating settings. */
  seating: VenueSeating;
  /** Seats.io chart key */
  seatsChartKey?: Maybe<Scalars['String']['output']>;
  timezone: Scalars['String']['output'];
  trackHardCopyTickets: Scalars['Boolean']['output'];
  updatedAt: Scalars['DateTime']['output'];
  zones: Array<Zone>;
};

/** Venue seating settings. */
export enum VenueSeating {
  Digital = 'Digital',
  NonSeated = 'NonSeated',
  Seated = 'Seated'
}

export type VerifyEmailInput = {
  token: Scalars['String']['input'];
};

export type VerifyMagicLinkOutput = {
  __typename?: 'VerifyMagicLinkOutput';
  redirectUrl: Scalars['String']['output'];
};

export type VerifyPinPayment3Ds = {
  refId: Scalars['String']['input'];
  sessionToken: Scalars['String']['input'];
};

/** Represents a date in an event. */
export type Waitlist = {
  __typename?: 'Waitlist';
  createdAt: Scalars['DateTime']['output'];
  event: Event;
  id: Scalars['ID']['output'];
  organization: Organization;
  updatedAt: Scalars['DateTime']['output'];
  user: User;
};

export type WaitlistOverviewOutput = {
  __typename?: 'WaitlistOverviewOutput';
  customersOptedIntoMarketing?: Maybe<Scalars['Float']['output']>;
  numberOfOrders?: Maybe<Scalars['Float']['output']>;
  numberOfSuccesfulUsers?: Maybe<Scalars['Float']['output']>;
  numberOfTickets?: Maybe<Scalars['Float']['output']>;
  totalCustomers?: Maybe<Scalars['Float']['output']>;
  totalNewCustomers?: Maybe<Scalars['Float']['output']>;
  totalReturningCustomers?: Maybe<Scalars['Float']['output']>;
  totalRevenue?: Maybe<Scalars['Float']['output']>;
  yetToConvert?: Maybe<Scalars['Float']['output']>;
};

/** Represents a customer on a waitlist for an event. This customer may or may not exist as an actual user. */
export type WaitlistUser = {
  __typename?: 'WaitlistUser';
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  event: Event;
  firstName: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  organization: Organization;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  /** The referral code used when registering for presale access. Will be tied to the referring user/waitlist user */
  referralCode?: Maybe<ReferralCode>;
  updatedAt: Scalars['DateTime']['output'];
  usableForMarketing: Scalars['Boolean']['output'];
  /** The user that is on the waitlist. This may be null if the user does not already exist in our system. */
  user: User;
};

/** Contains encoded ticket data in the format required for various wallet providers. */
export type WalletTicket = {
  __typename?: 'WalletTicket';
  /** (Apple): authentication token to be used with Apple Wallet. */
  authenticationToken?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  /** (Google): The object ID to identify this ticket in the Google Wallet API. */
  googleObjectId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** The organization associated with the ticket. */
  organization?: Maybe<Organization>;
  /** The ticket that is encoded in the entity */
  ticket?: Maybe<Ticket>;
  updatedAt: Scalars['DateTime']['output'];
};

export type WindcavePaymentContext = {
  __typename?: 'WindcavePaymentContext';
  checkoutUrl: Scalars['String']['output'];
  orderId: Scalars['String']['output'];
  redirectUrl?: Maybe<Scalars['String']['output']>;
};

/** The payment result. */
export type WindcavePaymentResultOutput = {
  __typename?: 'WindcavePaymentResultOutput';
  redirectUrl: Scalars['String']['output'];
};

/** Represents a Xero account. */
export type XeroAccountOutput = {
  __typename?: 'XeroAccountOutput';
  accountId?: Maybe<Scalars['String']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  taxType?: Maybe<Scalars['String']['output']>;
};

/** Represents all available Xero accounts. */
export type XeroAllAccountsOutput = {
  __typename?: 'XeroAllAccountsOutput';
  availableAccounts?: Maybe<Array<XeroAccountOutput>>;
  currentAccountCode?: Maybe<Scalars['String']['output']>;
};

export type XeroCallbackInput = {
  code: Scalars['String']['input'];
};

export type XeroConfigurationInput = {
  accountCode: Scalars['String']['input'];
  invoiceStatus: XeroInvoiceStatus;
  numDaysToPay: Scalars['Float']['input'];
  sendFlicketInvoice: Scalars['Boolean']['input'];
  useCompanyNameOnInvoice: Scalars['Boolean']['input'];
};

export type XeroConfigurationOutput = {
  __typename?: 'XeroConfigurationOutput';
  accountCode?: Maybe<Scalars['String']['output']>;
  invoiceStatus?: Maybe<XeroInvoiceStatus>;
  numDaysToPay?: Maybe<Scalars['Float']['output']>;
  sendFlicketInvoice?: Maybe<Scalars['Boolean']['output']>;
  useCompanyNameOnInvoice?: Maybe<Scalars['Boolean']['output']>;
};

/** Xero invoice status */
export enum XeroInvoiceStatus {
  Authorised = 'AUTHORISED',
  Draft = 'DRAFT',
  Submitted = 'SUBMITTED'
}

export type Zone = {
  __typename?: 'Zone';
  admission: Scalars['Boolean']['output'];
  capacity?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  displayOrder: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  /** Image gallery for zone listing and sub-page. */
  imageGallery: Array<ImageGalleryItem>;
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  seated: Scalars['Boolean']['output'];
  sections?: Maybe<Array<Section>>;
  stand?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

/** Allowed date for the zone. */
export type ZoneAllocatedDate = {
  __typename?: 'ZoneAllocatedDate';
  /** Alternate entry time for the zone. */
  alternateEntryTime: Scalars['String']['output'];
  eventDateId: Scalars['ID']['output'];
};

export type ZoneAllocatedDateInput = {
  /** Alternate entry time for the zone. */
  alternateEntryTime: Scalars['String']['input'];
  eventDateId: Scalars['ID']['input'];
};

export type ZoneAllocatedGate = {
  __typename?: 'ZoneAllocatedGate';
  availabilityCount?: Maybe<ZoneAllocationAvailability>;
  /** Alternate entry time for the zone. */
  dates?: Maybe<Array<ZoneAllocatedDate>>;
  gates?: Maybe<Array<Scalars['String']['output']>>;
  name: Scalars['String']['output'];
  sections?: Maybe<Array<ZoneAllocatedGateSection>>;
  zoneId?: Maybe<Scalars['String']['output']>;
};

export type ZoneAllocatedGateInput = {
  availabilityCount?: InputMaybe<ZoneAllocationAvailabilityInput>;
  /** Alternate entry time for the zone. */
  dates?: InputMaybe<Array<ZoneAllocatedDateInput>>;
  gates?: InputMaybe<Array<Scalars['String']['input']>>;
  name: Scalars['String']['input'];
  sections?: InputMaybe<Array<ZoneAllocatedGateSectionInput>>;
  zoneId?: InputMaybe<Scalars['String']['input']>;
};

export type ZoneAllocatedGateSection = {
  __typename?: 'ZoneAllocatedGateSection';
  gates?: Maybe<Array<Scalars['String']['output']>>;
  /** Section name. */
  name: Scalars['String']['output'];
  /** Section id. */
  sectionId?: Maybe<Scalars['String']['output']>;
};

export type ZoneAllocatedGateSectionInput = {
  gates?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Section name. */
  name: Scalars['String']['input'];
  /** Section id. */
  sectionId?: InputMaybe<Scalars['String']['input']>;
};

export type ZoneAllocationAvailability = {
  __typename?: 'ZoneAllocationAvailability';
  available?: Maybe<Scalars['Float']['output']>;
  booked?: Maybe<Scalars['Float']['output']>;
  holdByMembership?: Maybe<Scalars['Float']['output']>;
  notForSale?: Maybe<Scalars['Float']['output']>;
};

export type ZoneAllocationAvailabilityInput = {
  available?: InputMaybe<Scalars['Float']['input']>;
  booked?: InputMaybe<Scalars['Float']['input']>;
  holdByMembership?: InputMaybe<Scalars['Float']['input']>;
  notForSale?: InputMaybe<Scalars['Float']['input']>;
};

export type ZoneArgs = {
  __typename?: 'ZoneArgs';
  eventId: Scalars['String']['output'];
  exclude: Scalars['Boolean']['output'];
  kind: BroadcastMarketingFiltersV2Kind;
  seatZoneIds: Array<Scalars['String']['output']>;
};

/** The zone belonging to a venue (can only be set for non-seated venues) */
export type ZoneInput = {
  admission?: InputMaybe<Scalars['Boolean']['input']>;
  capacity?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  displayOrder: Scalars['Float']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  stand?: InputMaybe<Scalars['String']['input']>;
};

export enum ZonePricingLevel {
  Section = 'SECTION',
  Zone = 'ZONE'
}

/** Represents a section level pricing. */
export type ZonePricingTypeSection = {
  __typename?: 'ZonePricingTypeSection';
  /** Section name. */
  name: Scalars['String']['output'];
  /** The price of the section ticket type or the section membership type. */
  price?: Maybe<Scalars['Float']['output']>;
  /** Section id. */
  sectionId: Scalars['String']['output'];
};

export type FindOrderIdForTicketOutput = {
  __typename?: 'findOrderIdForTicketOutput';
  /** Order Id */
  orderId: Scalars['String']['output'];
};

export type AttendeeFragmentFragment = { __typename?: 'ExpoAttendee', id: string, ticketId?: string | null, organizationId: string, eventId: string, updatedAt: string, exhibitorId: string, email: string, phoneNumber?: string | null, birthDate?: string | null, postalCode?: string | null, gender?: Gender | null, companyName?: string | null, notes?: string | null, optInToMarketing?: boolean | null, firstName?: string | null, lastName?: string | null, customFields?: Array<{ __typename?: 'CustomField', id?: string | null, fieldName: string, fieldValue: string }> | null };

export type CreateOrUpdateAttendeeMutationVariables = Exact<{
  input: ExpoAttendeeInput;
}>;


export type CreateOrUpdateAttendeeMutation = { __typename?: 'Mutation', createOrUpdateAttendee: { __typename?: 'ExpoAttendee', id: string } };

export type GetAttendeeQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetAttendeeQuery = { __typename?: 'Query', getAttendee: { __typename?: 'ExpoAttendee', id: string, ticketId?: string | null, organizationId: string, eventId: string, updatedAt: string, exhibitorId: string, email: string, phoneNumber?: string | null, birthDate?: string | null, postalCode?: string | null, gender?: Gender | null, companyName?: string | null, notes?: string | null, optInToMarketing?: boolean | null, firstName?: string | null, lastName?: string | null, customFields?: Array<{ __typename?: 'CustomField', id?: string | null, fieldName: string, fieldValue: string }> | null } };

export type GetAttendeeTicketQueryVariables = Exact<{
  ticketNumber: Scalars['String']['input'];
}>;


export type GetAttendeeTicketQuery = { __typename?: 'Query', getAttendeeTicket: { __typename?: 'ExpoAttendeeTicketOutput', attendeeId?: string | null, ticket: { __typename?: 'Ticket', id: string, ticketNumber: string, isNamed: boolean, shouldBeNamed: boolean, memberSince?: string | null, licensePlate?: string | null, membershipNumber?: string | null, comments?: string | null, dietaryRequirements?: string | null, lengthOfStay?: string | null, usableForEmailMarketing?: boolean | null, usableForSMSMarketing?: boolean | null, emergencyName?: string | null, emergencyContact?: string | null, emergencyContactRelationship?: string | null, email?: string | null, phoneNumber?: string | null, birthDate?: string | null, postalCode?: string | null, gender?: Gender | null, companyName?: string | null, firstName?: string | null, lastName?: string | null, customFields?: Array<{ __typename?: 'CustomField', id?: string | null, fieldName: string, fieldValue: string }> | null } } };

export type ListAttendeesQueryVariables = Exact<{ [key: string]: never; }>;


export type ListAttendeesQuery = { __typename?: 'Query', listAttendees: Array<{ __typename?: 'ExpoAttendee', id: string, ticketId?: string | null, organizationId: string, eventId: string, updatedAt: string, exhibitorId: string, email: string, phoneNumber?: string | null, birthDate?: string | null, postalCode?: string | null, gender?: Gender | null, companyName?: string | null, notes?: string | null, optInToMarketing?: boolean | null, firstName?: string | null, lastName?: string | null, customFields?: Array<{ __typename?: 'CustomField', id?: string | null, fieldName: string, fieldValue: string }> | null }> };

export type EnableSafeModeMutationVariables = Exact<{ [key: string]: never; }>;


export type EnableSafeModeMutation = { __typename?: 'Mutation', enableSafeMode: boolean };

export type ExhibitorLogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type ExhibitorLogoutMutation = { __typename?: 'Mutation', exhibitorLogout: boolean };

export type NameExhibitorSessionMutationVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type NameExhibitorSessionMutation = { __typename?: 'Mutation', nameExhibitorSession: { __typename?: 'ExpoExhibitorSessionProfileOutput', scannerName?: string | null } };

export type SendDownloadAttendeesEmailMutationVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type SendDownloadAttendeesEmailMutation = { __typename?: 'Mutation', sendDownloadAttendeesEmail: boolean };

export type ResendExhibitorLoginEmailMutationVariables = Exact<{
  email: Scalars['String']['input'];
  eventId?: InputMaybe<Scalars['String']['input']>;
}>;


export type ResendExhibitorLoginEmailMutation = { __typename?: 'Mutation', resendExhibitorLoginEmail: { __typename: 'ResendExhibitorLoginEmailMultipleFound', events: Array<{ __typename?: 'ExpoEventForLogin', id: string, name: string }> } | { __typename: 'ResendExhibitorLoginEmailNotFound', notFound: boolean } | { __typename: 'ResendExhibitorLoginEmailSuccess', success: boolean } };

export type BulkCreateOrUpdateAttendeeMutationVariables = Exact<{
  input: BulkExpoAttendeeInput;
}>;


export type BulkCreateOrUpdateAttendeeMutation = { __typename?: 'Mutation', bulkCreateOrUpdateAttendee: boolean };

export type ExhibitorLoginMutationVariables = Exact<{
  input: ExpoExhibitorLoginInput;
}>;


export type ExhibitorLoginMutation = { __typename?: 'Mutation', exhibitorLogin: { __typename?: 'ExpoExhibitor', id: string, name: string, email: string, allowCustomQuestions: boolean } };

export type ExpoCreateOrUpdateNamingFieldMutationVariables = Exact<{
  input: ExpoNamingFieldInput;
}>;


export type ExpoCreateOrUpdateNamingFieldMutation = { __typename?: 'Mutation', expoCreateOrUpdateNamingField: { __typename?: 'ExpoNamingField', id: string } };

export type ExpoDeleteNamingFieldMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type ExpoDeleteNamingFieldMutation = { __typename?: 'Mutation', expoDeleteNamingField: boolean };

export type EventQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type EventQuery = { __typename?: 'Query', event: { __typename?: 'Event', id: string, title: string, hasPublicRelease: boolean } };

export type EventsQueryVariables = Exact<{
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EventWhereInput>;
  orderBy?: InputMaybe<EventOrderByInput>;
}>;


export type EventsQuery = { __typename?: 'Query', events: { __typename?: 'EventConnection', totalCount: number, edges: Array<{ __typename?: 'EventEdge', node: { __typename?: 'Event', id: string, title: string, hasPublicRelease: boolean, hiddenFromPublic: boolean, venue: { __typename?: 'Venue', id: string } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null, startCursor?: string | null, endCursor?: string | null } } };

export type ExhibitorContextQueryVariables = Exact<{ [key: string]: never; }>;


export type ExhibitorContextQuery = { __typename?: 'Query', exhibitorContext: { __typename?: 'ExhibitorContextOutput', profile: { __typename?: 'ExpoExhibitorSessionProfileOutput', email: string, exhibitorName: string, scannerName?: string | null, allowCustomQuestions: boolean, safeModeEnabled: boolean }, event: { __typename?: 'Event', id: string, title: string, startDate?: string | null, endDate?: string | null, venue: { __typename?: 'Venue', timezone: string, locale: string } }, organization: { __typename?: 'CurrentOrganizationOutput', id: string, name: string, slug: string, landingPage: LandingPage, privacyPolicy?: string | null, termsAndConditions?: string | null, supportInfo?: string | null, currency?: string | null, address?: { __typename?: 'Address', country: string } | null, branding: { __typename?: 'OrganizationOutputBranding', greyScale?: GreyScale | null, P300: string, P200: string, P100: string, S300: string, S200: string, S100: string, N800: string, N700: string, N600: string, N500: string, N400: string, N300: string, N200: string, N100: string, logo?: { __typename?: 'ExtendedFile', storage: StorageType, directory: string, fileName: string, originalFileName?: string | null, metaData?: { __typename?: 'MetaData', width?: number | null, height?: number | null } | null } | null, mobileLogo?: { __typename?: 'ExtendedFile', storage: StorageType, directory: string, fileName: string, originalFileName?: string | null, metaData?: { __typename?: 'MetaData', width?: number | null, height?: number | null } | null } | null, favicon?: { __typename?: 'ExtendedFile', storage: StorageType, directory: string, fileName: string, originalFileName?: string | null, metaData?: { __typename?: 'MetaData', width?: number | null, height?: number | null } | null } | null, background?: { __typename?: 'ExtendedFile', storage: StorageType, directory: string, fileName: string, originalFileName?: string | null, metaData?: { __typename?: 'MetaData', width?: number | null, height?: number | null } | null } | null, fullBackground?: { __typename?: 'ExtendedFile', storage: StorageType, directory: string, fileName: string, originalFileName?: string | null, metaData?: { __typename?: 'MetaData', width?: number | null, height?: number | null } | null } | null } } } };

export type ExhibitorProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type ExhibitorProfileQuery = { __typename?: 'Query', exhibitorProfile: { __typename?: 'ExpoExhibitorSessionProfileOutput', email: string, exhibitorName: string, scannerName?: string | null, allowCustomQuestions: boolean, safeModeEnabled: boolean } };

export type ExpoListNamingFieldsQueryVariables = Exact<{ [key: string]: never; }>;


export type ExpoListNamingFieldsQuery = { __typename?: 'Query', expoListNamingFields: Array<{ __typename?: 'ExpoNamingField', id: string, name: string, type: ExpoNamingFieldType, label: string, required: boolean, orderKey: number }> };

export type FileFragment = { __typename?: 'ExtendedFile', storage: StorageType, directory: string, fileName: string, originalFileName?: string | null, metaData?: { __typename?: 'MetaData', width?: number | null, height?: number | null } | null };

export type CurrentOrganizationQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentOrganizationQuery = { __typename?: 'Query', currentOrganization: { __typename?: 'CurrentOrganizationOutput', id: string, name: string, slug: string, showMemberships: boolean, showMembershipRenewal?: boolean | null, landingPage: LandingPage, privacyPolicy?: string | null, termsAndConditions?: string | null, supportInfo?: string | null, currency?: string | null, taxRate: number, features?: Array<string> | null, timezone: string, locale: string, helpLink?: string | null, defaultI18nLanguage: string, defaultLanguage: string, customTaxName?: string | null, address?: { __typename?: 'Address', country: string } | null, shippingLabels?: { __typename?: 'ShippingLabels', eTicket?: string | null, printedTicketByMail?: string | null, printedTicketByCourier?: string | null, printedTicketByCourierRural?: string | null, printedTicketAtVenue?: string | null } | null, marketing?: { __typename?: 'Marketing', gtmId?: string | null, pixelId?: string | null } | null, shopify?: { __typename?: 'ShopifyIntegration', shopDomain: string, storefrontAccessToken: string } | null, branding: { __typename?: 'OrganizationOutputBranding', greyScale?: GreyScale | null, P300: string, P200: string, P100: string, S300: string, S200: string, S100: string, N800: string, N700: string, N600: string, N500: string, N400: string, N300: string, N200: string, N100: string, logo?: { __typename?: 'ExtendedFile', storage: StorageType, directory: string, fileName: string, originalFileName?: string | null, metaData?: { __typename?: 'MetaData', width?: number | null, height?: number | null } | null } | null, mobileLogo?: { __typename?: 'ExtendedFile', storage: StorageType, directory: string, fileName: string, originalFileName?: string | null, metaData?: { __typename?: 'MetaData', width?: number | null, height?: number | null } | null } | null, favicon?: { __typename?: 'ExtendedFile', storage: StorageType, directory: string, fileName: string, originalFileName?: string | null, metaData?: { __typename?: 'MetaData', width?: number | null, height?: number | null } | null } | null, background?: { __typename?: 'ExtendedFile', storage: StorageType, directory: string, fileName: string, originalFileName?: string | null, metaData?: { __typename?: 'MetaData', width?: number | null, height?: number | null } | null } | null, fullBackground?: { __typename?: 'ExtendedFile', storage: StorageType, directory: string, fileName: string, originalFileName?: string | null, metaData?: { __typename?: 'MetaData', width?: number | null, height?: number | null } | null } | null }, point?: { __typename?: 'Point', name: string, isEnabled: boolean } | null, customFields: Array<{ __typename?: 'CustomFieldOuput', id: string, label: string, value: boolean, targetArea: Array<string>, type: string }>, seekaConfig?: { __typename?: 'SeekaOutput', seekaOrganizationId: string, seekaPublicKey: string, seekaInstanceId: string, seekaScopeDescription: string } | null } };

export const AttendeeFragmentFragmentDoc = gql`
    fragment attendeeFragment on ExpoAttendee {
  id
  ticketId
  organizationId
  eventId
  updatedAt
  exhibitorId
  email
  phoneNumber
  birthDate
  postalCode
  gender
  companyName
  notes
  optInToMarketing
  firstName
  lastName
  customFields {
    id
    fieldName
    fieldValue
  }
}
    `;
export const FileFragmentDoc = gql`
    fragment File on ExtendedFile {
  storage
  directory
  fileName
  originalFileName
  metaData {
    width
    height
  }
}
    `;
export const CreateOrUpdateAttendeeDocument = gql`
    mutation createOrUpdateAttendee($input: ExpoAttendeeInput!) {
  createOrUpdateAttendee(input: $input) {
    id
  }
}
    `;
export const GetAttendeeDocument = gql`
    query getAttendee($id: String!) {
  getAttendee(id: $id) {
    ...attendeeFragment
  }
}
    ${AttendeeFragmentFragmentDoc}`;
export const GetAttendeeTicketDocument = gql`
    query getAttendeeTicket($ticketNumber: String!) {
  getAttendeeTicket(ticketNumber: $ticketNumber) {
    attendeeId
    ticket {
      id
      ticketNumber
      isNamed
      shouldBeNamed
      memberSince
      licensePlate
      membershipNumber
      comments
      dietaryRequirements
      lengthOfStay
      usableForEmailMarketing
      usableForSMSMarketing
      emergencyName
      emergencyContact
      emergencyContactRelationship
      email
      phoneNumber
      birthDate
      postalCode
      gender
      companyName
      firstName
      lastName
      customFields {
        id
        fieldName
        fieldValue
      }
    }
  }
}
    `;
export const ListAttendeesDocument = gql`
    query listAttendees {
  listAttendees {
    ...attendeeFragment
  }
}
    ${AttendeeFragmentFragmentDoc}`;
export const EnableSafeModeDocument = gql`
    mutation enableSafeMode {
  enableSafeMode
}
    `;
export const ExhibitorLogoutDocument = gql`
    mutation exhibitorLogout {
  exhibitorLogout
}
    `;
export const NameExhibitorSessionDocument = gql`
    mutation nameExhibitorSession($name: String!) {
  nameExhibitorSession(name: $name) {
    scannerName
  }
}
    `;
export const SendDownloadAttendeesEmailDocument = gql`
    mutation sendDownloadAttendeesEmail($email: String!) {
  sendDownloadAttendeesEmail(email: $email)
}
    `;
export const ResendExhibitorLoginEmailDocument = gql`
    mutation resendExhibitorLoginEmail($email: String!, $eventId: String) {
  resendExhibitorLoginEmail(email: $email, eventId: $eventId) {
    ... on ResendExhibitorLoginEmailSuccess {
      __typename
      success
    }
    ... on ResendExhibitorLoginEmailNotFound {
      __typename
      notFound
    }
    ... on ResendExhibitorLoginEmailMultipleFound {
      __typename
      events {
        id
        name
      }
    }
  }
}
    `;
export const BulkCreateOrUpdateAttendeeDocument = gql`
    mutation bulkCreateOrUpdateAttendee($input: BulkExpoAttendeeInput!) {
  bulkCreateOrUpdateAttendee(input: $input)
}
    `;
export const ExhibitorLoginDocument = gql`
    mutation exhibitorLogin($input: ExpoExhibitorLoginInput!) {
  exhibitorLogin(input: $input) {
    id
    name
    email
    allowCustomQuestions
  }
}
    `;
export const ExpoCreateOrUpdateNamingFieldDocument = gql`
    mutation expoCreateOrUpdateNamingField($input: ExpoNamingFieldInput!) {
  expoCreateOrUpdateNamingField(input: $input) {
    id
  }
}
    `;
export const ExpoDeleteNamingFieldDocument = gql`
    mutation expoDeleteNamingField($id: String!) {
  expoDeleteNamingField(id: $id)
}
    `;
export const EventDocument = gql`
    query event($id: String!) {
  event(id: $id) {
    id
    title
    hasPublicRelease
  }
}
    `;
export const EventsDocument = gql`
    query events($before: String, $after: String, $first: Int, $last: Int, $where: EventWhereInput, $orderBy: EventOrderByInput) {
  events(
    before: $before
    after: $after
    first: $first
    last: $last
    where: $where
    orderBy: $orderBy
  ) {
    edges {
      node {
        id
        title
        hasPublicRelease
        hiddenFromPublic
        venue {
          id
        }
      }
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    totalCount
  }
}
    `;
export const ExhibitorContextDocument = gql`
    query exhibitorContext {
  exhibitorContext {
    profile {
      email
      exhibitorName
      scannerName
      allowCustomQuestions
      safeModeEnabled
    }
    event {
      id
      title
      startDate
      endDate
      venue {
        timezone
        locale
      }
    }
    organization {
      id
      name
      slug
      landingPage
      privacyPolicy
      termsAndConditions
      supportInfo
      currency
      address {
        country
      }
      branding {
        logo {
          ...File
        }
        mobileLogo {
          ...File
        }
        favicon {
          ...File
        }
        background {
          ...File
        }
        fullBackground {
          ...File
        }
        greyScale
        P300
        P200
        P100
        S300
        S200
        S100
        N800
        N700
        N600
        N500
        N400
        N300
        N200
        N100
      }
    }
  }
}
    ${FileFragmentDoc}`;
export const ExhibitorProfileDocument = gql`
    query exhibitorProfile {
  exhibitorProfile {
    email
    exhibitorName
    scannerName
    allowCustomQuestions
    safeModeEnabled
  }
}
    `;
export const ExpoListNamingFieldsDocument = gql`
    query expoListNamingFields {
  expoListNamingFields {
    id
    name
    type
    label
    required
    orderKey
  }
}
    `;
export const CurrentOrganizationDocument = gql`
    query currentOrganization {
  currentOrganization {
    id
    name
    slug
    showMemberships
    showMembershipRenewal
    landingPage
    privacyPolicy
    termsAndConditions
    supportInfo
    currency
    taxRate
    address {
      country
    }
    shippingLabels {
      eTicket
      printedTicketByMail
      printedTicketByCourier
      printedTicketByCourierRural
      printedTicketAtVenue
    }
    marketing {
      gtmId
      pixelId
    }
    shopify {
      shopDomain
      storefrontAccessToken
    }
    branding {
      logo {
        ...File
      }
      mobileLogo {
        ...File
      }
      favicon {
        ...File
      }
      background {
        ...File
      }
      fullBackground {
        ...File
      }
      greyScale
      P300
      P200
      P100
      S300
      S200
      S100
      N800
      N700
      N600
      N500
      N400
      N300
      N200
      N100
    }
    features
    timezone
    locale
    helpLink
    point {
      name
      isEnabled
    }
    defaultI18nLanguage
    defaultLanguage
    customTaxName
    customFields {
      id
      label
      value
      targetArea
      type
    }
    seekaConfig {
      seekaOrganizationId
      seekaPublicKey
      seekaInstanceId
      seekaScopeDescription
    }
  }
}
    ${FileFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    createOrUpdateAttendee(variables: CreateOrUpdateAttendeeMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateOrUpdateAttendeeMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateOrUpdateAttendeeMutation>(CreateOrUpdateAttendeeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createOrUpdateAttendee', 'mutation', variables);
    },
    getAttendee(variables: GetAttendeeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetAttendeeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAttendeeQuery>(GetAttendeeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAttendee', 'query', variables);
    },
    getAttendeeTicket(variables: GetAttendeeTicketQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetAttendeeTicketQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAttendeeTicketQuery>(GetAttendeeTicketDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAttendeeTicket', 'query', variables);
    },
    listAttendees(variables?: ListAttendeesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ListAttendeesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ListAttendeesQuery>(ListAttendeesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'listAttendees', 'query', variables);
    },
    enableSafeMode(variables?: EnableSafeModeMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<EnableSafeModeMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<EnableSafeModeMutation>(EnableSafeModeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'enableSafeMode', 'mutation', variables);
    },
    exhibitorLogout(variables?: ExhibitorLogoutMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ExhibitorLogoutMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ExhibitorLogoutMutation>(ExhibitorLogoutDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'exhibitorLogout', 'mutation', variables);
    },
    nameExhibitorSession(variables: NameExhibitorSessionMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<NameExhibitorSessionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<NameExhibitorSessionMutation>(NameExhibitorSessionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'nameExhibitorSession', 'mutation', variables);
    },
    sendDownloadAttendeesEmail(variables: SendDownloadAttendeesEmailMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<SendDownloadAttendeesEmailMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SendDownloadAttendeesEmailMutation>(SendDownloadAttendeesEmailDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'sendDownloadAttendeesEmail', 'mutation', variables);
    },
    resendExhibitorLoginEmail(variables: ResendExhibitorLoginEmailMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ResendExhibitorLoginEmailMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ResendExhibitorLoginEmailMutation>(ResendExhibitorLoginEmailDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'resendExhibitorLoginEmail', 'mutation', variables);
    },
    bulkCreateOrUpdateAttendee(variables: BulkCreateOrUpdateAttendeeMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<BulkCreateOrUpdateAttendeeMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<BulkCreateOrUpdateAttendeeMutation>(BulkCreateOrUpdateAttendeeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'bulkCreateOrUpdateAttendee', 'mutation', variables);
    },
    exhibitorLogin(variables: ExhibitorLoginMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ExhibitorLoginMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ExhibitorLoginMutation>(ExhibitorLoginDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'exhibitorLogin', 'mutation', variables);
    },
    expoCreateOrUpdateNamingField(variables: ExpoCreateOrUpdateNamingFieldMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ExpoCreateOrUpdateNamingFieldMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ExpoCreateOrUpdateNamingFieldMutation>(ExpoCreateOrUpdateNamingFieldDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'expoCreateOrUpdateNamingField', 'mutation', variables);
    },
    expoDeleteNamingField(variables: ExpoDeleteNamingFieldMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ExpoDeleteNamingFieldMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ExpoDeleteNamingFieldMutation>(ExpoDeleteNamingFieldDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'expoDeleteNamingField', 'mutation', variables);
    },
    event(variables: EventQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<EventQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<EventQuery>(EventDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'event', 'query', variables);
    },
    events(variables?: EventsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<EventsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<EventsQuery>(EventsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'events', 'query', variables);
    },
    exhibitorContext(variables?: ExhibitorContextQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ExhibitorContextQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ExhibitorContextQuery>(ExhibitorContextDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'exhibitorContext', 'query', variables);
    },
    exhibitorProfile(variables?: ExhibitorProfileQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ExhibitorProfileQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ExhibitorProfileQuery>(ExhibitorProfileDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'exhibitorProfile', 'query', variables);
    },
    expoListNamingFields(variables?: ExpoListNamingFieldsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ExpoListNamingFieldsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ExpoListNamingFieldsQuery>(ExpoListNamingFieldsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'expoListNamingFields', 'query', variables);
    },
    currentOrganization(variables?: CurrentOrganizationQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CurrentOrganizationQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CurrentOrganizationQuery>(CurrentOrganizationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'currentOrganization', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;