import { mysqlTable, mysqlSchema, AnyMySqlColumn, index, primaryKey, unique, varchar, datetime, timestamp, tinyint, int, mysqlEnum, text } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"


export const channel = mysqlTable("Channel", {
        id: varchar("id", { length: 256 }).notNull(),
        channelId: varchar("channelId", { length: 191 }).notNull(),
        channelLink: varchar("channelLink", { length: 191 }).notNull(),
        name: varchar("name", { length: 256 }).notNull(),
        serverId: varchar("serverId", { length: 191 }).notNull(),
        createdAt: datetime("createdAt", { mode: 'string', fsp: 3 }).default(sql`CURRENT_TIMESTAMP(3)`).notNull(),
        updatedAt: timestamp("updatedAt", { mode: 'string' }).notNull(),
        projectSettingId: varchar("projectSettingId", { length: 256 }).notNull(),
    },
    (table) => {
        return {
            channelIdIdx: index("Channel_channelId_idx").on(table.channelId),
            serverIdIdx: index("Channel_serverId_idx").on(table.serverId),
            projectSettingIdIdx: index("Channel_projectSettingId_idx").on(table.projectSettingId),
            channelId: primaryKey(table.id),
            channelChannelIdKey: unique("Channel_channelId_key").on(table.channelId),
            channelChannelLinkKey: unique("Channel_channelLink_key").on(table.channelLink),
            channelProjectSettingIdKey: unique("Channel_projectSettingId_key").on(table.projectSettingId),
            channelChannelIdServerIdKey: unique("Channel_channelId_serverId_key").on(table.channelId, table.serverId),
        }
    });

export const discordAccount = mysqlTable("DiscordAccount", {
        id: varchar("id", { length: 256 }).notNull(),
        clerkUserId: varchar("clerkUserId", { length: 191 }),
        username: varchar("username", { length: 191 }).notNull(),
        discriminator: varchar("discriminator", { length: 191 }),
        globalName: varchar("globalName", { length: 191 }),
        avatar: varchar("avatar", { length: 191 }),
        bot: tinyint("bot"),
        system: tinyint("system"),
        mfaEnabled: tinyint("mfa_enabled"),
        banner: varchar("banner", { length: 191 }),
        accentColor: int("accentColor"),
        locale: varchar("locale", { length: 191 }),
        verified: tinyint("verified"),
        email: varchar("email", { length: 191 }),
        flags: int("flags"),
        premiumType: int("premiumType"),
        publicFlags: int("publicFlags"),
        refreshToken: varchar("refreshToken", { length: 191 }),
        discordUserId: varchar("discordUserId", { length: 191 }).notNull(),
        userInProjectId: varchar("userInProjectId", { length: 256 }),
    },
    (table) => {
        return {
            clerkUserIdIdx: index("DiscordAccount_clerkUserId_idx").on(table.clerkUserId),
            discordUserIdIdx: index("DiscordAccount_discordUserId_idx").on(table.discordUserId),
            userInProjectIdIdx: index("DiscordAccount_userInProjectId_idx").on(table.userInProjectId),
            idIdx: index("DiscordAccount_id_idx").on(table.id),
            discordAccountId: primaryKey(table.id),
            discordAccountIdKey: unique("DiscordAccount_id_key").on(table.id),
            discordAccountDiscordUserIdKey: unique("DiscordAccount_discordUserId_key").on(table.discordUserId),
        }
    });

export const kudo = mysqlTable("Kudo", {
        id: varchar("id", { length: 256 }).notNull(),
        category: mysqlEnum("category", ['TEAMWORK','LEADERSHIP','INNOVATION','COMMUNITY','OWNERSHIP','BUILD','QUALITY','RESPECT','INTEGRITY','COMMUNICATION','GROWTH','FUN']).notNull(),
        description: varchar("description", { length: 255 }),
        points: int("points").default(1),
        responseId: varchar("responseId", { length: 191 }).notNull(),
        receiverId: varchar("receiverId", { length: 255 }).notNull(),
        giverId: varchar("giverId", { length: 255 }).notNull(),
        multiplier: int("multiplier").default(1),
        createdAt: datetime("createdAt", { mode: 'string', fsp: 3 }).default(sql`CURRENT_TIMESTAMP(3)`).notNull(),
    },
    (table) => {
        return {
            receiverIdIdx: index("Kudo_receiverId_idx").on(table.receiverId),
            responseIdIdx: index("Kudo_responseId_idx").on(table.responseId),
            giverIdIdx: index("Kudo_giverId_idx").on(table.giverId),
            kudoId: primaryKey(table.id),
            kudoReceiverIdKey: unique("Kudo_receiverId_key").on(table.receiverId),
            kudoGiverIdKey: unique("Kudo_giverId_key").on(table.giverId),
        }
    });

