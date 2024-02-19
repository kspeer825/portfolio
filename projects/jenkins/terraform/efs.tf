// TODO configure EFS backup

resource "aws_efs_file_system" "jenkins-efs" {
  creation_token   = "jenkins-efs"
  encrypted        = true
  performance_mode = "generalPurpose"
  throughput_mode  = "bursting"

  lifecycle_policy {
    transition_to_ia = "AFTER_14_DAYS"
  }

  protection {
    replication_overwrite = "ENABLED"
  }

  tags = {
    Name = "jenkins"
  }
}

resource "aws_efs_access_point" "jenkins-access-point" {
  file_system_id = aws_efs_file_system.jenkins-efs.id

  posix_user {
    gid = 0
    uid = 0
  }

  root_directory {
    path = "/"
    creation_info {
      owner_gid   = 1000
      owner_uid   = 1000
      permissions = "755"
    }
  }

  tags = {
    Name = "jenkins"
  }

}

resource "aws_efs_mount_target" "uno" {
  file_system_id  = aws_efs_file_system.jenkins-efs.id
  subnet_id       = aws_subnet.uno.id
  security_groups = [aws_security_group.jenkins-efs.id]
}

resource "aws_efs_mount_target" "dos" {
  file_system_id  = aws_efs_file_system.jenkins-efs.id
  subnet_id       = aws_subnet.dos.id
  security_groups = [aws_security_group.jenkins-efs.id]
}

resource "aws_efs_mount_target" "tres" {
  file_system_id  = aws_efs_file_system.jenkins-efs.id
  subnet_id       = aws_subnet.tres.id
  security_groups = [aws_security_group.jenkins-efs.id]
}

resource "aws_efs_mount_target" "quatro" {
  file_system_id  = aws_efs_file_system.jenkins-efs.id
  subnet_id       = aws_subnet.quatro.id
  security_groups = [aws_security_group.jenkins-efs.id]
}

resource "aws_efs_mount_target" "cinco" {
  file_system_id  = aws_efs_file_system.jenkins-efs.id
  subnet_id       = aws_subnet.cinco.id
  security_groups = [aws_security_group.jenkins-efs.id]
}

resource "aws_efs_mount_target" "seis" {
  file_system_id  = aws_efs_file_system.jenkins-efs.id
  subnet_id       = aws_subnet.seis.id
  security_groups = [aws_security_group.jenkins-efs.id]
}
