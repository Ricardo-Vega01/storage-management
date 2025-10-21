/*
  Warnings:

  - You are about to drop the column `category` on the `File` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `ClientConfig` table without a default value. This is not possible if the table is not empty.
  - Added the required column `clientConfigId` to the `ClientTenant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `File` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deletedAt` to the `Folder` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ClientConfig" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedBy" TEXT;

-- AlterTable
ALTER TABLE "ClientTenant" ADD COLUMN     "clientConfigId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "File" DROP COLUMN "category",
ADD COLUMN     "deletedAt" TIMESTAMP(3),
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedBy" TEXT;

-- AlterTable
ALTER TABLE "Folder" ADD COLUMN     "deletedAt" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "AdminAccessLog" (
    "id" TEXT NOT NULL,
    "adminId" TEXT NOT NULL,
    "clientTenantId" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "entityId" TEXT,
    "entityType" TEXT,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AdminAccessLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlatformAdminLog" (
    "id" TEXT NOT NULL,
    "superId" TEXT NOT NULL,
    "clientTenantId" TEXT,
    "action" TEXT NOT NULL,
    "targetId" TEXT,
    "targetType" TEXT,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "planId" TEXT,

    CONSTRAINT "PlatformAdminLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ImpersonationLog" (
    "id" TEXT NOT NULL,
    "superId" TEXT NOT NULL,
    "targetUserId" TEXT NOT NULL,
    "clientTenantId" TEXT NOT NULL,
    "reason" TEXT,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ImpersonationLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "AdminAccessLog_adminId_idx" ON "AdminAccessLog"("adminId");

-- CreateIndex
CREATE INDEX "AdminAccessLog_clientTenantId_idx" ON "AdminAccessLog"("clientTenantId");

-- CreateIndex
CREATE INDEX "AdminAccessLog_timestamp_idx" ON "AdminAccessLog"("timestamp");

-- CreateIndex
CREATE INDEX "PlatformAdminLog_superId_idx" ON "PlatformAdminLog"("superId");

-- CreateIndex
CREATE INDEX "PlatformAdminLog_clientTenantId_idx" ON "PlatformAdminLog"("clientTenantId");

-- CreateIndex
CREATE INDEX "PlatformAdminLog_timestamp_idx" ON "PlatformAdminLog"("timestamp");

-- CreateIndex
CREATE INDEX "ImpersonationLog_superId_idx" ON "ImpersonationLog"("superId");

-- CreateIndex
CREATE INDEX "ImpersonationLog_targetUserId_idx" ON "ImpersonationLog"("targetUserId");

-- CreateIndex
CREATE INDEX "ImpersonationLog_clientTenantId_idx" ON "ImpersonationLog"("clientTenantId");

-- CreateIndex
CREATE INDEX "ClientConfig_domain_idx" ON "ClientConfig"("domain");

-- CreateIndex
CREATE INDEX "ClientTenant_slug_idx" ON "ClientTenant"("slug");

-- CreateIndex
CREATE INDEX "ClientTenant_status_idx" ON "ClientTenant"("status");

-- CreateIndex
CREATE INDEX "ClientTenant_planId_idx" ON "ClientTenant"("planId");

-- CreateIndex
CREATE INDEX "File_ownerId_idx" ON "File"("ownerId");

-- CreateIndex
CREATE INDEX "File_folderId_idx" ON "File"("folderId");

-- CreateIndex
CREATE INDEX "File_createdAt_idx" ON "File"("createdAt");

-- CreateIndex
CREATE INDEX "Folder_ownerId_idx" ON "Folder"("ownerId");

-- CreateIndex
CREATE INDEX "Folder_parentId_idx" ON "Folder"("parentId");

-- CreateIndex
CREATE INDEX "UserSession_userId_idx" ON "UserSession"("userId");

-- CreateIndex
CREATE INDEX "UserSession_deviceId_idx" ON "UserSession"("deviceId");

-- CreateIndex
CREATE INDEX "UserSession_ipAddress_idx" ON "UserSession"("ipAddress");

-- AddForeignKey
ALTER TABLE "ClientTenant" ADD CONSTRAINT "ClientTenant_clientConfigId_fkey" FOREIGN KEY ("clientConfigId") REFERENCES "ClientConfig"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlatformAdminLog" ADD CONSTRAINT "PlatformAdminLog_planId_fkey" FOREIGN KEY ("planId") REFERENCES "Plan"("id") ON DELETE SET NULL ON UPDATE CASCADE;