export const organisation = mysqlTable("Organisation", {
        id: varchar("id", { length: 256 }).notNull(),
        clerkOrgId: varchar("clerkOrgId", { length: 191 }).notNull(),
        name: varchar("name", { length: 255 }).notNull(),
        description: varchar("description", { length: 255 }),
        deleted: tinyint("deleted").notNull(),
        createdAt: datetime("createdAt", { mode: 'string', fsp: 3 }).default(sql`CURRENT_TIMESTAMP(3)`).notNull(),
        updatedAt: timestamp("updatedAt", { mode: 'string' }).notNull(),
    },
    (table) => {
        return {
            organisationId: primaryKey(table.id),
            organisationIdKey: unique("Organisation_id_key").on(table.id),
            organisationClerkOrgIdKey: unique("Organisation_clerkOrgId_key").on(table.clerkOrgId),
        }
    });

export const project = mysqlTable("Project", {
        id: varchar("id", { length: 256 }).notNull(),
        createdAt: datetime("createdAt", { mode: 'string', fsp: 3 }).default(sql`CURRENT_TIMESTAMP(3)`).notNull(),
        updatedAt: timestamp("updatedAt", { mode: 'string' }).notNull(),
        deleted: tinyint("deleted").notNull(),
        active: tinyint("active").notNull(),
        creatorId: varchar("creatorId", { length: 191 }).notNull(),
        projectSettingId: varchar("projectSettingId", { length: 191 }).notNull(),
        name: varchar("name", { length: 191 }).notNull(),
        tier: mysqlEnum("tier", ['FREE','BASIC','PRO']).notNull(),
        clerkOrgId: varchar("clerkOrgId", { length: 256 }),
        userOrganisationId: varchar("userOrganisationId", { length: 256 }),
    },
    (table) => {
        return {
            idIdx: index("Project_id_idx").on(table.id),
            creatorIdIdx: index("Project_creatorId_idx").on(table.creatorId),
            projectSettingIdIdx: index("Project_projectSettingId_idx").on(table.projectSettingId),
            clerkOrgIdIdx: index("Project_clerkOrgId_idx").on(table.clerkOrgId),
            userOrganisationIdIdx: index("Project_userOrganisationId_idx").on(table.userOrganisationId),
            projectId: primaryKey(table.id),
            projectIdKey: unique("Project_id_key").on(table.id),
            projectCreatorIdKey: unique("Project_creatorId_key").on(table.creatorId),
            projectProjectSettingIdKey: unique("Project_projectSettingId_key").on(table.projectSettingId),
            projectClerkOrgIdKey: unique("Project_clerkOrgId_key").on(table.clerkOrgId),
            projectUserOrganisationIdKey: unique("Project_userOrganisationId_key").on(table.userOrganisationId),
        }
    });

export const projectSettings = mysqlTable("ProjectSettings", {
        id: varchar("id", { length: 256 }).notNull(),
        cronSchedule: varchar("cronSchedule", { length: 255 }).notNull(),
        projectId: varchar("projectId", { length: 191 }).notNull(),
        clerkOrgId: varchar("clerkOrgId", { length: 256 }),
        channelId: varchar("channelId", { length: 191 }).notNull(),
        sendMeme: tinyint("sendMeme").notNull(),
        greetings: text("greetings"),
        timezone: varchar("timezone", { length: 191 }).notNull(),
        weekdays: varchar("weekdays", { length: 125 }).notNull(),
        followLocalTimeZone: tinyint("followLocalTimeZone").notNull(),
    },
    (table) => {
        return {
            idIdx: index("ProjectSettings_id_idx").on(table.id),
            clerkOrgIdIdx: index("ProjectSettings_clerkOrgId_idx").on(table.clerkOrgId),
            projectIdIdx: index("ProjectSettings_projectId_idx").on(table.projectId),
            projectSettingsId: primaryKey(table.id),
            projectSettingsIdKey: unique("ProjectSettings_id_key").on(table.id),
            projectSettingsProjectIdKey: unique("ProjectSettings_projectId_key").on(table.projectId),
            projectSettingsChannelIdKey: unique("ProjectSettings_channelId_key").on(table.channelId),
            projectSettingsClerkOrgIdKey: unique("ProjectSettings_clerkOrgId_key").on(table.clerkOrgId),
        }
    });

export const questions = mysqlTable("Questions", {
        id: varchar("id", { length: 256 }).notNull(),
        question: text("question").notNull(),
        createdAt: datetime("createdAt", { mode: 'string', fsp: 3 }).default(sql`CURRENT_TIMESTAMP(3)`).notNull(),
        updatedAt: datetime("updatedAt", { mode: 'string', fsp: 3 }).notNull(),
        projectSettingId: varchar("projectSettingId", { length: 191 }).notNull(),
        responseId: varchar("responseId", { length: 191 }),
    },
    (table) => {
        return {
            projectSettingIdIdx: index("Questions_projectSettingId_idx").on(table.projectSettingId),
            questionsId: primaryKey(table.id),
            questionsIdKey: unique("Questions_id_key").on(table.id),
        }
    });

export const response = mysqlTable("Response", {
        id: varchar("id", { length: 256 }).notNull(),
        clerkUserId: varchar("clerkUserId", { length: 191 }).notNull(),
        questionId: varchar("questionId", { length: 191 }).notNull(),
        responseId: varchar("responseId", { length: 191 }).notNull(),
        createdAt: datetime("createdAt", { mode: 'string', fsp: 3 }).default(sql`CURRENT_TIMESTAMP(3)`).notNull(),
        updatedAt: datetime("updatedAt", { mode: 'string', fsp: 3 }).notNull(),
    },
    (table) => {
        return {
            clerkUserIdIdx: index("Response_clerkUserId_idx").on(table.clerkUserId),
            questionIdIdx: index("Response_questionId_idx").on(table.questionId),
            responseId: primaryKey(table.id),
            responseClerkUserIdKey: unique("Response_clerkUserId_key").on(table.clerkUserId),
        }
    });

export const server = mysqlTable("Server", {
        id: varchar("id", { length: 256 }).notNull(),
        discordServerId: varchar("discordServerId", { length: 191 }).notNull(),
        name: varchar("name", { length: 100 }).notNull(),
        icon: varchar("icon", { length: 250 }),
        description: varchar("description", { length: 191 }),
        kickedTime: timestamp("kickedTime", { mode: 'string' }),
        vanityUrl: varchar("vanityUrl", { length: 191 }),
        discordAccountId: varchar("discordAccountId", { length: 256 }),
    },
    (table) => {
        return {
            discordAccountIdIdx: index("Server_discordAccountId_idx").on(table.discordAccountId),
            serverId: primaryKey(table.id),
            serverIdKey: unique("Server_id_key").on(table.id),
            serverDiscordServerIdKey: unique("Server_discordServerId_key").on(table.discordServerId),
            serverVanityUrlKey: unique("Server_vanityUrl_key").on(table.vanityUrl),
        }
    });

export const session = mysqlTable("Session", {
        id: varchar("id", { length: 191 }).notNull(),
        sessionToken: varchar("session_token", { length: 191 }).notNull(),
        userId: varchar("userId", { length: 191 }).notNull(),
        expires: timestamp("expires", { mode: 'string' }).notNull(),
        created: timestamp("created", { mode: 'string' }).notNull(),
        ended: timestamp("ended", { mode: 'string' }).notNull(),
        revoked: timestamp("revoked", { mode: 'string' }).notNull(),
        removed: timestamp("removed", { mode: 'string' }).notNull(),
    },
    (table) => {
        return {
            userIdIdx: index("Session_userId_idx").on(table.userId),
            sessionId: primaryKey(table.id),
            sessionSessionTokenKey: unique("Session_session_token_key").on(table.sessionToken),
        }
    });

export const user = mysqlTable("User", {
        id: varchar("id", { length: 256 }).notNull(),
        clerkUserId: varchar("clerkUserId", { length: 191 }),
        firstName: varchar("firstName", { length: 191 }),
        lastName: varchar("lastName", { length: 191 }),
        provider: varchar("provider", { length: 191 }).notNull(),
        providerAccountId: varchar("providerAccountId", { length: 191 }).notNull(),
        email: varchar("email", { length: 191 }),
        avatar: varchar("avatar", { length: 191 }),
        deleted: tinyint("deleted").notNull(),
        createdAt: datetime("createdAt", { mode: 'string', fsp: 3 }).default(sql`CURRENT_TIMESTAMP(3)`).notNull(),
        updatedAt: timestamp("updatedAt", { mode: 'string' }).notNull(),
        lastLogin: timestamp("lastLogin", { mode: 'string' }),
        discordId: varchar("discordId", { length: 191 }).notNull(),
    },
    (table) => {
        return {
            userId: primaryKey(table.id),
            userProviderAccountIdKey: unique("User_providerAccountId_key").on(table.providerAccountId),
            userDiscordIdKey: unique("User_discordId_key").on(table.discordId),
            userIdKey: unique("User_id_key").on(table.id),
            userClerkUserIdKey: unique("User_clerkUserId_key").on(table.clerkUserId),
            userEmailKey: unique("User_email_key").on(table.email),
        }
    });

export const userInProjects = mysqlTable("UserInProjects", {
        id: varchar("id", { length: 256 }).notNull(),
        clerkUserId: varchar("clerkUserId", { length: 191 }),
        discordUserId: varchar("discordUserId", { length: 191 }).notNull(),
        projectSettingId: varchar("projectSettingId", { length: 191 }).notNull(),
        xp: int("xp").default(0).notNull(),
        userRole: mysqlEnum("userRole", ['USER','ADMIN','OWNER']).notNull(),
        timezone: varchar("timezone", { length: 191 }).notNull(),
        timezoneOffset: tinyint("timezoneOffset").notNull(),
        createdAt: datetime("createdAt", { mode: 'string', fsp: 3 }).default(sql`CURRENT_TIMESTAMP(3)`).notNull(),
        updatedAt: datetime("updatedAt", { mode: 'string', fsp: 3 }).notNull(),
    },
    (table) => {
        return {
            clerkUserIdIdx: index("UserInProjects_clerkUserId_idx").on(table.clerkUserId),
            projectSettingIdIdx: index("UserInProjects_projectSettingId_idx").on(table.projectSettingId),
            discordUserIdIdx: index("UserInProjects_discordUserId_idx").on(table.discordUserId),
            userInProjectsId: primaryKey(table.id),
            userInProjectsIdKey: unique("UserInProjects_id_key").on(table.id),
            userInProjectsDiscordUserIdKey: unique("UserInProjects_discordUserId_key").on(table.discordUserId),
            userInProjectsClerkUserIdKey: unique("UserInProjects_clerkUserId_key").on(table.clerkUserId),
        }
    });

export const userOrgSubscription = mysqlTable("UserOrgSubscription", {
        id: varchar("id", { length: 256 }).notNull(),
        discordUserId: varchar("discordUserId", { length: 191 }).notNull(),
        stripeId: varchar("stripeId", { length: 191 }).notNull(),
        subscriptionId: varchar("subscriptionId", { length: 191 }).notNull(),
        clerkUserId: varchar("clerkUserId", { length: 191 }).notNull(),
        clerkOrgId: varchar("clerkOrgId", { length: 191 }),
        subscribedAt: timestamp("subscribedAt", { mode: 'string' }).notNull(),
        paidUntil: timestamp("paidUntil", { mode: 'string' }).notNull(),
        expiresAt: timestamp("expiresAt", { mode: 'string' }).notNull(),
        plan: mysqlEnum("plan", ['FREE','STANDARD','PRO']).notNull(),
    },
    (table) => {
        return {
            discordUserIdIdx: index("UserOrgSubscription_discordUserId_idx").on(table.discordUserId),
            userOrgSubscriptionId: primaryKey(table.id),
            userOrgSubscriptionIdKey: unique("UserOrgSubscription_id_key").on(table.id),
            userOrgSubscriptionStripeIdKey: unique("UserOrgSubscription_stripeId_key").on(table.stripeId),
            userOrgSubscriptionSubscriptionIdKey: unique("UserOrgSubscription_subscriptionId_key").on(table.subscriptionId),
            userOrgSubscriptionClerkUserIdKey: unique("UserOrgSubscription_clerkUserId_key").on(table.clerkUserId),
            userOrgSubscriptionClerkOrgIdKey: unique("UserOrgSubscription_clerkOrgId_key").on(table.clerkOrgId),
        }
    });

export const userOrganisation = mysqlTable("UserOrganisation", {
        id: varchar("id", { length: 256 }).notNull(),
        clerkUserId: varchar("clerkUserId", { length: 191 }).notNull(),
        clerkOrgId: varchar("clerkOrgId", { length: 191 }).notNull(),
        clerkRole: mysqlEnum("clerkRole", ['basic_member','admin']).notNull(),
        createdAt: datetime("createdAt", { mode: 'string', fsp: 3 }).default(sql`CURRENT_TIMESTAMP(3)`).notNull(),
        deletedAt: timestamp("deletedAt", { mode: 'string' }),
        updatedAt: timestamp("updatedAt", { mode: 'string' }).notNull(),
        projectId: varchar("projectId", { length: 256 }),
        discordUserId: varchar("discordUserId", { length: 191 }).notNull(),
    },
    (table) => {
        return {
            clerkUserIdIdx: index("UserOrganisation_clerkUserId_idx").on(table.clerkUserId),
            clerkOrgIdIdx: index("UserOrganisation_clerkOrgId_idx").on(table.clerkOrgId),
            projectIdIdx: index("UserOrganisation_projectId_idx").on(table.projectId),
            userOrganisationId: primaryKey(table.id),
            userOrganisationIdKey: unique("UserOrganisation_id_key").on(table.id),
            userOrganisationClerkUserIdKey: unique("UserOrganisation_clerkUserId_key").on(table.clerkUserId),
            userOrganisationDiscordUserIdKey: unique("UserOrganisation_discordUserId_key").on(table.discordUserId),
        }
    });